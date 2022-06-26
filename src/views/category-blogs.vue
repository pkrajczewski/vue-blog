<template>
  <section class="row">
    <AddBlog />
    <BlogList :blogs="blogs" />
  </section>
</template>

<script>
import AddBlog from "@/components/add-blog/add-blog";
import BlogList from "@/components/blog-list/blog-list";
import { mapGetters } from "vuex";
export default {
  components: {
    AddBlog,
    BlogList,
  },
  computed: {
    ...mapGetters({
      categoryBlogs: "Blogs/categoryBlogs",
    }),
    blogs() {
      return this.categoryBlogs(this.$route.params.categoryId);
    },
  },
};
</script>