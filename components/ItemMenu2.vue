<template>
    <v-app>
      <div class="nav-menu">
        <div class="nav-content">
            <v-toolbar-title>
                <img
                    src="/TeacherDigitalAgency_LOGO_black.png"
                    alt="Teacher Digital Agency Logo"
                    id="logo"
                >
            </v-toolbar-title>
          <v-spacer></v-spacer>
          <ul class="nav-items">
          <li
            v-for="item in menuItems"
            :key="item.title"
            @mouseover="hover = item.title"
            @mouseleave="hover = ''"
            :class="{ 'menu-item-hover': hover === item.title }"
          >
            <a :href="item.link"><v-btn text>{{ item.title }}</v-btn></a>
          </li>
        </ul>
        </div>
      </div>
    </v-app>
  </template>
  
  
  
<script>
export default {
data: () => ({
    hover: '',
    menuItems: [
    { title: 'Domů', link: '/'},
    { title: 'Vizitky', link: '/lectures'},
    ],
}),
};
</script>
  

<style lang="scss" scoped>
.nav-menu {
  background-color: #74c7d3;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 1vw 1vw;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  transition: all 0.3s ease;
  cursor: pointer;

  li {
    margin: 0 1vw;
    padding: 0.6vw 1vw;
    transition: transform 0.3s ease; 
    background-color: #FECB2E;
    border-radius: 3vh;
    font-size: 2.5vh;
    font-weight: 900;
  }
  li a {
    color: black;
    text-decoration: none;
  }
  li input {
    background-color: #FECB2E;
    border: none;
  }
}
#logo {
    height: 4vw;
}
.nav-items li:hover {
  transform: scale(0.85); 
}

i {
  display: none;
}
// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
    .nav-menu {
    z-index: 1;
    padding-top: 10px;
    position: relative;
    width: 100%;
    opacity: 2;
  }
  .open-menu {
    opacity: 2;
    height: 100%;
    transition: transform 0.5s ease;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
    transition: transform 0.5s ease;
  }
  .nav-content {
    flex-direction: column;
    position: relative;
    transition: all 0.5s ease-out;
  }
    .nav-items {
      flex-direction: column;
    }
    i {
    display: block;
    text-align: center;
    padding: 0 10px 10px 0;
    #logo {
      display: inline-block;
    }
  }
}
</style>
