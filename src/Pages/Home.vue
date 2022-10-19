<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <Loader :show-loader="showloader" />
        <MainCard v-if="!showloader" :card-details="frontPage" />
      </div>
      <div class="col-md-3">
        <ArticlesList :articles="articles" :read-news="fetchNewsById" />
      </div>
    </div>
  </div>
</template>
<script>
import MainCard from "../components/MainCard.vue";
import ArticlesList from "../components/ArticlesList.vue";
import Loader from "../components/Loader.vue";
import URL from "../Utils/Constants";

export default {
  components: {
    MainCard,
    ArticlesList,
    Loader,
  },
  data: () => {
    return {
      showloader: true,
      articles: [],
      frontPage: {},
    };
  },
  computed: {},
  methods: {
    resetData() {
      this.articles = [];
    },
    async fetchNewsById(id) {
      this.showloader = true;
      await fetch(new Request(URL.URL.ALL_ARTICLES + "/" + id))
        .then((resp) => resp.json())
        .then((data) => {
          this.frontPage = data;
          this.showloader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchTopNews() {
      this.resetData();
      await fetch(new Request(URL.URL.All_CONTENT))
        .then((resp) => resp.json())
        .then((data) => {
          this.frontPage = data.frontpage;
          this.articles = data.articles;
          this.showloader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchTopNews();
  },
  mounted() {},
};
</script>
