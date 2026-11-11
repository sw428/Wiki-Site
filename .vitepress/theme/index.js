import DefaultTheme from 'vitepress/theme'
import AnimationPlayer from './AnimationPlayer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) { app.component('AnimationPlayer', AnimationPlayer) }
}
