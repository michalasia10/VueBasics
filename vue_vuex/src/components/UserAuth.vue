<template>
<button @click="login" v-if="!userIsAuthenticated">Log in</button>
<button @click="logout" v-if="userIsAuthenticated">Log out</button>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "UserAuth",

  methods:{
    login(){
      this.$store.dispatch('login')
    },
    logout(){
      this.$store.dispatch('logout')
    },
  },
  computed:{
    // isAuth(){
    //   console.log(this.$store.getters.userIsAuthenticated)
    //   return this.$store.getters.userIsAuthenticated;
    // }
    ...mapGetters(['userIsAuthenticated'])
  }
}
</script>

<style scoped>

</style>