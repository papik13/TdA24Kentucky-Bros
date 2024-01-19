<template>
    <div class="frame">
      <div class="content">
        <div class="overlap-group">
          <div class="text-wrapper">TEACHER DIGITAL AGENCY</div>
          <p class="quote">„Život je nejlepší školou života.” ~Jára Cimrman</p>
        </div>
        <button id="findout" @click="scrollToFooter">Zjisti víc</button>
        <img class="logo" src="/TdA_ikony_celek_white.png" alt="Teacher Digital Agency Logo" />
        <div class="divider div-2"></div>
        <div class="divider div-3"></div>
        <div class="who-we-are">
          <h1>KDO JSME ?</h1>
        </div>
        <div class="group">
          <div class="overlap-group-2">
            <div class="divider div-4"></div>
            <p class="description">
              Teacher Digital Agency je mladá společnost zaměřená na vyhledávání <br />špičkových odborníků z řad učitelů, lektorů a tutorů. <br />
              <br />Sestavujeme exkluzivní databázi těchto specialistů, abychom mohli <br />efektivně propojovat klienty s ideálními odborníky dle jejich přání <br />a specifických potřeb. Vaše vzdělávání je u nás v dobrých rukou.
            </p>
          </div>
        </div>
        <div class="stripe"></div>
      </div>
    </div>
    <footer class="cernej-footer"></footer>
    <footer class="normalni-footer"><a href="example.com"> Zpracovaní osobních údajů</a></footer>
  </template>
  
<script>
export default {
  // ... existing code ...

  methods: {
  scrollToFooter() {
    const footerElement = document.querySelector('.normalni-footer'); // or '.normalni-footer'
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  },
},
};
</script>
  
  <style scoped>
    .cernej-footer{
      background-color: #333;  
      height: 12vh;
    }
    .normalni-footer {
    text-align: center; 
    text-decoration: none;
    align-items: center;
    background-color: #74c7d3;
    height: 10vh;
    z-index: 1000;
    color: white; 
    display: flex;
    justify-content: center; 
    align-items: center;
    }

    .normalni-footer a {
      color: inherit;
      text-decoration: none;
      font-size: 2.2vh;
      font-weight: lighter;
    }
    .frame {
      margin: 0;
      padding: 0;
      background-color: #333;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      align-self: stretch;
    }
  
    #findout {
      color: white;
      background-color: #FECB2E;
      padding: 1vw 3vw;
      border-radius: 3vw;
      font-size: 2.5vw;
      margin-top: 7vh;
    }
    .content {
      display: flex;
      flex-direction: column;
      background-color: #333333;
      width: 100%;
      position: relative;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  
    .overlap-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  
    .text-wrapper {
      color: white;
      font-size: 11.5vh;
      display: inline-block;
      font-family: Lalezar;
    }
  
    .quote {
      font-size: 4.5vh;
      color: white;
      display: inline-block;
      font-style: italic;
    }
  
    .logo {
      margin-top: 15vh;
      position: relative;
      width: 85vw;
      object-fit: cover;
    }
  
    .divider {
      width: 100%;
      position: relative;
    }
  
    .div-2 {
      background-color: #74c7d3;
      left: 0;
    }
  
    .div-3 {
      background-color: #74c7d3;
    }
  
    .who-we-are {
      color: white;
      text-align: center;
      font-size: 8vh;
      margin-top: 10vh;
      }
  
    .group {
      position: relative;
      width: 60%;
      margin: auto;
      box-shadow: 2px 3px 5px 3px #00000040;
    }
  
    .overlap-group-2 {
      position: relative;
      width: 100%;
      margin-top: 5vh;
      margin-bottom: 5vh;
    }
  
    .div-4 {
      background-color: #333333;
      left: 0;
    }
  
    .description {
      width: 100%;
      position: relative;
      font-weight: 400;
      font-size: 2vh;
      color: #ffffff;
      text-align: center;
      font-family: Open Sans;
    }
  
    .stripe {
      background-color: #74c7d3;
    }
  
    @media screen and (max-width: 1900px) {
      .text-wrapper {
        font-size: 6vw;
        margin-top: 15vh;
      }
  
      .quote {
        font-size: 2.5vw;
      }
  
      .description {
        font-size: 1.2vw;
        padding: 1.5vh 4vw;
      }
    }
  </style>
  