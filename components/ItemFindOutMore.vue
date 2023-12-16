<template>
    <div class="frame">
        <div class="div">
            <div class="overlap-group">
                <div class="text-wrapper">TEACHER DIGITAL AGENCY</div>
                <p class="p">„Život je nejlepší školou života.” ~Jára Cimrman</p>
            </div>
            <img class="tda-ikony-celek" src="/TdA_ikony_celek_white.png" />
            <div class="div-2"></div>
            <div class="div-3"></div>
            <div class="Kdojsme">
                <h1>KDO JSME ?</h1>
            </div>
            <div class="group">
                <div class="overlap-group-2">
                    <div class="div-4"></div>
                    <p class="teacher-digital">
                        Teacher digital Agency je mladá společnost zaměřená na vyhledávání <br />špičkových odborníků z řad
                        učitelů, lektorů a tutorů. <br />
                        <br />Sestavujeme exkluzivní databázi těchto specialistů, abychom mohli <br />efektivně propojovat klienty
                        s ideálními odborníky dle jejich přání <br />a specifických potřeb. Vaše vzdělávání je u nás v dobrých
                        rukou.
                    </p>
                </div>
            </div>
            <div class="stripe"></div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>

@import '@/assets/styles.css';
.frame {
    margin: 0;
    padding: 0;
    background-color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Set minimum height to 100% of the viewport height */
    align-self: stretch;
}

.frame .div {
    background-color: #333333;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    margin: auto;
}

.frame .overlap {
    display: flex;
    position: relative;
    width: 50%;
    background-size: 100% 100%;
}

.frame .overlap-group {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.frame .text-wrapper {
    color: white;
    font-size: 11.5vh;
    display: inline-block;
}

.frame .p {
    font-size: 4.5vh;
    color: white;
    display: inline-block;
}

.frame .tda-ikony-celek {
    position: relative;
    width: 100%;
    object-fit: cover;
}

.frame .div-2 {
    width: 100%;
    background-color: #74c7d3;
    position: relative;
    left: 0;
}

.frame .div-3 {
    width: 100%;
    background-color: #74c7d3;
    position: relative;
}

.frame .group {
    position: relative;
    width: 60%;
    margin: auto;
    box-shadow: 2px 3px 5px 3px #00000040;
}

.frame .overlap-group-2 {
    position: relative;
    width: 100%;
    margin-top: 10vh;
}

.frame .div-4 {
    width: 100%;
    top: 0;
    background-color: #333333;
    position: relative;
    left: 0;
}

.frame .teacher-digital {
    width: 100%;
    position: relative;
    font-weight: 400;
    font-size: 2vh;
    color: #ffffff;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
}

.Kdojsme {
    color: white;
    text-align: center;
    font-size: 8vh;;
}

.frame .overlap-2 {
    position: relative;

}

.frame .text-wrapper-2 {
    position: relative;
    top: 5px;
    left: 0;
    font-weight: 700;
    color: #fecb2ea8;
    white-space: nowrap;
}

.frame .text-wrapper-3 {
    position: relative;
    font-weight: 700;
    color: #ffffff;
    white-space: nowrap;
}

.stripe {
    background-color: #74c7d3;
}



@media screen and (max-width: 1900px) {
  /* Media query for smaller screens (adjust values as needed) */
  .frame .text-wrapper {
    font-size: 6vw;
    margin-top: 15vh;
  }

  .frame .p {
    font-size: 2.5vw;
  }

  .frame .teacher-digital {
    font-size: 1.2vw;
    padding: 1.5vh 4vw;
  }
}

</style>