<template>
    <div class="card" style="width: 25rem">
          <ul
            class="list-group list-group-flush"
            v-for="(article, index) in articles"
            :key="index"
          >
            <li class="list-group-item">
              <i style="float: left" v-html="article.title"></i>
              <i v-html="article.author"></i>
              <p
                class="text-truncate"
                v-html="article.content.substring(0, 50)"
              ></p>
              <i class="page-item"
                ><a href="#" v-on:click="readNews(article.id)">View News</a></i
              >
            </li>
          </ul>
        </div>
</template>
<script>
export default {
    props: {
      articles: Object,
      readNews: Function
    },
}
</script>
