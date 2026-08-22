<template>
  <div class='page' :data-page-number="page.pageNumber">
    <div class="canvasWrapper">
      <canvas ref="myCanvas" v-bind="canvasAttrs">
      </canvas>
    </div>
    <div ref="textLayer">
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { TextLayer } from 'pdfjs-dist/build/pdf.mjs';
// CanvasRenderingContext2D.prototype.strokeText = function () { };
// CanvasRenderingContext2D.prototype.fillText = function () { };
export default {
  props: ['page', 'scale'],
  inheritAttrs: false,
  setup(props){
    const myCanvas = ref(null)
    const textLayer = ref(null)
    // Render the backing store at devicePixelRatio so text stays sharp on
    // HiDPI screens; the CSS size stays at CSS pixels.
    const pixelRatio = window.devicePixelRatio || 1;
    const viewport = props.page.getViewport({ scale: props.scale, })

    let canvasAttrs = computed(() => {
      const {width, height} = viewport.clone({scale: props.scale});
      return {
        width: Math.floor(width * pixelRatio),
        height: Math.floor(height * pixelRatio),
        style: `width: ${Math.floor(width)}px; height: ${Math.floor(height)}px;`,
        class: 'pdf-page box-shadow',
      };
    })
    let page = computed(() => props.page.pageNumber)
    watch(page, (count, prevCount) => {
      destroyPage(prevCount)
    })
    function renderPage() {
      // const ctx = myCanvas.value.getContext('2d', { alpha: false });
       // const renderTask = props.page.render(getRenderContext());
      props.page.getTextContent().then(textContent => {

        textLayer.value.setAttribute('class', 'textLayer');
        // pdf.js v4+ sizes the text layer from this CSS variable.
        textLayer.value.style.setProperty('--total-scale-factor', String(props.scale));
        const textRender = new TextLayer({
          textContentSource: textContent,
          container: textLayer.value,
          viewport: viewport.clone({scale: props.scale}),
        });
        textRender.render();
        props.page.render(getRenderContext());
        // textLayerInside.setTextContent(textContent)
        // textContent.items.forEach(function (textItem) {
        //   var tx = global.pdfjsLib.Util.transform(
        //     global.pdfjsLib.Util.transform(viewport.transform, textItem.transform),
        //     [1, 0, 0, -1, 0, 0]
        //   );

        //   var style = textContent.styles[textItem.fontName];
          
        //   // adjust for font ascent/descent
        //   var fontSize = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));

        //   if (style.ascent) {
        //     tx[5] -= fontSize * style.ascent;
        //   } else if (style.descent) {
        //     tx[5] -= fontSize * (1 + style.descent);
        //   } else {
        //     tx[5] -= fontSize / 2;
        //   }
        //   // adjust for rendered width
        //   if (textItem.width > 0) {
        //     ctx.font = tx[0] + 'px ' + style.fontFamily;
            
        //     var width = ctx.measureText(textItem.str).width;

        //     if (width > 0) {
        //       //tx[0] *= (textItem.width * viewport.scale) / width;
        //       tx[0] = (textItem.width * viewport.scale) / width;
        //     }
        //   }

        //   // var item = document.createElementNS('http://www.w3.org/2000/svg', 'svg:text');
        //   // item.textContent = textItem.str;
        //   // item.setAttribute('font-family', style.fontFamily);
        //   // item.setAttribute('transform', 'matrix(' + tx.join(' ') + ')');

        //   var item = document.createElement('span');
        //   item.textContent = textItem.str;
        //   item.style.fontFamily = style.fontFamily;
        //   //item.style.transform = 'matrix(' + tx.join(',') + ')';
        //   item.style.fontSize = fontSize + 'px';
        //   item.style.transform = 'scaleX(' + tx[0] + ')';
        //   item.style.left = tx[4] + 'px';
        //   item.style.top = tx[5] + 'px';

        //   textLayer.value.appendChild(item);
        // });
        // var textLayer = TextLayerBuilder(textLayer.value.get(0), props.page.pageNumber-1); //The second zero is an index identifying
          //the page. It is set to page.number - 1.
        // textLayer.setTextContent(textContent);
      })

      // const returnedTarget = Object.assign(getRenderContext(), {textLayer: textLayer.value});
      // console.log(returnedTarget)
      

    }
    function getRenderContext() {
      const canvasContext = myCanvas.value.getContext('2d');
      return {
        canvasContext,
        viewport,
        transform: pixelRatio !== 1 ? [pixelRatio, 0, 0, pixelRatio, 0, 0] : null,
      };
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
    onBeforeUnmount(() => {
      destroyPage(props.page);
    })

    return {
      viewport,
      canvasAttrs,
      renderPage,
      getRenderContext,
      destroyPage,
      myCanvas,
      textLayer
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
