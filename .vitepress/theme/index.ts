import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { Theme } from 'vitepress'
import Layout from './Layout.vue'

export default <Theme>{
    Layout: Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
    },
}