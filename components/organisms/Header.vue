<template>
  <Container>
    <header class="header">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <Navigator />
    </header>
  </Container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: $view-port-medium) {
    gap: 30px;
    flex-direction: column;
  }
}
</style>
