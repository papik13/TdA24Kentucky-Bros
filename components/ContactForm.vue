<template>
<div class="container">
    <h1>Kontaktujte nás</h1>
    <form action="action_page.php">

      <!-- JMENO -->
      <div class="row">
        <div class="col-75">
          <input type="text" id="jmeno" name="jmeno" placeholder="Jméno..">
        </div>
      </div>
      <!-- JMENO -->


      <!-- PRIJMENI -->
      <div class="row">
        <div class="col-75">
          <input type="text" id="prijmeni" name="prijmeni" placeholder="Příjmení..">
        </div>
      </div>
      <!-- PRIJMENI -->


      <!-- EMAIL -->
      <div class="row">
        <div class="col-75">
          <input type="text" id="email" name="email" placeholder="Email..">
        </div>
      </div>
      <!-- EMAIL -->


      <!-- PREDMET -->
      <div class="row">
        <div class="col-75">
          <select id="predmet" name="predmet">
            <option value="dotaz">Dotaz</option>
            <option value="stiznost">Stížnost</option>
            <option value="jine">Jiné</option>
          </select>
        </div>
      </div>
      <!-- PREDMET -->


      <!-- ZPRAVA -->
      <div class="row">
        <div class="col-75">
          <textarea id="zprava" name="zprava" placeholder="Zde napište.." style="height:200px"></textarea>
        </div>
      </div>
      <!-- ZPRAVA -->


      <!-- ODESLAT -->
      <div class="row">
        <input type="submit" value="Odeslat">
      </div>
      <!-- ODESLAT -->


    </form>
  </div>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #2C2C2C;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    color: #ffffff;
  }

  input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #252525;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    margin-bottom: 10px;
    background-color: #474747;
    color: #ffffff;
  }

  label {
    padding: 12px 0;
    display: block;
    font-weight: bold;
    text-align: center;
    min-width: 2000px;
    box-sizing: border-box;
  }

  input[type=submit] {
    background-color: #FECB2E;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    transition: background-color 0.3s;
  }

  input[type=submit]:hover {
    background-color: #a17b07;
  }

  .container {
    max-width: 800px;
    margin: 20px auto;
    border-radius: 8px;
    background-color: #333333;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;

  }

  .col-75 {
    width: 100%;
    margin-top: 6px;
    margin-left: 30px;
    margin-right: 30px;

  }

  .row:after {
    content: "";
    display: flex;
    clear: both;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    .col-75, input[type=submit] {
      width: 84%;
      margin-top: 0;
    }
  }
</style>