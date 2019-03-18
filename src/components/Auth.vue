<template>
  <div>
    Auth
    <div v-if="this.jsonWebToken">
      {{this.jsonWebToken}}
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import http from "../services/http-common";

  export default {
    name: "auth",
    data() {
      return {
          jsonWebToken: {}
      };
    },
    methods: {
      getJsonWebToken() {
        var dataUserLogin = {
              username: "a",
              password: "a"
          };
        http
            .post("/auth/generateJWT", dataUserLogin)
            .then(response => {
              this.jsonWebToken = response.data; // JSON are parsed automatically.
            })
            .catch(e => {
              console.error(e);
            });

      },
      refreshToken() {
        this.getJsonWebToken();
      }
    },
    mounted() {
      this.getJsonWebToken();
    }
  }
</script>

<style scoped>

</style>
