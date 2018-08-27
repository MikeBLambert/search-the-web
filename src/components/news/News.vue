<template>
    <li @click="handleClick">
        <i>{{article.title}}</i>
    </li>
</template>

<script>
export default {
    props: {
        article: Object
    },
    

}
</script>

<style>

</style>
