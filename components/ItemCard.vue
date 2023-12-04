<template>
  <v-container class="main-container">
    <v-card class="second-container">
      <v-img
        class="main-image"
        src="/jamal.jpg"
        alt="pracant"
      ></v-img>
      
      <v-img
        class="secondary-image"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/027c1e11-8cf3-4884-bf72-4685aee97c36?apiKey=af67d8107ba84b21b388a6b10a1ab2f6&"
      ></v-img>
      
      <v-list class="info-container">
        <v-list-item>{{ lecturers.first_name }}</v-list-item>
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
  background-color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.second-container {
  border-radius: 20px;
  border: 1px solid #2d2d2d;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #00384d;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px;
}

@media (max-width: 991px) {
  .second-container {
    max-width: 100%;
    margin-top: 40px;
    padding: 100px 20px 0;
  }
}

.main-image {
  aspect-ratio: 0.82;
  object-fit: contain;
  width: 90%;
  align-self: center;
  padding: 20px;
}

.secondary-image {
  aspect-ratio: 76.6;
  object-fit: contain;
  width: 100%;
  margin-top: 62px;
}

@media (max-width: 991px) {
  .secondary-image {
    margin-top: 40px;
  }
}

.info-container {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  margin-top: 51px;
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
  line-height: 130%;
}

@media (max-width: 991px) {
  .info-container {
    margin-top: 40px;
  }
}
</style>
