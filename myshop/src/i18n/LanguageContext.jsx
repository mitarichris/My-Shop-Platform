import { useEffect, useState } from 'react'
import { LanguageContext } from './lang'
import { translations } from './translations'

const localStorageKey = 'myrent-lang'

function getValue(obj, key) {
  return key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(localStorageKey) || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(localStorageKey, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const t = (key) =>
    getValue(translations[lang], key) ?? getValue(translations.en, key) ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}