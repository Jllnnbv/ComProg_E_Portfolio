/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clay-cream': '#F4EFEA',
        'clay-sage': '#B5C9C3',
        'clay-blue': '#A3C4DC',
        'clay-charcoal': '#2C302E',
        'clay-muted': '#52635E',
        // Semantic aliases mapped to the Claymorphic palette
        'crimson-depth': '#2C302E',
        'warm-sand': '#52635E',
        'soft-pearl': '#F4EFEA',
        'obsidian-black': '#2C302E',
      },
      fontFamily: {
        serif: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
