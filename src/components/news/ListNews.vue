<template>
    <section>
        <h2>News</h2>
        <NewsSearch :onSearch="handleSearch"/>
        <ul>
            <News v-for="article in articles"
                :key="article.title"
                :article="article"    
            />
            <NewsDescription/>
        </ul>
    
    </section>
</template>

<script>

import api from '../services/api.js';
import News from './News.vue';
import NewsSearch from './NewsSearch.vue';
import NewsDescription from './NewsDescription';

export default {
    data() {
        return {
            articles: null,
            search: ''
        };
    },
    components: {
        News,
        NewsSearch,
        NewsDescription
    },
    created() {
        },
    methods: {
        handleSearch(search) {
            this.search = search;
            this.searchNews();
        },
        searchNews() {
            api.getNews(this.search)
            .then(response => {
                this.articles = response.articles;
            })
        }
    }
}
</script>

<style>

</style>
