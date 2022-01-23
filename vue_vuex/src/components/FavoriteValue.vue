<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>We do more</p>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "FavoriteValue",
  computed: {
    // counter() {
    //   // return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['normalizedCounter'])
  },
}
</script>

<style scoped>

</style>