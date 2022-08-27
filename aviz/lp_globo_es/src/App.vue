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
              <v-col
                align-self="start"
                class="
                  flex-md-grow-0
                  ma-0
                  pa-0
                  mt-16
                  mr-md-n3 mr-lg-n10
                  pt-md-5 pt-lg-16
                  u-z-index--10
                "
                :class="{ 'text-center': $vuetify.breakpoint.mdAndDown }"
              >
                <h1
                  class="text-center text-md-left text-pink--text c-text-title"
                >
                  <span
                    class="text-h3 text-sm-h2 text-pink--text d-inline-block"
                    >MÁS DE</span
                  ><br />
                  <span
                    class="text-no-wrap text-pink--text"
                    :class="{
                      'u-font-size-title_65': $vuetify.breakpoint.smAndUp,
                      'text-h3': $vuetify.breakpoint.xsOnly,
                    }"
                    >12MIL HORAS</span
                  ><br />
                  <span
                    class="
                      u-font-size-title_36
                      text-white--text
                      d-block
                      text-no-wrap
                    "
                    :class="{ 'text-h5': $vuetify.breakpoint.xsOnly }"
                    >DE TELENOVELAS Y SERIES<br />
                    DOBLADAS EN ESPAÑOL</span
                  >
                </h1>
                <h2
                  class="
                    text-pink--text
                    c-text-title
                    subtitle-2
                    text-sm-h6
                    mb-5 mb-sm-auto
                    text-left
                  "
                  :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
                >
                  iHay una Globo para todos y para cada uno!
                </h2>
                <v-divider class="d-none d-sm-block mt-2 mb-5 mr-10" />
                <v-btn
                  large
                  v-if="$vuetify.breakpoint.xsOnly"
                  rounded
                  class="c-btn-cta c-text-btn"
                  >Encuentre la mejor historia<br />para su audiencia
                  <v-icon right>mdi-chevron-down</v-icon></v-btn
                >
                <v-btn large v-else rounded class="c-btn-cta c-text-btn px-8"
                  >Encuentre la mejor historia para su audiencia
                  <v-icon right>mdi-chevron-down</v-icon></v-btn
                >
              </v-col>
              <v-col
                cols="12"
                xs="12"
                md="7"
                lg="8"
                class="
                  ma-0
                  pa-0
                  mr-8 mr-sm-auto
                  ml-auto ml-sm-n15
                  mr-sm-n3
                  text-center
                  u-z-index--5
                "
              >
                <v-img
                  src="./assets/globo-personagens-3.webp"
                  lazy-src="@/assets/draft/globo-personagens-3.webp"
                  contain
                  :position="$vuetify.breakpoint.xsOnly ? 'center' : 'right'"
                  class="
                    c-characters-1
                    mt-n3 mt-sm-n16
                    ml-n16 ml-sm-auto
                    mb-n16
                    ma-0
                    pa-0
                  "
                  :min-width="$vuetify.breakpoint.xsOnly ? '517px' : 'auto'"
                  fetchpriority="high"
                >
                  <span class="c-text-serie c-names-a c-names-p--1"
                    >Verdades Secretas</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--2"
                    >Éramos Seis</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--3"
                    >Suerte de Vivir</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--4"
                    >Dulce Ambición</span
                  >
                </v-img>
              </v-col>
            </v-row>
            <!--  BIENVENIDO A GLOBO - Telenovelas y series impactantes -->
            <v-row
              justify="center"
              align-content="start"
              align="start"
              class="
                u-z-index--5
                ma-0
                pa-0
                mb-15 mb-sm-0 mb-md-15
                c-design-el-3
              "
            >
              <v-col cols="12" md="12" class="c-col-bienvenido ma-0 pa-0 mb-2">
                <h3 class="c-text-highlight u-font-size-hgt_26 mb-3">
                  Bienvenido a Globo
                </h3>
                <h2
                  class="
                    c-text-sub-title
                    u-font-size-sub_40
                    text-white--text
                    text-uppercase
                  "
                  :class="{ 'u-font-size-sub_32': $vuetify.breakpoint.xsOnly }"
                >
                  Telenovelas y series impactantes
                </h2>
              </v-col>
            </v-row>
            <!-- La mayor productora de contenidos de latinoamericas -->
            <v-row justify="center" class="u-z-index--15">
              <v-col
                cols="12"
                xs="12"
                md="7"
                lg="6"
                class="px-5 px-sm-auto mx-sm-4 mr-sm-n5"
                :class="{ 'order-2': $vuetify.breakpoint.xsOnly }"
              >
                <h4>
                  <span
                    class="
                      c-text-sub-title
                      u-font-size-sub_26
                      text-white--text
                      text-uppercase
                    "
                  >
                    LA MAYOR PRODUCTORA DE<br />
                    CONTENIDOS DE LATINOAMÉRICA,</span
                  ><br />
                  <span
                    class="
                      c-text-pg
                      u-font-size-pg_18
                      text-white--text
                      text-uppercase
                      d-block
                      mt-2
                    "
                    >Con capacidad para producir más de<br /><strong
                      class="c-text-sub-title"
                    >
                      3.000 horas</strong
                    >
                    de entretenimiento al año.</span
                  >
                </h4>
                <v-col cols="12" xs="12" sm="8" class="ma-0 pa-0">
                  <h5 class="c-text-pg u-font-size-pg_18 mt-7">
                    Desde hace más de 40 años, Globo distribuye contenidos en
                    Brasil y en todo el mundo: historias innovadoras para la
                    televisión abierta, de pago y plataformas digitales, para
                    los más diversos espectadores.
                  </h5>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                sm="12"
                md="4"
                class="
                  c-bullet
                  order-0
                  d-flex
                  justify-sm-center justify-start
                  flex-nowrap
                  u-z-index--10
                  mt-n11 mt-sm-0 mt-md-n11
                  ml-md-n15
                  mx-2
                "
              >
                <div class="c-bullet_1 c-bullet_1_bg">
                  <span class="c-bullet_1_font_14 mb-1">MÁS DE</span><br /><span
                    class="c-bullet_1_font_62"
                    >19K</span
                  ><br /><span class="c-bullet_1_font_14 mt-1"
                    >HORAS<br />DISTRIBUIDAS AL AÑO</span
                  >
                </div>
                <div class="c-bullet_2 c-bullet_2_bg ml-n7 mt-11">
                  <span class="c-bullet_2_font_16 mt-5"
                    >MÁS DE 400 PRODUCCIONES DISTRIBUIDAS EN 160 TERRITORIOS Y
                    70 IDIOMAS</span
                  >
                </div>
              </v-col>
            </v-row>
            <!-- La calidad y la relevancia de nuestras telenovelas -->
            <v-row
              justify="center"
              class="pb-10 pb-sm-auto mt-15 u-z-index--10 u-p-relative"
            >
              <v-col cols="12" xs="12" md="6">
                <v-img
                  src="@/assets/globo-personagens-5.webp"
                  lazy-src="@/assets/draft/globo-personagens-5.webp"
                  contain
                  :min-width="$vuetify.breakpoint.xsOnly ? '400px' : '700px'"
                  :position="$vuetify.breakpoint.xsOnly ? 'center' : 'right'"
                  class="mt-n14 ml-n5 ml-sm-auto c-characters-2"
                >
                  <span
                    class="c-text-serie c-names-a c-names-p--5"
                    :class="{ 'c-names-p-xs--5': $vuetify.breakpoint.xsOnly }"
                    >Bajo Presión</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--6"
                    >Avenida Brasil</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--7"
                    >Huérfanos de su Tierra</span
                  >
                  <span class="c-text-serie c-names-a c-names-p--8"
                    >Aruanas</span
                  >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                md="5"
                class="
                  text-left text-sm-center text-md-left
                  pt-0 pt-sm-auto
                  mt-0
                  mx-4
                  px-5 px-sm-auto
                  mr-sm-n5
                "
              >
                <h4>
                  <span
                    class="
                      c-text-sub-title
                      u-font-size-sub_25
                      text-white--text
                      text-uppercase
                    "
                    :class="{
                      'u-font-size-sub_22': $vuetify.breakpoint.xsOnly,
                    }"
                  >
                    LA CALIDAD Y LA RELEVANCIA DE<br />NUESTRAS TELENOVELAS Y
                    SERIES<br />LLEGAN HOY A UNA AMPLIA<br />DEMANDA DE
                    CONSUMIDORES:</span
                  ><br />
                  <span
                    class="
                      u-z-index--10
                      c-text-pg
                      u-font-size-pg_18
                      text-white--text
                      text-uppercase
                      d-block
                      mt-3
                    "
                    :class="{ 'u-font-size-pg_17': $vuetify.breakpoint.xsOnly }"
                    >HISTORIAS ATRACTIVAS Y EXITOSAS PARA EL<br />PÚBLICO DE
                    TODO EL MUNDO</span
                  >
                </h4>
                <v-col
                  cols="12"
                  xs="12"
                  md="8"
                  class="text-center text-md-left ma-0 pa-0 mt-5"
                >
                  <v-btn rounded class="c-btn-cta c-text-btn px-10"
                    >Deleite a su audiencia
                    <v-icon right>mdi-chevron-down</v-icon></v-btn
                  >
                </v-col>
              </v-col>
              <div
                class="c-design-el-4__ct"
                :class="{ 'mr-n2': $vuetify.breakpoint.xsOnly }"
              >
                <span class="c-design-el-4"></span>
              </div>
            </v-row>
            <!-- Series - iNuevo consumidor, nuevo contenido! -->
            <v-row
              justify="center"
              class="bg u-z-index--5 u-p-relative c-design-el-5"
            >
              <v-col id="series-link" cols="12" class="pt-15">
                <h3 class="c-text-highlight u-font-size-hgt_30 pb-2">Series</h3>
                <h2
                  class="
                    c-text-sub-title
                    u-font-size-sub_40
                    text-white--text
                    text-uppercase
                  "
                  :class="{ 'u-font-size-sub_32': $vuetify.breakpoint.xsOnly }"
                >
                  ¡NUEVO CONSUMIDOR, NUEVO CONTENIDO!
                </h2>
                <!-- XS -> Para un público que está en la búsqueda de nuevas historias,
                personajes complejos y emociones únicas. -->
                <h4
                  v-if="$vuetify.breakpoint.xsOnly"
                  class="c-text-pg u-font-size-pg_18 text-center mt-3"
                >
                  Para un público que está en la búsqueda de nuevas historias,
                  personajes complejos y emociones únicas.
                </h4>
                <!-- XS -> Para un público que está en la búsqueda de nuevas historias,
                personajes complejos y emociones únicas. -->
                <h4 v-else class="c-text-pg u-font-size-pg_18 text-center mt-3">
                  Para un público que está en la búsqueda de nuevas
                  historias,<br />personajes complejos y emociones únicas.
                </h4>
              </v-col>
              <!-- XS -> ¡PARA USTED Y PARA TODOS! / Original - Globoplay -->
              <v-row justify="center" class="d-sm-none my-6 pl-1 mb-0 pb-0">
                <v-col cols="12" class="mt-1 px-5">
                  <h4>
                    <span
                      class="
                        c-text-sub-title
                        u-font-size-sub_26
                        text-white--text
                        text-uppercase
                      "
                      >¡PARA USTED Y PARA TODOS!</span
                    ><br />
                    <span
                      class="
                        c-text-pg
                        u-font-size-pg_18
                        text-white--text
                        d-block
                        mt-2
                      "
                      >Un mundo de datos y pantallas, donde las<br />tendencias
                      son relevantes, cada individuo es único.</span
                    >
                  </h4>
                </v-col>
                <v-divider class="mx-5" />
                <v-col cols="12" class="px-5 pt-5">
                  <v-img
                    src="./assets/original-globo-play.svg"
                    height="35.93"
                    contain
                    position="left"
                  ></v-img>
                  <h4
                    class="
                      c-text-pg
                      u-font-size-pg_18
                      text-white--text
                      d-block
                      mt-2
                    "
                  >
                    ¡Estamos en la nueva era de series globo! el resultado es
                    un<br />
                    amplio portafolio de géneros y temas con alta afinidad con
                    la<br />
                    demanda de los consumidores modernos.
                  </h4>
                  <v-divider class="mr-8 mt-4 mb-n5" />
                </v-col>
              </v-row>
              <!-- SM -> ¡PARA USTED Y PARA TODOS! / Original - Globoplay -->
              <v-row justify="center" class="d-none d-sm-flex my-6 pl-1">
                <v-col cols="4" md="4" class="mt-1">
                  <h4>
                    <span
                      class="
                        c-text-sub-title
                        u-font-size-sub_26
                        text-white--text
                        text-uppercase
                      "
                      >¡PARA USTED Y PARA TODOS!</span
                    ><br />
                    <span
                      class="
                        c-text-pg
                        u-font-size-pg_18
                        text-white--text
                        d-block
                        mt-2
                      "
                      >Un mundo de datos y pantallas, donde las<br />tendencias
                      son relevantes, cada individuo es único.</span
                    >
                  </h4>
                </v-col>
                <v-divider class="mr-9 ml-8" vertical />
                <v-col cols="5" md="5" class="">
                  <v-img
                    src="./assets/original-globo-play.svg"
                    height="35.93"
                    contain
                    position="left"
                  ></v-img>
                  <h4
                    class="
                      c-text-pg
                      u-font-size-pg_18
                      text-white--text
                      d-block
                      mt-2
                    "
                  >
                    ¡Estamos en la nueva era de series globo! el resultado es
                    un<br />
                    amplio portafolio de géneros y temas con alta afinidad con
                    la<br />
                    demanda de los consumidores modernos.
                  </h4>
                </v-col>
              </v-row>
              <v-col
                cols="10"
                class="d-none d-sm-block pl-6 pr-0"
                align-self="center"
                ><v-divider class="pa-0"
              /></v-col>
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
/* background design elements */
#c-sheet {
  background-image: url("./assets/el-1.svg");
  background-size: contain;
  background-position: top right;
  background-repeat: no-repeat;
}
.c-design-el-3::before {
  content: "";
  background-image: url("./assets/el-3.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 1553px;
  width: 765px;
  position: absolute;
  left: 0;
  z-index: -1;
  bottom: 0;
  top: 0;
}
.c-design-el-4__ct {
  position: absolute !important;
  right: 0px;
  bottom: 0px;
  width: 100%;
  z-index: -1;
  height: 0px;
}
.c-design-el-4::before {
  content: "";
  background-image: url("./assets/el-4.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  height: 1029px;
  width: 161px;
  position: absolute;
  right: 0px;
  z-index: -1;
  bottom: -5px;
}
.c-design-el-5::before {
  content: "";
  background-image: url("./assets/el-5.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 391px;
  width: 678px;
  position: absolute;
  right: 0;
  transform: scale(2) translate(13%, -50%);
  z-index: -1;
  top: 0;
}
.c-design-el-6::before {
  content: "";
  background-image: url("./assets/el-6.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 0;
  transform: scale(10);
  z-index: -1;
  bottom: 14%;
}
.c-design-el-7::before {
  content: "";
  background-image: url("./assets/el-8.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 355px;
  width: 357px;
  position: absolute;
  right: 0;
  transform: scale(1) translate(0px, 0px);
  z-index: -1;
  bottom: 0;
}
.c-design-el-7__ct {
  position: absolute !important;
  right: 0px;
  bottom: 0px;
  width: 100%;
  z-index: 0;
  height: 0px;
}

/* Animation of series names */
.c-text-serie {
  font-family: "globotipo_textolight";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120.5%;
  letter-spacing: 0.05em;
}
.c-names-p--1 {
  right: 40%;
  width: 90px;
  top: 0;
  margin-top: 20%;
}
.c-names-p--2 {
  right: 15%;
  text-align: right;
  width: 68px;
  top: 0;
  margin-top: 25%;
}
.c-names-p--3 {
  width: 77px;
  bottom: 0;
  text-align: right;
  left: 30%;
  margin-bottom: 29%;
}
.c-names-p--4 {
  width: 77px;
  bottom: 0;
  text-align: right;
  right: 36%;
  margin-bottom: 23%;
}
.c-names-p--5 {
  width: 64px;
  bottom: 0;
  text-align: right;
  left: 2%;
  margin-bottom: 25%;
}
.c-names-p-xs--5 {
  width: 64px;
  bottom: 0;
  text-align: right;
  left: 2%;
  margin-bottom: 16%;
}
.c-names-p--6 {
  width: 85px;
  bottom: 0;
  text-align: right;
  right: 30%;
  margin-bottom: 18%;
}
.c-names-p--7 {
  width: 85px;
  bottom: 0;
  text-align: left;
  right: 11%;
  margin-bottom: 28%;
}
.c-names-p--8 {
  width: 85px;
  top: 0;
  text-align: left;
  right: 35%;
  margin-top: 7%;
}
.c-names-a {
  animation: name-serie 6s ease-in-out 3s infinite normal both;
  position: absolute;
}
/* @media queries > 1440px */
@media only screen and (min-width: 1440px) {
  .c-bullet {
    padding-right: 100px !important;
  }
  .c-btn-fixed {
    right: calc(50% - 1440px / 2) !important;
    left: initial !important;
  }
  .c-design-el-7::before {
    right: calc(50% - 1440px / 2) !important;
  }
}
/* @media queries 962px > < 1234px */
@media only screen and (min-width: 961px) and (max-width: 1234px) {
  .c-col-bienvenido h3 {
    margin-top: 40px;
  }
  .c-characters-2 {
    transform: translate(-96px, 10px);
  }
}
/* @media queries 600px > < 960px */
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .c-bullet_1,
  .c-bullet_2 {
    padding-top: calc(6%);
  }
}
/* @media queries < 375px */
@media only screen and (max-width: 331px) {
  .c-characters-1 {
    transform: translate(-43px, 0px);
  }
  .c-characters-2 {
    min-width: 360px !important;
    margin-left: -11px;
  }
  .c-names-p--6 {
    right: 41%;
    margin-bottom: 9%;
  }
  .c-names-p--7 {
    right: 10%;
    margin-bottom: 19%;
  }
  .c-names-p--8 {
    right: 26%;
    margin-top: 4%;
  }
  .u-font-size-sub_32 {
    font-size: 28px;
  }
}
@keyframes name-serie {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
