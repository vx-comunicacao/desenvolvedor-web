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

/* Useful general classes */
.u-p-relative {
  position: relative;
}
.u-z-index--5 {
  z-index: 5;
}
.u-z-index--10 {
  z-index: 10;
}
.u-z-index--15 {
  z-index: 15;
}
.u-z-index--20 {
  z-index: 20;
}
.u-z-index--30 {
  z-index: 30;
}
.v-toolbar__extension {
  justify-content: end;
}
header {
  z-index: 20 !important;
}
.c-app__layout__globo {
  justify-content: center;
  display: flex;
  flex-flow: row nowrap;
}
/* Style definitions for hover buttons. */
.c-btn-cta {
  text-transform: initial;
  background: var(--v-primary-base) !important;
}
.c-btn-cta:hover {
  background: var(--v-secondary-base) !important;
  transition: ease 0.3s;
}
.c-btn-fixed {
  right: 0px !important;
  left: initial !important;
}
/* Typography style for titles, subtitles, paragraphs, highlight titles and buttons. */
.c-text-title {
  font-family: "globotipo_textobold";
  font-style: normal;
  font-weight: 700;
}
.c-text-sub-title {
  font-family: "globotipo_textobold";
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.02em;
}
.c-text-sub-title--footer {
  font-family: "globotipo_textoregular";
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.02em;
}
.c-text-pg {
  font-family: "globotipo_textolight";
  font-style: normal;
  font-weight: 400;
  line-height: 143.5%;
  color: #fff;
}
.c-text-highlight {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.05em;
  background: linear-gradient(176deg, #fc1787 -31.01%, #7c2cff 79.3%),
    linear-gradient(205deg, #ae3898 0%, rgba(174, 56, 152, 0.62) 93.35%),
    linear-gradient(
      315deg,
      #ae3898 0%,
      rgba(228, 49, 104, 0.62) 93.35%,
      rgba(174, 56, 152, 0.62) 93.35%
    ),
    #d1268e;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.c-text-btn {
  font-family: "globotipo_textoregular";
  font-style: normal;
  font-weight: 400;
  font-size: 21.0851px;
}
/* Definitions of maximum typography sizes, for titles, highlight titles, subtitles and paragraphs. */
.u-font-size-hgt_26 {
  font-size: 26px;
  line-height: 26px;
}
.u-font-size-hgt_30 {
  font-size: 30px;
  line-height: 30px;
}
.u-font-size-title_65 {
  font-size: 65px;
  line-height: 65px;
}
.u-font-size-title_36 {
  font-size: 37px;
  line-height: 2.9rem;
}
.u-font-size-sub_40 {
  font-size: 40px;
}
.u-font-size-sub_32 {
  font-size: 32px;
}
.u-font-size-sub_20 {
  font-size: 20px;
}
.u-font-size-sub_22 {
  font-size: 22px !important;
}
.u-font-size-sub_25 {
  font-size: 25px;
}
.u-font-size-sub_26 {
  font-size: 26px;
}
.u-font-size-pg_18 {
  font-size: 18px;
}
.u-font-size-pg_17 {
  font-size: 17px;
}
/* Typography definitions for label and inputs */
/* footer form */
.c-text-label {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13.795px;
  line-height: 98.12%;
}
.c-text-label input {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13.795px;
  line-height: 98.12%;
  opacity: 0.76;
}
.c-text-label .v-text-field__details {
  margin: 0px !important;
  padding: 0px !important;
  height: 50px;
}
.c-bullet_1,
.c-bullet_2 {
  border-radius: 800% 1280%;
  width: 208px;
  height: 232px;
  text-align: center;
  padding-top: calc(13%);
  padding-left: 25px;
  padding-right: 25px;
  transform: rotate(359deg);
  font-family: "Roboto";
  font-style: normal;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 120.5%;
}
.c-bullet_1_bg {
  background: linear-gradient(0deg, #7833e7, #7833e7), #c4c4c4;
}
.c-bullet_2_bg {
  background: linear-gradient(0deg, #cb2283, #cb2283), #c4c4c4;
}
.c-bullet_1_font_14 {
  font-weight: 500;
  font-size: 14.615px;
  display: block;
}
.c-bullet_1_font_62 {
  font-weight: 500;
  font-size: 62.6452px;
  display: block;
}
.c-bullet_2_font_16 {
  font-weight: 500;
  font-size: 16px;
  display: block;
}
</style>
