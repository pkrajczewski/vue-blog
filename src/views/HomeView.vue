<template>
  <div>
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from "@/components/blog-list/blog-list";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    BlogList,
  },
  computed: {
    ...mapState("Blogs", ["blogs"]),
  },
};
</script>
