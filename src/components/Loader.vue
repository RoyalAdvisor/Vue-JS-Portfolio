<template>
  <DotLoader :loading="loading" :color="'rgba(2, 245, 255, 1)'" />
</template>

<script>
import DotLoader from "vue-spinner/src/DotLoader.vue";
export default {
  name: "Loader",
  components: {
    DotLoader,
  },
  props: {
    loading: "",
    color: "",
  },
};
</script>

<style></style>
