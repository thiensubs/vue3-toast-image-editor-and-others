<template>
    <div>
        <ul>
          <li v-for="item in results" :key="item.ref">{{documents[item.ref].title}}</li>
        </ul>
    </div>
    <div class="content_detail__pagination cdp" actpage="1">
        <a href="#!-1" class="cdp_i">prev</a>

        <a href='#!' :key="pageNumber" class="cdp_i" v-for="pageNumber in totalPages">{{pageNumber}}</a>
        <a href="#!+1" class="cdp_i">next</a>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    name: 'Pagination',
    props: ['items', 'perPage', 'documents'],
    setup(props){
        const currentPage = ref(2)
        const results = ref([])
        const totalPages = ref(0)
        let page = props.currentPage || 1
        let per_page = props.perPage || 10
        const offset = ref(0)
        offset.value = (page - 1) * per_page

        results.value = props.items.slice(offset.value).slice(0, per_page)
        const total_pages = ref(0)
        totalPages.value = Math.ceil(props.items.length / per_page);

        return {
            results,
            currentPage,
        }
    }
}
</script>
<style scoped lang="scss">
@import '../assets/pagination.scss' 
</style>
