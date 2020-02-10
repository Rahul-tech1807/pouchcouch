<template>
<div id="app">
      <!-- <loginform/> -->
      <div style="height: 70px;">
      <navbar/>
      </div>
      <div>
      <router-view/>
      </div>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import loginform from './components/loginform';
// import home from './components/home';
import navbar from './layout/navbar';


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // loginform,
    navbar,
  },

  data: () => ({
    // 
  }),
};
</script>
