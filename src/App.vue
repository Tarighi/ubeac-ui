<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const default_layout = "Full";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || default_layout;
    }
  }
};
</script>