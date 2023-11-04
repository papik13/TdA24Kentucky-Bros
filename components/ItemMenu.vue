<template>
    <div class="menu">
        <img class="teacherdigitalagency" src="/TeacherDigitalAgency_LOGO_colour-white.png" />
        <div class="menu-item"><a href="" class="text-wrapper">Kontakt</a></div>
        <div class="menu-item"><a href="" class="text-wrapper">Vizitky</a></div>
        <div class="menu-item"><a href="" class="text-wrapper">Domů</a></div>
        <input class="input-wrapper" type="text" placeholder="Hledej">
    </div>
</template>
<script>

</script>
<style scoped>
.menu {
    display: flex;
    height: 150px;
    background-color: #333333;
    align-items: center;
    justify-content: flex-end;
    padding-right: 50px;
    width: auto;
    box-sizing: border-box;
}

.menu .menu-item {
    width: 135px;
    height: 55px;
    background-color: #74c7d3;
    border-radius: 41px;
    margin: 10px;
    align-items: center;
}

.menu .menu-item .text-wrapper {
    display: block;
    padding: 10px;
    text-align: center;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 600;
    color: #000000;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 31.2px;
    text-decoration: none;
}
.menu input {
    width: 135px;
    height: 55px;
    background-color: #74c7d3;
    border-radius: 41px;
    margin: 10px;
    padding-left: 15px;
    align-items: center;
    border: none;
    font-family: "Inter-Regular", Helvetica;
    font-weight: 600;
    color: #3a3a3a;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 31.2px;
}

.menu .teacherdigitalagency {
    position: absolute;
    width: 149px;
    height: 99px;
    top: 22px;
    left: 48px;
    object-fit: cover;
}

</style>