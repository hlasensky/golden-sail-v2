import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'card-gradient-radial': 'radial-gradient(800px) circle at 100px 100px, #DBEBFF, transparent 40%',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "darkBlue": "#071125",
        "lighterBlue": "#0C2144",
        "lighterLighterBlue": "#16488F",
        "whiteBlue": "#DBEBFF",
        "gold": "#C08D2C",
      }
    },
  },
  plugins: [],
}
export default config
