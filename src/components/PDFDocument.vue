<template>
  <div class="pdf-document">
    <PDFPage
      v-for="page_single in pages"
      v-bind:page="page_single"
      v-bind:scale="scale"
      :key="page_single.pageNumber"
    />
  </div>
</template>

<script>
const pdfjsWorker = import('pdfjs-dist/build/pdf.worker.entry');
var pdfjsLib = require('pdfjs-dist/build/pdf')
global.pdfjsLib = pdfjsLib
window.pdfjsLib = pdfjsLib
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import PDFPage from './PDFPage.vue'
export default {
  props: ['url', 'scale'],
  name: 'PDFDocument',
  component: {
    PDFPage,
  },
  data() {
    return {
      pdf: undefined,
      pdfDoc: null,
      pages: [],
    };
  },
  created() {
    this.initPDF();
  },

  methods: {
    initPDF(){
      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(this.url);
      loadingTask.promise.then(pdfDoc_ => {
        this.pdfDoc =pdfDoc_;
      })
    },
  },
  watch: {
    pdfDoc(pdfDoc) {
      this.pages = [];
      var array_pages = [];
      for (var i = 0; i < pdfDoc.numPages; i++) {
        array_pages.push(i+1)
      }
      const promises = array_pages.map(number => pdfDoc.getPage(number));
      Promise.all(promises).
        then(pages => {
          console.log(pages)
          this.pages = pages        
        });
      console.log(this.pages)
    },
  },
};
</script>

