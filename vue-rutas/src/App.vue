<template>
  <div id="app">
    <div id="nav">
      <!-- 
        b-container, div con clase container
        b-navbar, navbar menu
        b-navbar-brand, logo del navbar

      -->
      <b-navbar toggleable="md" type="dark" variant="info">

        <b-container>
          <b-navbar-brand href="#">Titulo</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
              <b-nav-item :to="{name:'About'}" >About</b-nav-item>
              <b-nav-item :to="{name:'Caracteristicas',params:{id:1}}" >Caracteristicas</b-nav-item>
              <b-nav-item :to="{name:'Card'}" >Card</b-nav-item>              
              <b-nav-item :to="{name:'Formulario'}" >Form</b-nav-item>
              </b-navbar-nav>
          </b-collapse>
        </b-container>  
        
      </b-navbar>

    </div>
    <router-view/>
  </div>
</template>