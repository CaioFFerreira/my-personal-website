<template>
  <div>
    <input
      v-model="searchQuery"
      class="mb-4 mt-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <ul v-if="articles.length" class="mb-4 search bg-indigo-100">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="text-sm mb-2 p-4 bg-indigo-400 font-semibold rounded text-white"
      >
        <NuxtLink :to="`${article.slug}/`"> {{ article.title }} → </NuxtLink>
        <div class="tag mt-2">
          <span :class="[bgTag(article.tag), 'p-1']">{{ article.tag }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
  methods: {
    bgTag(tag) {
      if (tag === 'Javascript') return 'bg-yellow-300'
      if (tag === 'Css') return 'bg-blue-500'
      if (tag === 'Html') return 'bg-yellow-500'
      if (tag === 'Git') return 'bg-black text-white'
      return 'bg-gray-400'
    },
  },
}
</script>

<style lang="scss">
.search {
  overflow-y: scroll;
  padding: 20px;
  height: 100px;
  .tag {
    display: block;
    min-width: max-content;
  }
}
</style>
