<template>
  <div id="app">
    <img src="./assets/logo.png">
    <AppLogin msg="Login"/>
  </div>
</template>

<script>
import AppLogin from './components/AppLogin.vue'


export default {
  name: 'app',
  components: {
    AppLogin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
