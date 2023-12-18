<template>
  <v-container class="main-container">
    <v-card class="second-container">
      <img class="main-image" :src="lecturers.picture_url" alt="lecturer">
      
    <v-list>
      <v-list-item v-for="tag in lecturers.tags" :key="tag.uuid" class="info-container-second">
        <a href="">{{ tag.name }}</a>
      </v-list-item>
    </v-list>
    </v-card>
    <v-card class="container">
      
      <v-list class="info-container">
        <v-list-item>{{ lecturers.title_before }} {{ lecturers.first_name }} {{ lecturers.middle_name }} {{ lecturers.last_name }} {{ lecturers.title_after }}</v-list-item>
        <p><v-list-item>{{ lecturers.claim }}</v-list-item></p>
        <div class="mini-info-container">
          <v-list-item>Lokalita: {{ lecturers.location }}</v-list-item>
          <v-list-item>Cena: {{ lecturers.price_per_hour }} czk/h</v-list-item>
        </div>
        
        <div v-html="lecturers.bio" class="bio"></div>
        
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SecondContainer',
  data() {
    return {
      lecturers: {} // Initialize items as an empty object or with a default structure
    };
  },
  created() {
    fetch('lecturer.json') // Fetch the JSON data
      .then(response => response.json())
      .then(data => {
        this.lecturers = data; // Assign the fetched data to items
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  },
}
</script>

<style scoped>
.main-container {
  background-color: #2C2C2C;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-height: 50vw;
}

.second-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3vh;
  border: 1px solid #2d2d2d;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #00384d;
  width: 30vw;
  margin: 5vh;
  padding: 2vh;
}

.main-image {
  width: 12vw;
  margin: 2vh;
  border-radius: 2vh;
}

.info-container-second a {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 2vh;
  background-color: #74c7d3;
  border-radius: 3vh;
  margin: 1vh;
  padding: 0.6vh;
}

.container {
  display: flex;
  flex-direction: row;
  border-radius: 3vh;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #333333;
  width: 90vw;
  margin: 5vh;
  padding: 3vh;
  text-align: center;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  font-size: 3vw;
  text-align: center;
}

.info-container p {
  font-size: 2vw;
}
.info-container .bio {
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 2vw;
  text-align: center;
  justify-content: center;
}

.info-container .mini-info-container {
  display: flex;
  justify-content: space-around;
  font-size: 4vh;
  background-color: #FECB2E;
  color: black;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3vh;
}
</style>
