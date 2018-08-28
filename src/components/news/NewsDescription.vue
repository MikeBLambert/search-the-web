<template>
    <p>
        {{article.description}}
    </p>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    article: Object
  },
};
</script>

<style scoped>
p {
    color: red;
}
</style>
