<template>
  <div id="app">
    <v-container>
      <v-layout row class="text-xs-center">
        <!-- <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
        </v-flex>-->
        <v-form v-model="valid">
          <v-text-field
            v-model="register._id"
            :rules="[rules.required]"
            outlined
            placeholder="User Id"
            required
          ></v-text-field>

          <v-text-field
            v-model="register.firstName"
            outlined
            :rules="[rules.required]"
            placeholder="First Name"
            maxlength="20"
            required
          ></v-text-field>
          <v-text-field
            v-model="register.lastName"
            :rules="[rules.required]"
            outlined
            placeholder="Last Name"
            maxlength="20"
            required
          ></v-text-field>

          <v-text-field
            v-model="register.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            outlined
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            placeholder="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            block
            v-model="register.verify"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            outlined
            :rules="[rules.required, passwordMatch]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            placeholder="Confirm Password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn success large block :disabled="!valid" @click="onRegister">Register</v-btn>
          <v-btn success large block class="mt-2" @click="cancel">Cancel</v-btn>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "register",
  data: () => ({
    dialog: true,
    valid: true,
    register: {
      _id: "",
      firstName: "",
      lastName: "",
      password: "",
      verify: ""
    },
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  }),
  methods: {
    onRegister() {
      var id = this.register._id;
      var fName = this.register.firstName;
      var lName = this.register.lastName;
      var pass = this.register.password;
      var vPass = this.register.verify;

      var registerUser = {
        firstName: fName,
        lastName: lName,
        password: pass,
        verify: vPass
      };
      this.$pouch.put(
        {
          _id: id,
          registerUser
        },
        "users"
      );
      this.$swal(
        "Congratulation!",
        "You have been registered successfully. Login here"
      );
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  }
};
</script>

