<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ cardDetails.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ cardDetails.author }}</h6>

      <p
        class="card-text text-truncate"
        v-if="!cardDetails.free && !freeAccess"
        v-html="cardDetails.content?.split(' ').slice(0, 20).join(' ')"
      ></p>
      <p class="card-text" v-else v-html="cardDetails.content"></p>
      <i class="page-item" v-if="!cardDetails.free && !freeAccess">
        <a href="#" v-on:click="freeAccess = true" class="paid-article">
          Read the entire article for free by clicking here
        </a>
      </i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardDetails: Object,
    showLoader: Boolean,
  },
  data: () => {
    return {
      freeAccess: false,
    };
  },
};
</script>
