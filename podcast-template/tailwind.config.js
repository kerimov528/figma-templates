export default ({
  content: ['./index.html',"./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'black': '#000',
      'davysGrey': '#4D4D4D',
      'vermillion': '#CD4631',
      'pewterBlue': '#81ADC8',
      'champagne': '#F7EDE8',
      'aliceBlue': '#EDF3F7'
    },
    extend: {
      backgroundImage: {
        covid_pandemic: "url('/assets/cover.png)",
        perplexed_mind: "url('/assets/perplexed_mind.png",
        self_confidence: "url('/assets/self_confidence.png",
        social_class: "url('/assets/social_class.png')",
        tesla_autopilot: "url('/assets/tesla_autopilot')",
        womens_right: "url('/assets/womens_right.png')"
      }
    },
  },
  plugins: [],
})