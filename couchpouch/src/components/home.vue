<template>
  <div class="mt">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link to="/home" class="link">LiveStore</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/home" tag="b-nav-item" active-class="active" class="link" exact>home</router-link>
        <router-link to="/about" tag="b-nav-item" active-class="active" class="link">about</router-link>
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
          <b-dropdown-item href="#" @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
     <div class="container">
      <h1>{{title}}</h1>
      <div class="row">
        <div class="col-md-8">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>phone</th>
                <th width="320">Actions</th>
              </tr>
            </thead>
            <tbody v-if="items">
              <tr v-for="item in items" v-bind:key="item._id">
                <td>{{ item._id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td class="text-center">
                  <button @click="edit(item)" class="btn btn-warning btn-sm">Edit</button>
                  <button @click="destroy(item)" class="btn btn-danger btn-sm">Trash</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label>id</label>
              <input type="text" v-model="input._id" placeholder="enter ID" class="form-control" />
            </div>
            <div class="form-group">
              <label>name</label>
              <input type="text" v-model="input.name" placeholder="enter Name" class="form-control" />
            </div>
            <div class="form-group">
              <label>phone</label>
              <input type="text" v-model="input.phone" placeholder="enter Phone Number" class="form-control" />
            </div>
            <button v-if="savebtn" @click.prevent="save" class="btn btn-primary">save</button>
            <button v-if="updatebtn" @click.prevent="update(input._id)" class="btn btn-warning">update</button>
            <button @click="clear()" class="btn btn-info">clear</button>
          </form>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default ({
  data : () => ({
    title: 'pouchDB',
     items: [],
     input: {
       _id: "",
       name: "",
       phone: ""
     },
     savebtn: true,
     updatebtn: false
   }),
   created: function() {
     let vm = this
      this.$pouch.allDocs({include_docs:true}, 'localdb').then(function(response){
          for(var i = 0; i<response.rows.length; i++)
          vm.items.push(response.rows[i].doc)
        })
   },
   methods: {
     save: function() {
       var id = this.input._id
       var nm = this.input.name
       var ph = this.input.phone
      this.$pouch.put({
        _id: id, 
         name: nm,
         phone: ph}, 'localdb')
       this.items.push({_id: id, name: nm, phone: ph})
       this.clear();
     },
     clear : function() {
       this.savebtn = true
       this.updatebtn = false
       this.input._id = ""
       this.input.name = ""
       this.input.phone = ""
     },
     edit: function(item) {
       this.savebtn = false
       this.updatebtn = true
       this.input._id = item.id
       this.input.name = item.name
       this.input.phone = item.phone
     },
     destroy: function(item){
       this.$pouch.remove({include_docs:true},'localdb', 
       item.id =item._id,
       item.rev = item._rev)
     },
     signOut(){
       this.$router.push('/')
     }
    //  update: function(id) {
    //    var myid = id - 1
    //    object.assign(this.items[myid], this.input)
    //    var nm = this.input.name
    //    var ph = this.input.phone
    //    db.get(id).then(function(doc) {
    //      return db.put({
    //        id: id,
    //        _rev: doc._rev,
    //        name: nm,
    //        phone: ph
    //      })

    //    }).then(function(response) {

    //    }).catch(function(error) {
    //      console.log(error)
    //    })

    //    this.clear()
    //  }
   },
   mounted : function() {
      this.$pouch.sync('localdb', 'http://localhost:5984/remotedb')
   }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* body { 
    padding-top: 65px !important; 
}
.mt{
    position : fixed;
    width : 100% ;
    margin-top : 0px;
} */
.link{
    color : #ffffff;
}
/* .link:hover{
  color: black;
} */
.link-drop{
  color: black;
}
</style>
