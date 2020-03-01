<template>
  <div>
  <div class="mt">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link to="/" class="link">LiveStore</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/home" tag="b-nav-item" active-class="active" class="link" exact>All Records</router-link>
        <router-link to="/addrecord" tag="b-nav-item" active-class="active" class="link">Add Record</router-link>
        <router-link to="/contact" tag="b-nav-item" active-class="active" class="link">contact</router-link>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Services" right>
          <b-dropdown-item><router-link to="/" class="link-drop">Add New Record</router-link></b-dropdown-item>
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
    <div class="row">
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label>Id</label>
              <input type="text" v-model="input._id" placeholder="Enter ID" class="form-control" />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input type="text" v-model="input.name" placeholder="Eenter Name" class="form-control" />
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text" v-model="input.phone" placeholder="Enter Phone Number" class="form-control" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="text" v-model="input.email" placeholder="Enter Email Address" class="form-control" />
            </div>
            <div class="form-group">
              <label>Roll Number</label>
              <input type="text" v-model="input.rollNo" placeholder="Enter Roll Number" class="form-control" />
            </div>
            <div class="form-group">
              <label>Subjects</label>
              <input type="text" v-model="input.subjects" placeholder="Enter Subjects" class="form-control" />
            </div>
            <button v-if="savebtn" @click.prevent="save" class="btn btn-success">save</button>
            <button v-if="updatebtn" @click.prevent="update(input._id)" class="btn btn-warning">update</button>
            <button @click="clear()" class="btn btn-info" style="margin-left: 2px;">clear</button>
          </form>
        </div>
        </div>
  </div>
</template>


<script>
export default ({
  data : () => ({
     items: [],
     input: {
       _id: "",
       name: "",
       phone: "",
       email: "",
       rollNo: "",
       subjects: ""
     },
     savebtn: true,
     updatebtn: false
   }),
   methods: {
     save: function() {
       var id = this.input._id
       var nm = this.input.name
       var ph = this.input.phone
       var em = this.input.email
       var roll = this.input.rollNo
       var sub = this.input.subjects
      this.$pouch.put({
        _id: id, 
         name: nm,
         phone: ph,
         email: em,
         rollNo: roll,
         subjects: sub}, 'newdb')
       this.items.push({
         _id: id,
         name: nm,
         phone: ph,
         email: em,
         rollNo: roll,
         subjects: sub
         })
       this.clear();
        // this.$router.push('/home')
       
     },
     clear : function() {
       this.savebtn = true
       this.updatebtn = false
       this.input._id = ""
       this.input.name = ""
       this.input.phone = ""
       this.input.email = ""
       this.input.rollNo = ""
       this.input.subjects = ""
       
     }
   }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .mt{
    position : fixed;
    width : 100% ;
    margin-top : 0px;
}*/
.link{
    color : #ffffff;
}
.link:hover{
  color: black;
}
.link-drop{
  color: black;
} 
</style>
