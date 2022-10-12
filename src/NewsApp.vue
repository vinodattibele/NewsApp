<script>
import Header from './components/Header.vue'

export default {
  components: {Header},
}
</script>

<template>
  <Header/>
  <p>The news app - coming soon.</p>
  <div class="read-the-docs">
    The news app was built with Vite + Vue. <br/>
    Check out the docs to get started <br/>
    <div className="card">
      <img src="/vue.svg" class="logo" alt="Vue logo"/><a href="https://vuejs.org/guide/quick-start.html#local"
                                                              target="_blank">Vue quick start</a> |
      <img src="/vite.svg" class="logo" alt="Vite logo"/><a href="https://vitejs.dev/guide/" target="_blank">Vite
      guide</a>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.logo {
  height: 1em;
  padding-right: 0.3em;
  padding-left: 0.3em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>