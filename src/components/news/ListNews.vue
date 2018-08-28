<template>
    <section>
        <div class="news-stories">
            <h2>News</h2>
            <NewsSearch :onSearch="handleSearch"/>
            <ul>
                <News v-for="article in articles"
                    :key="article.title"
                    :article="article" 
                    :onSelect="handleSelect"   
                />
            </ul>
        </div>
        <div class="article-description">
            <h2 v-if="selected">Article Synopsis:</h2>
            <NewsDescription v-if="selected"
                :article="selected"/>  
        </div>
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
      search: '',
      selected: null
    };
  },
  props: {
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
        });
    },
    handleSelect(article) {
      this.selected = article;
    }
  },
};
</script>

<style>

ul {
    font: 20px impact;
}

section {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: "a" "a";
}
</style>
