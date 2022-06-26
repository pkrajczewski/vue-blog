<template>
  <div class="container mb-3">
    <b-list-group>
      <b-list-group-item
        v-for="category in categories"
        :active="
          $route.name === 'CategoryBlogs' &&
          $route.params.categoryId === category.id
        "
        :key="`category-${category.id}`"
        :to="{ name: 'CategoryBlogs', params: { categoryId: category.id } }"
        >{{ category.title }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from "vuex";
import getDocsRealTime from "@/helpers/firebase/getDocsRealTime";

export default {
  computed: {
    ...mapState("Categories", ["categories"]),
  },
  created() {
    getDocsRealTime("categories", "Categories", "categories");
    console.log(this.$route);
  },
};
</script>