<template>
    <div>
        <ul>
          <li v-for="item in results" :key="item.ref">{{documents[item.ref].title}}</li>
        </ul>
    </div>
    <div class="content_detail__pagination cdp" :actpage="page" v-if="totalPages>0">
        <a href="javascript:void(0)" @click=prev() class="cdp_i">prev</a>
        <a href='javascript:void(0)' @click=goPage(pageNumber) :key="pageNumber" class="cdp_i" v-for="pageNumber in totalPagesRender">{{pageNumber}}</a>
        <a href="javascript:void(0)" @click=next() class="cdp_i">next</a>
    </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
    name: 'Pagination',
    props: ['items', 'perPage', 'documents'],
    setup(props){
        const currentPage = ref(2)
        const results = ref([])
        const totalPages = ref(0)
        const totalPagesRender = ref([])
        const page = ref(1)
        page.value = props.currentPage || 1
        let per_page = props.perPage || 10
        const offset = ref(0)
        
        watch(() => props.items, (after) => {
            results.value = after.slice(offset.value).slice(0, per_page)
            totalPages.value = Math.ceil(props.items.length / per_page);
            if (totalPages.value > 10)
            {
                if (totalPages.value - page.value > 10 ){
                    const temp_array = range(page.value,page.value+10)
                    temp_array.push(totalPages.value)
                    totalPagesRender.value = temp_array
                }
                else
                {
                    totalPagesRender.value = totalPages.value 
                }
            }
            else
            {
                totalPagesRender.value = range(page.value,page.value+10)
            }
        })
        watch(page, (newValue) => {
            offset.value = (newValue - 1) * per_page
            if (totalPages.value - page.value > 10 ){
                const temp_array = range(page.value,page.value+10)
                temp_array.push(totalPages.value)
                totalPagesRender.value = temp_array 
            }
            else
            {
                totalPagesRender.value = totalPages.value 
            }
           
        })
        watch(offset, () => {
            results.value = props.items.slice(offset.value).slice(0, per_page)
        })
        function next() {
            page.value += 1;
        }
        function prev() {
            page.value -= 1;
        }
        function actPage(currentPage, pageNumber){
            if (currentPage === pageNumber)
                return pageNumber
        }
        function goPage(pageNumber) {
            page.value = pageNumber;
        }
        function range(start, end) {
          return Array(end - start + 1).fill().map((_, idx) => start + idx)
        }
        return {
            results,
            currentPage,
            totalPages,
            prev,
            next,
            actPage,
            page,
            goPage,
            totalPagesRender
        }
       
    }
}
</script>
<style scoped lang="scss">
@import '../assets/pagination.scss' 
</style>
