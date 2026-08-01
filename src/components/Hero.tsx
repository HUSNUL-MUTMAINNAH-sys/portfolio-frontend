import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { useData } from '../context/DataContext'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { profile, loading } = useData()
  const { t } = useLanguage()

  if (loading || !profile) return null

  const roles = profile.role.split(',').map((r) => r.trim())

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <motion.div
          className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[100px] animate-drift"
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-accent-light/25 blur-[100px] animate-drift"
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-2 text-accent mb-5"
          >
            <Sparkles size={14} /> {t('hero.greeting')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black uppercase leading-[0.92] tracking-tight text-balance text-[clamp(2.8rem,7vw,5.2rem)]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {roles.map((r, i) => (
              <span
                key={r}
                className={`text-xs sm:text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full border ${
                  i === 0
                    ? 'bg-accent text-ink border-accent shadow-soft'
                    : 'border-line dark:border-white/15 text-ink/70 dark:text-white/70'
                }`}
              >
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-md text-ink/60 dark:text-white/60 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white dark:bg-white dark:text-ink px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('hero.viewProjects')}
            </a>
          </motion.div>
        </div>

        {/* right — floating photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
            <div className="absolute -inset-4 rounded-xl3 border border-line dark:border-white/10" />
            <motion.div
              className="relative h-full w-full rounded-xl3 overflow-hidden shadow-card animate-float bg-mist dark:bg-white/5"
            >
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 glass border border-line dark:border-white/10 rounded-2xl px-4 py-3 shadow-soft animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <p className="text-2xl font-extrabold font-display">{profile.projectsCount}+</p>
              <p className="text-xs text-ink/50 dark:text-white/50">Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs text-ink/40 dark:text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll
        <ArrowDown size={14} />
      </motion.a>
    </section>
  )
}
