<template>
  <Container>
    <h1 class="text-xl p-4 font-semibold rounded text-gray-700">Blog Posts</h1>
    <AppSearchInput />
    <ul>
      <li
        v-for="article of articles"
        :key="article.slug"
        class="border-8 p-4 mb-4 border-indigo-200"
      >
        <NuxtLink :to="`${article.slug}/`">
          <img
            class="img-blog"
            :src="require('@/assets/images/' + article.img)"
          />
          <div>
            <div class="pb-4">
              <span class="bg-yellow-300 text-black mr-2">Titulo: </span>
              <p>{{ article.title }}</p>
            </div>
            <div>
              <span class="bg-yellow-300 text-black mr-2">Descrição: </span>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </Container>
</template>

<script>
export default {
  name: 'Blog',
  layout: 'principal',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  head: {
    title: 'CaioFFerreira - Blog',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Dicas de um front-end em constante evolução.',
    },
  ],
}
</script>

<style lang="scss">
.img-blog {
  max-width: 100px;
  margin-bottom: 20px;
}
</style>
