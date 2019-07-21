// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

// Imports any global styles once so they don't have to be imported multiple times
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/global/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Bermon Painter | Innovation & Strategy Leader @ EY - Community Organizer – International Speaker',
  siteDescription: 'Bermon has spent the past 20 years focused on product strategy, design, and web development. He currently works with EY Digital where he leads innovation initiatives for EY’s wavespace™ in Charlotte, NC. He frequently speaks at conferences and facilitates workshops around the world. In his local community, Bermon organizes numerous free community events, hosts a quarterly mini-conference called FusionConf, and leads the Charlotte IxDA chapter. In his free time, he enjoys drinking a tasty frosted mug of root beer while maniacally twisting his mustache.',

  // Load global sass files
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  
  plugins: []
}
