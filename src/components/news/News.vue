<template>
    <li @click="handleClick">
        {{article.title}}  
    </li>
</template>

<script>

export default {
    props: {
        article: Object,
        onSelect: Function
    },
    methods: {
        handleClick() {
            this.onSelect(this.article);          
        }
    },
}
</script>

<style>

</style>
