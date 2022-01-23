<template>
  <button @click="increment">Increment</button>
  <button @click="increase({value:10})">Increase 10</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ChangeCounter",
  methods: {
    // addOne() {
    //   this.$store.dispatch({
    //     type:'increment'
    //   });
    // },
    ...mapActions(['increment','increase'])
  }
}
</script>

<style scoped>

</style>