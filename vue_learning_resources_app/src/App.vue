<template>
  <TheHeader title="RememberMe"/>
  <TheResources/>
</template>

<script>

import TheHeader from "./components/layouts/TheHeader";
import TheResources from "./components/resources/TheResources";

export default {
  name: "App",
  components: {
    TheHeader,
    TheResources
  },
}
</script>

<style>
* {
  box-sizing: border-box;

}

html {
  font-family: "Roboto Light", sans-serif;
}

body {
  margin: 0;
}
</style>