<template>
  <div>
  <div class="mt">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link to="/" class="link">LiveStore</router-link></b-navbar-brand>

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
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    Welcome to our  about page.
  </div>
</template>


<script>

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
