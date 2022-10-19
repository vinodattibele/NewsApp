<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
      <img src="/the-news-app.svg" class="logo" alt="NHST logo" />
    <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/free">Free Article</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/paid">Paid Article</router-link></li>
    </ul>
    </div>
  </nav>

</template>

<style scoped>
.logo {
  height: 2em;
  padding: 0.2em;
  will-change: filter;
  float: left;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

header {
  height: 75px;
  background-color: #eee;
  box-shadow: 2px 2px 5px #999;
  text-align: right;
  font-size: 30px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  top: 0;
  float: right;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
}
</style>
