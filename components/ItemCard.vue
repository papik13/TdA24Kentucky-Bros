<template>
  <v-container class="main-container">
    <v-card class="second-container">
      <img class="main-image" :src="lecturers.picture_url" alt="lecturer">
      
      <v-list class="info-container-second">

      </v-list>
    </v-card>
    <v-card class="container">
      
      <v-list class="info-container">
        <v-list-item>{{ lecturers.title_before }} {{ lecturers.first_name }} {{ lecturers.middle_name }} {{ lecturers.last_name }} {{ lecturers.title_after }}</v-list-item>
      </v-list>
      {{ lecturers.bio }}
    </v-card>
    <v-card class="next-lecturers-container">
      
      <v-list class="info-container">
        <v-list-item>{{ lecturers.first_name }} {{ lecturers.last_name }}</v-list-item>
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
  }
};
</script>

<style scoped>
.main-container {
  background-color: #2C2C2C;
  display: flex;
  flex-direction: row;
  min-height: 90vh;
}

.second-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 3vh;
  border: 1px solid #2d2d2d;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #00384d;
  width: 30vh;
  margin: 5vh;
  padding: 2vh;
}

.main-image {
  width: 20vh;
  margin: 2vh;
  border-radius: 2vh;
}

.secondary-image {
  aspect-ratio: 76.6;
  object-fit: contain;
  width: 100%;
  margin-top: 62px;
}


.info-container-second {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
}

.container {
  border-radius: 3vh;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #333333;
  width: 90vh;
  margin: 5vh;
  text-align: center;
}

.info-container {
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 4vh;
  text-align: center;
}
.next-lecturers-container {
  border-radius: 3vh;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #FECB2E;
  min-width: 25vh;
  margin: 5vh;
}
</style>
