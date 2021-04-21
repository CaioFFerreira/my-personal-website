<template>
  <Container>
    <h1>Blog Posts</h1>
    {{ articles }}
    <AppSearchInput />
    <ul>
      <li v-for="article of articles" :key="article.slug" class="post">
        <NuxtLink :to="`${article.slug}/`">
          <img :src="article.img" />
          <div>
            <h2>Titulo: {{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
            <p>Descrição {{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Container>
</template>

<script>
export default {
  layout: 'principal',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>

<style lang="scss">
.post {
  background-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
