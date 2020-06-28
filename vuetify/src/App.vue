<template>
  <v-app>
    <v-toolbar app class="info" dark >
      <v-app-bar-nav-icon @click="menu=!menu"></v-app-bar-nav-icon>
      <v-toolbar-title>Titulo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="success">Login</v-btn>
      <v-btn class="error">Log out</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="menu">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Programador</v-list-item-title>
          <v-list-item-subtitle>Novato</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menu:false
  }),
};
</script>