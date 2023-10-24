import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPurple:{
          100:"#E5E0FD",
          200: "#DED4F8",
          300:"#BDAAF8",
          400: "#6F4AF3",
          500: "#6E49F2",
        } ,
        bgCream:{
          
          100: "#FEFBEF",
          200: "#FFF1DB",
        },
        bgNude:{
          100: "#FDF7F3",
          200: "#FCEBE2",
        },
        bgBlue:{
          50: "#F4F9F9",
          100:"#EEF9FF",
        }

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
