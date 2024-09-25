<template>
<!-- <Header></Header> -->
<router-link to="/About" class="nav-link"> About</router-link>
<Team />

  
  <Footer />
</template>
<script>
//  import Header from "@/components/Header.vue";
import Team from "@/components/Team.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    //  Header,
    Team,
    Footer,
  },
};
</script>