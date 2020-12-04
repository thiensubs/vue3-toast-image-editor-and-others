import { createApp } from 'vue'
import App from './App.vue';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'pace-js/themes/red/pace-theme-flash.css'
import PDFPage from './components/PDFPage.vue';
const app = createApp(App)
app.config.isCustomElement = (tag) => tag === 'pdf-page';
app.component('pdf-page', PDFPage)
app.mount('#app')
