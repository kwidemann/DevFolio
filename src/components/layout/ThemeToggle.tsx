'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const { theme = 'system', setTheme, resolvedTheme = 'light' } = useTheme();
  const currentTheme = theme === 'system' ? (resolvedTheme as 'light' | 'dark') : theme;

  const icons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />,
  } as const;

  const labels = {
    light: 'Modo claro',
    dark: 'Modo oscuro',
    system: 'Sistema',
  } as const;

  return (
    <div className="relative inline-flex items-center" suppressHydrationWarning>
      <button
        onClick={() => {
          const themes = ['light', 'dark', 'system'] as const;
          const currentIndex = themes.indexOf(theme as 'light' | 'dark' | 'system');
          setTheme(themes[(currentIndex + 1) % themes.length]);
        }}
        className="btn-ghost relative inline-flex items-center gap-2 h-10 rounded-lg px-3"
        aria-label={labels[theme as 'light' | 'dark' | 'system']}
        title={labels[theme as 'light' | 'dark' | 'system']}
        suppressHydrationWarning
      >
        <motion.div
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex h-full w-full items-center justify-center"
        >
          {icons[theme as 'light' | 'dark' | 'system']}
        </motion.div>
        <span className="text-sm font-medium">
          {theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System'}
        </span>
      </button>

      {/* Tooltip-like dropdown */}
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block" role="tooltip">
        <div className="bg-popover border border-border rounded-lg shadow-lg p-1 min-w-[140px] animate-slide-down">
          {(['light', 'dark', 'system'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                theme === t
                  ? 'bg-primary/10 text-primary'
                  : 'hover:bg-accent'
              }`}
            >
              {icons[t]}
              <span>{labels[t]}</span>
              {theme === t && <span className="ml-auto text-primary">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}