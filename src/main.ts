import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/fr'
import quasarIconSet from 'quasar/icon-set/svg-fontawesome-v5'

// Import icon libraries
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')