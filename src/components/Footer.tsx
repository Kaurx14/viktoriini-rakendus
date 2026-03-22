import { useTranslation } from 'react-i18next'

// Footer üritab jäljendada Statistikaameti veebilehe oma
// Jätsin välju uudiskirja, küpsised, andmekaitse
export function Footer() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'et'
  
  return (
    <footer className="mt-10 bg-black text-white">
      <div className="h-8 bg-black" />

      <div className="bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-position:top_left] [background-size:18px_18px] bg-black">
        <div className="mx-auto grid w-[min(1400px,calc(100%-20px))] gap-10 px-0 py-10 sm:w-[min(1400px,calc(100%-32px))] sm:grid-cols-[minmax(0,1fr)_320px] sm:items-start sm:py-12">
          <div className="max-w-max bg-black p-6">
            <h2 className="mb-6 text-[24px] leading-tight font-bold">{t('footerContactsTitle')}</h2>

            <div className="flex flex-col gap-5">
              <a
                className="inline-flex items-center gap-4 text-[18px] leading-[1.3] font-bold text-white no-underline hover:underline"
                href="tel:+3726259300"
              >
                <span className="text-[18px]" aria-hidden="true">
                  ☎
                </span>
                <span>+372 625 9300</span>
              </a>

              <a
                className="inline-flex items-center gap-4 text-[18px] leading-[1.3] font-bold text-white no-underline hover:underline"
                href="mailto:stat@stat.ee"
              >
                <span className="text-[18px]" aria-hidden="true">
                  ✉
                </span>
                <span>stat@stat.ee</span>
              </a>
            </div>
          </div>

          <div className="flex justify-start sm:justify-end">
            <div className="flex min-h-[160px] w-full max-w-[260px] items-center justify-center bg-white p-4">
              <div className="text-center text-sm font-medium text-black">
                <a href="https://www.stat.ee/et/statistikaamet/meist/struktuurfondide-toetatud-projektid" target="_blank">
                  <img src={language == 'en' ? 'EL_ENG.jpg': 'EL.jpg'} alt={t("EU")} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 bg-black" />
    </footer>
  )
}
