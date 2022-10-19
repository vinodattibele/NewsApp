<template>
  <div v-if="showLoader" class="spinner-border text-primary" id="spinner" role="status">
    <span class="sr-only"></span>
  </div>
</template>
<script>
export default {
  props: {showLoader: Boolean}
};
</script>
