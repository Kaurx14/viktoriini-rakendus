import { useEffect } from "react"
import { useTranslation } from 'react-i18next'

export function Header() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'et'
  const containerClass = 'mx-auto w-[min(1400px,calc(100%-20px))] sm:w-[min(1400px,calc(100%-32px))]'
  const languageButtonClass =
    'cursor-pointer border-0 bg-transparent p-0 text-[13px] leading-[1.2] font-bold sm:text-[14px]'

  // Keele muutumisel, vaheta ka index.html title
  useEffect(() => {
    document.title = t("pageTitle")
  }, [i18n.language, t])


  return (
    <header className="w-full">
      <div className="bg-black text-white">
        <div className={`${containerClass} flex min-h-10 items-center justify-between gap-4`}>
          <span className="text-[13px] leading-[1.2] font-bold sm:text-[14px]">
            {t('topBarTitle')}
          </span>

          <div
            className="flex items-center gap-2"
            role="group"
            aria-label={t('languageSwitcherLabel')}
          >
            <button
              className={`${languageButtonClass} ${
                language === 'et' ? 'text-white' : 'text-white/76'
              }`}
              type="button"
              onClick={() => void i18n.changeLanguage('et')}
              aria-pressed={language === 'et'}
            >
              EST
            </button>
            <span className="text-white/76" aria-hidden="true">
              |
            </span>
            <button
              className={`${languageButtonClass} ${
                language === 'en' ? 'text-white' : 'text-white/76'
              }`}
              type="button"
              onClick={() => void i18n.changeLanguage('en')}
              aria-pressed={language === 'en'}
            >
              ENG
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-[#dddddd] bg-[radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] [background-position:top_left] [background-size:18px_18px] bg-white">
        <div className={`${containerClass} flex min-h-[76px] items-center sm:min-h-[92px]`}>
          <a className="inline-flex items-center no-underline" href="/" aria-label={t('logoAlt')}>
            <span className="inline-flex items-center bg-white px-3">
              <img className="block h-13 w-auto" src={language == 'en' ? "ES_Logo_ENG.jpg": "ES_Logo.svg"} alt={t('logoAlt')} />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
