/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        primary: 'var(--color-primary)',
        'gray-light': 'var(--color-gray-light)',
        'gray-lighter': 'var(--color-gray-lighter)',
        'gray-border': 'var(--color-gray-border)',
        'gray-border-light': 'var(--color-gray-border-light)',
        'text-dark': 'var(--color-text-dark)',
        error: 'var(--color-error)',
        'bg-cream': 'var(--color-bg-cream)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

