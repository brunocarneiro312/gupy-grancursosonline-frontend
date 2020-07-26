<template>
  <div id="app">
    <div class="navbar-dark bg-dark fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
        <img src="./assets/img/grancursos.svg" alt="Grancursos Online" width="200"/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Programa de Estudos <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form/banca" class="nav-link">Banca</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form/orgao" class="nav-link">Órgão</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form/assunto" class="nav-link">Assunto</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/form/questao" class="nav-link">Questões</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <br><br><br>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/bootstrap-table/dist/bootstrap-table.min.css";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
