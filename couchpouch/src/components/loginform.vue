<template>
  <div id="app">
    <v-container>
      <v-layout row class="text-xs-center">
        <!-- <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
        </v-flex>-->
        <v-flex xs4 class="grey lighten-4">
          <v-container style="position: relative;top: 13%;" class="text-xs-center">
            <v-card flat>
              <v-card-title primary-title>
                <h4>Login</h4>
              </v-card-title>
              <v-form v-model="isValid">
                <v-text-field
                  v-model="loginUser._id"
                  name="Username"
                  outlined
                  placeholder="Enter User Id"
                  :rules="[v => !!v || 'Id is required']"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="loginUser.password"
                  name="Password"
                  outlined
                  placeholder="Enter Password"
                  type="password"
                  :rules="[v => !!v || 'Password is required']"
                  required
                ></v-text-field>
                <small v-if="incorrectPassword === true ">Incorrect Password. Try Again!</small>
                <v-btn primary large block @click="onLogIn" :disabled="!isValid">Login</v-btn>
                <v-btn class="mt-2" primary large block @click="register">Register</v-btn>
              </v-form>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "loginform",
  data: () => ({
    loginUser: {
      _id: "",
      password: ""
    },
    isValid: true,
    incorrectPassword: false
  }),
  methods: {
    onLogIn() {
      // this.$pouch.allDocs({include_docs:true}, 'users').then(function(response){
      //   for(var i = 0; i<response.rows.length; i++)
      // if(this.loginUser._id == response.rows[i].id && this.loginUser.password == response.rows[i].doc.password){
      //   this.$router.push('/home')
      // }
      // else{
      //   this.incorrectPassword = true
      // }
      // })
      if (this.loginUser._id == "test" && this.loginUser.password == "test") {
        this.$router.push("/home");
      } else {
        this.incorrectPassword = true;
      }
    },
    register() {
      this.$router.push("/register");
    }
  },
  mounted() {
    this.$pouch.sync("users", "http://localhost:5984/users");
  }
};
</script>