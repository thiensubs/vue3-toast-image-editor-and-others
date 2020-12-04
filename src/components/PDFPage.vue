<template>
  <canvas ref="myCanvas" v-bind="canvasAttrs"></canvas>
</template>
<script>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
export default {
  props: ['page', 'scale'],
  inheritAttrs: false,
  setup(props){
    const myCanvas = ref(null)
    const viewport = props.page.getViewport({ scale: props.scale, })
    let actualSizeViewport = computed(() => viewport.clone({scale: props.scale}))

    let canvasStyle =  computed(() => {
      const {width: actualSizeWidth, height: actualSizeHeight} = actualSizeViewport.value;
      const pixelRatio = window.devicePixelRatio || 1;
      const [pixelWidth, pixelHeight] = [actualSizeWidth, actualSizeHeight].map(dim => Math.ceil(dim / pixelRatio));
      return `width: ${pixelWidth}px; height: ${pixelHeight}px;`
    })
    let canvasAttrs = computed(() => {
      let {width, height} = actualSizeViewport.value;
      [width, height] = [width, height].map(dim => Math.ceil(dim));

      const style = canvasStyle;
      return {
        width,
        height,
        style,
        class: 'pdf-page box-shadow',
      };
    })
    console.log(canvasAttrs.value)
    let page = computed(() => props.page.pageNumber)
    watch(page, (count, prevCount) => {
      destroyPage(prevCount)
    })
    function renderPage() {
       // const renderTask = props.page.render(getRenderContext());
      props.page.render(getRenderContext());

    }
    function getRenderContext() {
      const canvasContext = myCanvas.value.getContext('2d');
      return {canvasContext, viewport};
    }
    function destroyPage(page) {
      if (!page) return;

      // PDFPageProxy#_destroy
      // https://mozilla.github.io/pdf.js/api/draft/PDFPageProxy.html
      page._destroy();

      // RenderTask#cancel
      // https://mozilla.github.io/pdf.js/api/draft/RenderTask.html
      // if (renderTask) renderTask.cancel();
    }
    onMounted(() => {
      renderPage();
    })
    onUnmounted(() => {
      destroyPage(props.page);
    })

    return {
      viewport,
      actualSizeViewport,
      canvasStyle,
      canvasAttrs,
      renderPage,
      getRenderContext,
      destroyPage,
      myCanvas
    }
  }
};
</script>
<style>
.pdf-page {
  display: block;
  margin: 0 auto 0.5em;
}
</style>
