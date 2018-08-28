<template>
  <div class="app">
    <header>
      <img src="./assets/globe.png">
      <h1>Lazy News Now Fast!!</h1>
      <div class="nav-bar">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/news">News</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>

export default {

};
</script>

<style >

header {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgb(1, 1, 70);
  box-shadow: 2px 2px 5px;
}

header img {
  height: 100%;
}

h1 {
  font-family: impact;
  font-size: 50px;
  color: gray;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 10px;
  padding: 10px 30px 10px 30px; 
  border: 1px solid rgb(1, 1, 70);
  font-size: 25px;
  background-color:rgb(187, 186, 186);
  border-radius: 15px;
  box-shadow: 2px 2px 5px;
  font-family: impact;

}

.nav-bar {
  margin-right: 150px;
}

main {
  padding: 8px;
  box-shadow: 2px 2px 5px;
  border: 2px solid rgb(1, 1, 70);
}

img {
  width: 140px;
  height: 120px; 
  padding-left: 45px;
}

main {
  /* background-color: rgb(92, 167, 252); */
  height: 100%;
}

</style>
