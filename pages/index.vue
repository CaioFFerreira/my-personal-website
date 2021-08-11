<template>
  <Container class="home">
    <div class="home_grid-1 rounded text-white p-5">
      <h6 class="pb-2">
        <span class="text-green-600"> caio_Ferreira ~ </span>
        <span class="text-blue-400">(master)</span>
      </h6>
      <p class="text-sm">npm run dev experience</p>

      <p class="text-sm pt-10">
        <span class="bg-yellow-300 text-black mr-2 pl-2 pr-2"> RUNNING </span>
        <span class="type-write leading-7">{{ title }}</span>
        <span class="bg-blue-300 pr-2 pl-2 text-black">Working</span>
      </p>

      <p
        v-for="experience in experiences"
        :key="experience"
        class="text-sm pt-8"
      >
        <span class="bg-green-300 text-black mr-2 pl-2 pr-2 leading-7"
          >PASS</span
        >
        {{ experience.name }}
        {{ experience.time }}
      </p>
    </div>

    <section class="home_grid-2">
      <h1 class="font-bold text-gray-700 pt-10">Front-end Developer and UI</h1>
      <div class="text-center pt-5 pb-10">
        <a
          href="https://www.cssreel.com/website/desenvolvimento-de-sistemas"
          target="_blank"
          style="diplay: inline-block"
        >
          <img
            class="w-30"
            style="margin: 0 auto"
            src="@/assets/images/winner.png"
            title="Best site of the day"
            alt="Best site of the day"
          />
        </a>
      </div>
      <h3 class="font-bold pt-5">Quem sou eu?</h3>
      <p class="pt-5">
        Meu nome é Caio Fábio Duarte Ferreira, tenho 26 anos, moro em São José
        dos Campos - SP. Gosto bastante de viajar e de aproveitar meu tempo
        livre com amigos e familiares.
      </p>
      <h3 class="font-bold pt-5">o que faço?</h3>
      <p class="pt-5">
        Sou desenvolvedor fron-end e UI design, contudo sempre buscando aprender
        coisas novas.
      </p>
      <h3 class="font-bold pt-5">Por que faz?</h3>
      <p class="pt-5">
        Gosto de ajudar pessoas a solucionar seus problemas com tecnologia.
      </p>
      <section class="home__social pt-5">
        <a
          v-for="social in sociais"
          :key="social.id"
          :href="social.link"
          target="_blank"
        >
          <tooltip :text="social.name">
            <img
              :src="require('@/assets/images/' + social.img)"
              :alt="social.name"
            />
          </tooltip>
        </a>
      </section>
    </section>
  </Container>
</template>

<script>
export default {
  layout: 'principal',
  data() {
    return {
      title: 'Dev. Front-end - Instruct -',
      sociais: [
        {
          id: 1,
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/caio-fabio-duarte-ferreira/',
          img: 'linkedin.svg',
        },
        {
          id: 2,
          name: 'Facebook',
          link: 'https://www.facebook.com/caiofabio.duarteferreira/',
          img: 'facebook.svg',
        },
        {
          id: 3,
          name: 'Github',
          link: 'https://github.com/CaioFFerreira',
          img: 'github.svg',
        },
      ],
      experiences: [
        {
          name: 'Dev. Front-end - UDS -',
          time: '3 meses',
        },
        {
          name: 'Dev. Front-end - SoftWillians -',
          time: '1 ano',
        },
        {
          name: 'Dev. Web - Coyô -',
          time: '6 meses',
        },
        {
          name: 'Web Design - ComuniQ -',
          time: '1 ano',
        },
        {
          name: 'Web Design - Alliance -',
          time: '7 meses',
        },
      ],
    }
  },
  head: {
    title: 'CaioFFerreira - Front-end Developer',
    meta: [
      {
        name: 'description',
        content:
          'Sou desenvolvedor fron-end e UI design, contudo sempre buscando aprender coisas novas.',
      },
    ],
  },
  created() {
    this.typeWriter()
  },
  methods: {
    typeWriter() {
      const arrayLetters = this.title.split('')
      this.title = ''
      arrayLetters.forEach((letter, i) =>
        setTimeout(() => (this.title += letter), 100 * i)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  justify-content: center;

  @media (max-width: $view-port-medium) {
    display: flex;
    flex-direction: column-reverse;
  }

  .type-write::after {
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: effect 0.7s infinite;
  }
  @keyframes effect {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .home_grid-1 {
    background: #363940;
  }
  h1 {
    font-size: $size-small;
    border-bottom: 10px solid $pink;
    @media (max-width: $view-port-medium) {
      text-align: center;
    }
  }
  .home__social {
    display: flex;
    gap: 20px;
    align-items: center;
    img {
      max-width: 35px;
    }
  }
}
</style>
