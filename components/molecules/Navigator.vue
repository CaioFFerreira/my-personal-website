<template>
  <nav class="navigator">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Sobre', to: '/' },
        { name: 'Blog', to: '/blog' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navigator {
  ul {
    display: flex;
    gap: 30px;
    align-items: center;
    li {
      cursor: pointer;
      a {
        font-weight: 500;
        color: $black;
        padding: 10px 15px;
      }
      a.nuxt-link-exact-active {
        border-radius: 4px;
        color: $white;
        background-color: $pink;
      }
    }
  }
}
</style>
