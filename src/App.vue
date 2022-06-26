<template>
  <div id="app">
    <Header />
    <aside>
      <CategoriesList />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import CategoriesList from "@/components/categories-list/categories-list";
import getDocsRealTime from "@/helpers/firebase/getDocsRealTime";

export default {
  components: {
    Header,
    CategoriesList,
  },
  created() {
    getDocsRealTime("blogs", "Blogs", "blogs");
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
