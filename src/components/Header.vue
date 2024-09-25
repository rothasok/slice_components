<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> Finexo </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <router-link to="/" class="nav-link"
                >{{$t('home')}} <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/About' }">
              <router-link to="/About" class="nav-link"> About</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/Services' }">
              <router-link to="/Services" class="nav-link"> Services</router-link>
            </li>
           <li class="nav-item" :class="{ active: $route.path == '/Why' }">
              <router-link to="/Why" class="nav-link"> WHY US</router-link>
            </li>
             <li class="nav-item" :class="{ active: $route.path == '/Team' }">
              <router-link to="/Team" class="nav-link"> TEAM</router-link>
            </li>
             <li class="nav-item" :class="{ active: $route.path == '/courses' }">
              <router-link to="/courses" class="nav-link"> Courses</router-link>
            </li>
            <button @click="ChangeLocale">{{$t('change_lan')}}</button>
            <li class="nav-item">
              <router-link to="/Login" class="nav-link" i> Login</router-link>
            </li>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods:{
    ChangeLocale(){
      if(this.$i18n.locale=="en"){
        this.$i18n.locale="khm";}
        else{
          this.$i18n.locale="en";
        }
      }
    }
  }

</script>