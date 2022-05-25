<template>
  <el-button @click="onAuthorize()">Login</el-button>
</template>

<script>
import ApiService from "../services/api-service";

export default {
  name: 'AppLogin',
  data() {
    return {
      authorizationUrl: null,
      isLoading: null
    }
  },

  props: {
    msg: String
  },



 methods: {

   onAuthorize() {
     window.location.replace(`${this.authorizationUrl}`);
   }


 },

  async mounted(){
    console.log(this.$route)
    if(!this.$route.query.code){
      const response = await ApiService.get('/login');
      this.authorizationUrl = response.data.data;
    } else {
      // assumes that code exists in the url
      // this verify response token, save token to state, and then push to router to redirect to dashboard
      const code = this.$route.query.code;
      const response = await ApiService.post('/login', {code: code});
      return response;
    }


  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
