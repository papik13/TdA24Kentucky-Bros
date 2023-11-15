<template>
    <div class="main-container">
    <div class="obdelniky">
        <div class="levejobdelnik">
            <img class="main-image" src="/jamal.jpg" alt="pracant">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/027c1e11-8cf3-4884-bf72-4685aee97c36?apiKey=af67d8107ba84b21b388a6b10a1ab2f6&" class="secondary-image" />
            <div class="info-container">
                <ul>
                    <li>Aktivní studentka</li>
                    <li>Předsedkyně spolku</li>
                    <li>Projektová manažerka</li>
                </ul>
            </div>
            <div class="info-container2">
                <ul>
                    <li>Aktivní studentka</li>
                    <li>Předsedkyně spolku</li>
                    <li>Projektová manažerka</li>
                </ul>
            </div>
        </div>
        <div class="pravejobdelnik">
            <div class="Jméno">
                <h1>Mgr. Petra Plachá</h1>
            </div>
            <div class="popis">   
                <p1>Baví mě organizovat věci. Ať už to bylo vyvíjení mobilních aplikací ve Futured, pořádání konferencí, spolupráce na soutěžích Prezentiáda, pIšQworky, Tour de App a Středoškolák roku, nebo třeba dobrovolnictví, vždycky jsem skončila u projektového managementu, rozvíjení soft-skills a vzdělávání.
                     U studentských projektů a akcí jsem si vyzkoušela snad všechno od marketingu po logistiku a moc ráda to předám dál. Momentálně studuji Pdf MUNI a FF MUNI v Brně. </p1>
            </div>
            <p class="lokalita">Lokalita: Brno</p>
            <p class="cena"> Cena: 1500 czk/h</p>
        </div>
    </div>
    </div>
</template>

<style scoped>
.obdelniky {
    display: flex;
}
.pravejobdelnik {
    float: right;
    border-radius: 20px;
    border: 1px solid #2d2d2d;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: #333333;
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 80px;
    margin-right: 102px;
    margin-top: 50px;
    padding: 20px;
}
.Jméno{
    color: #fff;
    margin-top: 80px;
    margin-left: 300px;
    font: 731 35px/130% Open Sans, sans-serif;
}
.popis{
    margin-top: 600px;
    margin-left: 114px;
    margin-right: 114px;
    font-family: "Open Sans-Regular", Helvetica;
    color: #ffffff;
    font-size: 35px;
    text-align: justify;
    letter-spacing: 0;
    line-height: 40px;
}
.lokalita {
    color: white;
    font-family: "Open Sans-Regular", Helvetica;
    font-size: 35px;
    margin-left: 164px;
    margin-top: -450px;
}
.cena{
    color: white;
    font-family: "Open Sans-Regular", Helvetica;
    font-size: 35px;
    margin-left: 765px;
    margin-top: -75px;
}
.levejobdelnik {
    float: left;
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
.levejobdelnik {
    max-width: 100%;
    margin-top: 40px;
    padding: 100px 20px 0;
}
}

.main-image {
    aspect-ratio: 0.82;
    object-fit: contain;
    object-position: center;
    width: 90%;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    padding: 20px;
}

.secondary-image {
    aspect-ratio: 76.6;
    object-fit: contain;
    object-position: center;
    width: 100%;
    stroke-width: 3px;
    stroke: #fff;
    overflow: hidden;
    align-self: stretch;
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
    margin-top: 55px;
    font: 731 35px/130% Open Sans, sans-serif;
}
.info-container2 {
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    align-self: stretch;
    margin-top: 300px;
    font: 731 35px/130% Open Sans, sans-serif;
}

@media (max-width: 991px) {
    .info-container {
        margin-top: 40px;
    }
}

.contact-container {
    transform: rotate(-0.067deg);
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    align-self: stretch;
    margin-top: 91px;
    font: 653 35px/130% Inter, sans-serif;
}

@media (max-width: 991px) {
    .contact-container {
        margin-top: 40px;
    }
}

.main-container {
    margin: 0;
    padding: 0;
    background-color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Set minimum height to 100% of the viewport height */
    align-self: stretch;
}


.image-wrapper {
    align-items: start;
    background-color: #74c7d3;
    align-self: stretch;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 25px;
    }
</style>