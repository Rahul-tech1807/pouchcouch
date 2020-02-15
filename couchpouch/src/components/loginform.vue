<template>
    <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
      <!-- <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
      </v-flex> -->
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form v-model="isValid">
            <v-text-field v-model="email" name="Username" label="Username"  :rules="[v => !!v || 'Email is required']" required></v-text-field>
            <v-text-field v-model="password" name="Password" label="Password" type="password" :rules="[v => !!v || 'Password is required']" required></v-text-field>
            <v-card-actions>
              <v-btn primary large block @click="onLogIn" :disabled="!isValid">Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
    export default({
        data : () => ({
            email : '',
            password : '',
            isValid : true

        }),
        methods : {
            onLogIn(){
                if(this.email == 'test' && this.password == 'test'){
                    this.$router.push('/home')
                }else{
                    console.log("incorrect email or password")
                }
                
            }
        }
    })
</script>