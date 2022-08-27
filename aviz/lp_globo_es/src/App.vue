<template>
  <v-app :style="{ 'background-color': $vuetify.theme.themes.dark.bg }">
    <!-- Format aspect-ratio="4 / 3" -->
    <v-responsive content-class="c-app__layout__globo" :aspect-ratio="4 / 3">
      <!--  Maximum width 1440px  -->
      <v-sheet
        id="c-sheet"
        max-width="1440px"
        color="bg2"
        class="overflow-hidden"
      >
        <!-- Header mobile, tablet and desktop -->
        <v-app-bar
          v-intersect="onIntersect"
          :color="$vuetify.breakpoint.smAndUp ? 'transparent' : 'primary'"
          dark
          flat
          max-width="1440"
          class="pt-8 pt-sm-2 mb-10 mb-sm-auto u-z-index--30"
          ><v-row
            justify="end"
            class="pt-3 mx-n4 mx-sm-auto"
            :class="{ primary: $vuetify.breakpoint.xsOnly }"
          >
            <v-col cols="12" xs="12" sm="4" md="3">
              <v-img
                src="./assets/globo-logo.svg"
                height="44.55px"
                contain
                fetchpriority="high"
                position="left"
                class=""
              ></v-img>
            </v-col>

            <v-col
              cols="12"
              xs="12"
              sm="8"
              md="8"
              class="
                d-flex
                flex-row
                justify-center justify-sm-end
                pr-md-15 pr-lg-16
              "
            >
              <v-btn rounded text class="c-text-title text-capitalize px-md-10"
                >Globo</v-btn
              >
              <v-btn rounded text class="c-text-title text-capitalize px-md-10"
                >Telenovelas</v-btn
              >
              <v-btn
                @click="scrollToTop('series-link')"
                rounded
                text
                class="c-text-title text-capitalize px-md-10"
                >Series</v-btn
              >
              <v-btn
                rounded
                color="primary"
                class="
                  c-text-title
                  text-capitalize
                  ml-4
                  px-8
                  d-none d-sm-block
                  mr-lg-16
                "
                dense
                >Contacto</v-btn
              >
            </v-col>
          </v-row>
        </v-app-bar>
        <!-- Header fixed -->
        <v-app-bar
          fixed
          :inverted-scroll="$vuetify.breakpoint.smAndUp"
          color="transparent"
          dark
          flat
          max-width="200px"
          class="c-btn-fixed pt-1 pt-sm-0 pt-md-1 mx-0 px-0 u-z-index--30"
        >
          <v-spacer />
          <v-btn
            rounded
            :color="$vuetify.breakpoint.smAndUp ? 'primary' : 'secondary'"
            class="c-text-title text-capitalize ml-4 px-8"
            :class="{ 'd-none': !isVisible, 'd-sm-block': !isVisible }"
            dense
            >Contacto</v-btn
          >
          <v-btn
            rounded
            color="primary"
            class="d-sm-none c-text-title text-capitalize"
            :class="{ 'd-block': !isVisible, 'd-none': isVisible }"
            dense
            fab
            elevation="10"
          >
            <v-icon> mdi-phone-in-talk </v-icon>
          </v-btn>
        </v-app-bar>
        <!-- Main content -->
        <v-main id="c-main">
          <v-container class="fill-height" fluid>
            <!-- Más de 12mil horas de telenovelas y series -->
            <v-row
              justify="end"
              align-content="start"
              align="start"
              class="ma-sm-0 pa-sm-0 mb-6 u-z-index--10"
            >
            </v-row>
            <!--  BIENVENIDO A GLOBO - Telenovelas y series impactantes -->
            <v-row
              justify="center"
              align-content="start"
              align="start"
              class=""
            >
            </v-row>
            <!-- La mayor productora de contenidos de latinoamericas -->
            <v-row justify="center" class="u-z-index--15"> </v-row>
            <!-- La calidad y la relevancia de nuestras telenovelas -->
            <v-row
              justify="center"
              class="pb-10 pb-sm-auto mt-15 u-z-index--10 u-p-relative"
            >
            </v-row>
            <!-- Series - iNuevo consumidor, nuevo contenido! -->
            <v-row
              justify="center"
              class="bg u-z-index--5 u-p-relative c-design-el-5"
            >
              <v-row justify="center" class="d-sm-none my-6 pl-1 mb-0 pb-0">
              </v-row>
              <v-row justify="center" class="d-none d-sm-flex my-6 pl-1">
              </v-row>
            </v-row>
            <v-row justify="center"> </v-row>
          </v-container>
        </v-main>
      </v-sheet>
    </v-responsive>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
