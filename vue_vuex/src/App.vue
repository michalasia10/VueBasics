<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <TheCounter/>
    <favorite-value/>
    <button @click="addOneE">Increase</button>
    <ChangeCounter/>
  </base-container>
  <base-container title="Auth">
    <user-auth/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth'
import {mapGetters} from 'vuex';

export default {
  components: {
    BaseContainer, TheCounter, ChangeCounter,FavoriteValue,UserAuth
  },
  computed:{
    // isAuth(){
    //   return this.$store.getters.userIsAuthenticated;
    // }
    ...mapGetters(['userIsAuthenticated'])
  },
  methods: {
    addOneE() {
      // this.$store.commit('increment')
      this.$store.dispatch({
        type:'increase',
        value:10,
      })
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>