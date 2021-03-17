import {
    createRouter,
    createWebHistory
} from "vue-router";
import {
    nextTick
} from 'vue'
const HelloWorld = () =>
    import ('./HelloWorld.vue');
const ASixPrint = () =>
    import ('./ASixPrint.vue');
const PDFDocument = () =>
    import ('./PDFDocument.vue');
const TuiImageEditor = () =>
    import ('./TuiImageEditorComponent.vue');
const SearchEngine = () =>
    import ('./SearchEngine.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: HelloWorld
    }, {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
        meta: {
            title: 'Form with Focus'
        }
    }, {
        path: '/pdf-document',
        name: 'pdf',
        component: PDFDocument,
        props: true,
        meta: {
            title: 'PDF Reader'
        }
    }, {
        path: '/image-editor',
        name: 'editor',
        component: TuiImageEditor,
        props: true,
        meta: {
            title: 'Image Editor'
        }
    }, {
        path: '/search-engine',
        name: 'search_engine',
        component: SearchEngine,
        meta: {
            title: 'Lunr Search with Movies DB '
        }
    }, {
        path: '/print',
        name: 'print',
        component: ASixPrint
    }, ]
});
const DEFAULT_TITLE = 'Vue3 Multi-Mini Applications';
router.afterEach((to) => {
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
})

export default router