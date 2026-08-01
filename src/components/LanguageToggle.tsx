import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-line dark:border-white/15 p-1 bg-white dark:bg-ink">
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
          language === 'id'
            ? 'bg-accent text-white'
            : 'text-ink/60 dark:text-white/60 hover:text-ink dark:hover:text-white'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
          language === 'en'
            ? 'bg-accent text-white'
            : 'text-ink/60 dark:text-white/60 hover:text-ink dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}
