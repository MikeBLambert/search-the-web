<template>
    <form @submit.prevent="handleSubmit">
        <div id="search-bar">
            <label>
                Search News Now Fast!
                <input v-model="search">
                <button>Go</button>
            </label>
        </div>
    </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      search:''
    };
  },
  methods:{
    handleSubmit() {
      this.onSearch(this.search);
    }
  }
};
</script>

<style>



label {
    float: center;
    font-family: impact;
    font-size: 25px;
}

button {
    border-radius: 15px;
}

#search-bar {
    text-align: center;
}

</style>
