<template>
<div id="app">
  <v-content>
      <loginform/>
  </v-content>
      <router-view></router-view>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import loginform from './components/loginform';
// import home from './components/home';
// import navbar from './layout/navbar';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    loginform,
  },

  data: () => ({
    // 
  }),
};
</script>
