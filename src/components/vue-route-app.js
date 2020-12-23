import { createRouter, createWebHistory } from "vue-router";
const HelloWorld = () => import('./HelloWorld.vue');
const ASixPrint = () => import('./ASixPrint.vue');
const PDFDocument = () => import('./PDFDocument.vue');
const TuiImageEditor = () => import('./TuiImageEditorComponent.vue');
const SearchEngine = () => import('./SearchEngine.vue');

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ASixPrint  }, 
    { path: '/hello', name: 'hello', component: HelloWorld },
    { path: '/pdf-document', name: 'pdf', component: PDFDocument, props: true },
    { path: '/image-editor', name: 'editor', component: TuiImageEditor, props: true },
    { path: '/search-engine', name: 'search-engine', component: SearchEngine },
  ]
});
