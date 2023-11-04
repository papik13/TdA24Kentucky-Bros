<template>
    <div class="menu">
        <img src="" alt="" class="menu-logo">
        <h2 class="menu-item"><a href="">DOMŮ</a></h2>
        <h2 class="menu-item"><a href="">O NÁS</a></h2>
        <h2 class="menu-item"><a href="">KONTAKTY</a></h2>
        <h2 class="menu-item"><a href="">LEKTOŘI</a></h2>
    </div>
</template>
<script>

</script>
<style scoped>
.menu {
    display: flex;
    background-color: blue;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    justify-content: center;
}
.menu-item {
    text-align: center;
    flex: 2;
    padding: 5px;
}
.menu-logo {
    flex: 2;
    padding: 5px;
}
.menu-item a {
    text-decoration: none;
    color: white;
}
</style>