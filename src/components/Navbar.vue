<!-- Composant barre de navigation s'affichant dans chaque route-->

<template>
  <nav>
    <!-- Visuel de la barre de navigation -->
    <v-app-bar
      height="200"
      color="green lighten-3 white--text"
      dark
      shrink-on-scroll
      prominent
      src="@/assets/breizh_video.jpg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(102,187,106,.7), rgba(46,125,50,.7)"
        ></v-img>
      </template>
      <!-- Bouton Home -->
      <v-btn text to="/">
        <v-icon left large>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
      <!-- Titre -->
      <v-spacer />
      <v-toolbar-title>
        <h1 class="display-3 font-weight-medium text-center align-center">
          Breizh Video
        </h1>
      </v-toolbar-title>
      <v-spacer />
      <!-- Bouton Contact -->
      <v-btn text>
        <span>Contact</span>
        <v-icon right large>mdi-email</v-icon>
      </v-btn>
      <!-- Onglets de navigation -->
      <template v-slot:extension>
        <v-tabs fixed-tabs>
          <v-tab to="/evenements">
            <h2 class="font-weight-bold">Evenements</h2>
          </v-tab>
          <v-tab to="/films">
            <h2 class="font-weight-bold">Films</h2>
          </v-tab>
          <v-tab to="/villages">
            <h2 class="font-weight-bold">Villages</h2></v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
  </nav>
</template>


<script>
export default {};
</script>