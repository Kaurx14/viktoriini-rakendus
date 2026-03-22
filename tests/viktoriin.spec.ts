import { expect, test, type Page } from '@playwright/test'
import { questions } from '../src/data/questions'

const kusimusteArv = questions.length
const esimeneKusimus = questions[0]

const leiaOigeVastus = (kusimus: (typeof questions)[number]) =>
  kusimus.answers.find((vastus) => vastus.isCorrect)?.text.et ?? ''

const leiaValeVastus = (kusimus: (typeof questions)[number]) =>
  kusimus.answers.find((vastus) => !vastus.isCorrect)?.text.et ?? ''

const vastaKusimustele = async (page: Page, valitudVastused: string[]) => {
  for (const [indeks, vastus] of valitudVastused.entries()) {
    await page.getByRole('button', { name: vastus }).click()

    if (indeks < valitudVastused.length - 1) {
      await expect(page.getByText(`Küsimus ${indeks + 2} / ${kusimusteArv}`)).toBeVisible()
    }
  }
}

test.describe('Viktoriinirakendus', () => {
  test('avab rakenduse ja kuvab esimese küsimuse', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText(`Küsimus 1 / ${kusimusteArv}`)).toBeVisible()
    await expect(page.getByText('Punktisumma: 0')).toBeVisible()
    await expect(page.getByText(esimeneKusimus.question.et)).toBeVisible()
  })

  test('õige vastus muudab punktisummat', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('button', { name: leiaOigeVastus(esimeneKusimus) }).click()

    await expect(page.getByText('Õige vastus!')).toBeVisible()
    await expect(page.getByText('Punktisumma: 1')).toBeVisible()
    await expect(page.getByText(`Küsimus 2 / ${kusimusteArv}`)).toBeVisible()
  })

  test('vale vastuse korral kuvatakse õige vastuse tagasiside', async ({ page }) => {
    await page.goto('/')

    const valeVastus = leiaValeVastus(esimeneKusimus)
    const oigeVastus = leiaOigeVastus(esimeneKusimus)

    await page.getByRole('button', { name: valeVastus }).click()

    await expect(page.getByText(`Vale vastus. Õige vastus on: ${oigeVastus}`)).toBeVisible()
    await expect(page.getByText('Punktisumma: 0')).toBeVisible()
  })

  test('kuvab lõpptulemuse pärast kõigi küsimuste vastamist', async ({ page }) => {
    await page.goto('/')

    const valitudVastused = [
      leiaOigeVastus(questions[0]),
      leiaValeVastus(questions[1]),
      leiaOigeVastus(questions[2]),
      leiaValeVastus(questions[3]),
      leiaOigeVastus(questions[4]),
    ]

    await vastaKusimustele(page, valitudVastused)

    await expect(page.getByRole('heading', { name: 'Tulemused' })).toBeVisible()
    await expect(page.getByText(`Skoor: 3 / ${kusimusteArv}`)).toBeVisible()

    for (const kusimus of questions) {
      await expect(page.getByRole('cell', { name: kusimus.question.et })).toBeVisible()
    }

    // 3 õiget ja 2 valet vastust
    await expect(page.getByText('Õige')).toHaveCount(3)
    await expect(page.getByText('Vale')).toHaveCount(2)
  })
})
