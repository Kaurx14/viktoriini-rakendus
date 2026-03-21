import { useTranslation } from 'react-i18next'

export function Header() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'et'

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar__inner">
          <span className="top-bar__title">{t('topBarTitle')}</span>

          <div
            className="language-switch"
            role="group"
            aria-label={t('languageSwitcherLabel')}
          >
            <button
              className={`language-switch__button${language === 'et' ? ' is-active' : ''}`}
              type="button"
              onClick={() => void i18n.changeLanguage('et')}
              aria-pressed={language === 'et'}
            >
              EST
            </button>
            <span className="language-switch__divider" aria-hidden="true">
              |
            </span>
            <button
              className={`language-switch__button${language === 'en' ? ' is-active' : ''}`}
              type="button"
              onClick={() => void i18n.changeLanguage('en')}
              aria-pressed={language === 'en'}
            >
              ENG
            </button>
          </div>
        </div>
      </div>

      <div className="site-nav">
        <div className="site-nav__inner">
          <a className="site-nav__logo-link" href="/" aria-label={t('logoAlt')}>
            {/* <div className="site-nav__logo-placeholder">{t('logoText')}</div> */}
            <img className="site-nav__logo-placeholder" src="ES_Logo.svg" alt={t('logoAlt')} />
          </a>
        </div>
      </div>
    </header>
  )
}
