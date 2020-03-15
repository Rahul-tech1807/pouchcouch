<template>
  <div>
    <div class="mt">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <router-link to="/" class="link">LiveStore</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link
              to="/home"
              tag="b-nav-item"
              active-class="active"
              class="link"
              exact
            >All Records</router-link>
            <router-link
              to="/addrecord"
              tag="b-nav-item"
              active-class="active"
              class="link"
            >Add Record</router-link>
            <router-link to="/contact" tag="b-nav-item" active-class="active" class="link">contact</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Services" right>
              <b-dropdown-item>
                <router-link to="/" class="link-drop">Add New Record</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <v-container>
      <v-layout>
        <v-card flat>
          <v-card-title primary-title>
            <h4>Enter Student's Detail</h4>
          </v-card-title>
          <v-form v-model="isValid">
            <v-text-field placeholder="Enter Id" v-model="input._id" outlined></v-text-field>

            <v-text-field placeholder="Enter Name" v-model="input.name" outlined></v-text-field>

            <v-text-field placeholder="Enter Phone Number" v-model="input.phone" outlined></v-text-field>

            <v-text-field placeholder="Enter Email" v-model="input.email" outlined></v-text-field>

            <v-text-field placeholder="Enter Roll Number" v-model="input.rollNo" outlined></v-text-field>

            <v-text-field placeholder="Enter Subjects" v-model="input.subjects" outlined></v-text-field>
            <v-btn @click.prevent="save" success :disabled="!isValid">save</v-btn>
            <!-- <v-btn v-if="updatebtn" @click.prevent="update(input._id)" class="btn btn-warning">update</v-btn> -->
            <v-btn @click="clear()" info style="margin-left: 4px;">clear</v-btn>
          </v-form>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "addrecord",
  data: () => ({
    isValid: true,
    items: [],
    input: {
      _id: "",
      name: "",
      phone: "",
      email: "",
      rollNo: "",
      subjects: ""
    },
    updatebtn: false
  }),
  methods: {
    save: function() {
      var id = this.input._id;
      var nm = this.input.name;
      var ph = this.input.phone;
      var em = this.input.email;
      var roll = this.input.rollNo;
      var sub = this.input.subjects;
      this.$pouch.put(
        {
          _id: id,
          name: nm,
          phone: ph,
          email: em,
          rollNo: roll,
          subjects: sub
        },
        "newdb"
      );
      this.items.push({
        _id: id,
        name: nm,
        phone: ph,
        email: em,
        rollNo: roll,
        subjects: sub
      });
      this.$swal("Congratulation!", "Your Record has been saved successfully.");
      this.clear();
    },
    clear: function() {
      this.savebtn = true;
      this.updatebtn = false;
      this.input._id = "";
      this.input.name = "";
      this.input.phone = "";
      this.input.email = "";
      this.input.rollNo = "";
      this.input.subjects = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .mt{
    position : fixed;
    width : 100% ;
    margin-top : 0px;
}*/
.link {
  color: #ffffff;
}
.link:hover {
  color: black;
}
.link-drop {
  color: black;
}
</style>
