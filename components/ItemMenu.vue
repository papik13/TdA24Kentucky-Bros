<template>
    <div class="menu">
      <img class="teacherdigitalagency" src="/TeacherDigitalAgency_LOGO_black 2.png" />
      <div v-for="(item, index) in menuItems" :key="index" 
           class="menu-item" 
           @mouseover="item.increased = true" 
           @mouseleave="item.increased = false" 
           :class="{ 'increased-padding': item.increased }">
        <a href="" class="text-wrapper">{{ item.name }}</a>
      </div>
      <input class="input-wrapper" type="text" placeholder="Hledej...">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: 'Domů', increased: false },
          { name: 'Kontakt', increased: false },
          { name: 'Vizitky', increased: false }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    height: 25%;
    background-color: #74c7d3;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px;
  }
  
  .menu .menu-item {
    position: relative; /* Added relative positioning */
    width: 10%;
    height: 50%;
    background-color: #FECB2E;
    border-radius: 20px;
    margin: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 0.3s ease;
    overflow: hidden; /* Prevents content from spilling out */
  }
  
  .menu .menu-item .text-wrapper {
    transition: transform 0.3s ease;
    padding: 10px;
    text-align: center;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 600;
    color: #000000;
    font-size: 25px;
    letter-spacing: 0;
    line-height: 31.2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  .menu .menu-item.increased-padding .text-wrapper {
    transform: scale(0.8); /* Adjust scale value to prevent the text from overflowing */
  }
  
  .menu input {
    width: 10%;
    height: 50%;
    background-color: #FECB2E;
    border-radius: 20px;
    margin: 10px;
    align-items: center;
    border: none;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 600;
    color: #3a3a3a;
    font-size: 25px;
    letter-spacing: 0;
    line-height: 31.2px;
    text-align: center;
    padding: 10px;
  }
  
  .menu .teacherdigitalagency {
    position: absolute;
    width: 7%;
    left: 25px;
    object-fit: cover;
  }
  </style>
  