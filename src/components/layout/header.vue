<template>
  <header>
    <nav class="container">
      <template v-for="link in routerLinks">
        <router-link
          :key="`router-link-${link.name}`"
          :to="{ name: link.name }"
          >{{ link.title }}</router-link
        >
      </template>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      routerLinks: [
        {
          name: "blog-list",
          title: "BLOG LIST",
        },
      ],
    };
  },
};
</script>