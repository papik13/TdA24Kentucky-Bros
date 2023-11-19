<template>
  <div>
    <div class="nav-menu"> 
      <i 
        class="fas fa-bars" 
        @click="showMenu()"> 
        </i>
      <div
      class="nav-content"
      :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <div class="logo">Logo</div>
          <ul class="nav-items">
            <li><a href="">Domů</a></li>
            <li><a href="">Vizitky</a></li>
            <li><a href="">Kontakt</a></li>
            <li>
              <input type="text" placeholder="Hledejte...">
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMobileMenu: false
      }; // Removed the comma here
    },
    methods: {
      showMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      }
    }
  };
</script>
<style lang="scss" scoped>
.nav-menu {
  background-color: #74c7d3;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
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
    margin: 5px;
    padding: 5px 10px;
    transition: transform 0.3s ease; /* Smooth transition for scaling */
    background-color: #FECB2E;
    border-radius: 20px;
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
.nav-items li:hover {
  transform: scale(0.85); /* Scale up li elements on hover */
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
    .logo {
      display: inline-block;
    }
  }
}
</style>