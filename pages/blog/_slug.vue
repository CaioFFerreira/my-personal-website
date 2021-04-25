<template>
  <Container>
    <div class="pb-2">
      <span class="bg-yellow-300 text-black mr-2">Titulo: </span>
      <h1>{{ article.title }}</h1>
    </div>
    <div class="pb-2">
      <span class="bg-yellow-300 text-black mr-2">Descrição: </span>
      <p>{{ article.description }}</p>
    </div>
    <img :src="article.img" :alt="article.alt" />
    <div class="mb-10">
      <span class="bg-blue-300 text-black mr-2">Criado: </span>
      <p>{{ formatDate(article.updatedAt) }}</p>
    </div>
    <nuxt-content :document="article" />
  </Container>
</template>

<script>
export default {
  layout: 'principal',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('pt-br', options)
    },
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.icon.icon-link {
  background-color: red;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
