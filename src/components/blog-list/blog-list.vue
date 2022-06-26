<template>
  <section class="blog-list col-12">
    <div class="container">
      <div class="row">
        <div
          v-for="blog in blogs"
          :key="`blog-${blog.id}`"
          class="col-12 col-lg-6 col-xl-4"
        >
          <img :src="blog.photo" alt="" class="img-fluid" height="300" />
          <h3 class="title">{{ blog.title }}</h3>
          <div class="description">
            <p>
              {{ blog.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: false,
      default: [],
    },
  },
};
</script>