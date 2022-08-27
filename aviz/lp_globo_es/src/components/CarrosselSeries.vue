<template>
  <v-row justify="center" class="bg py-8 px-0"
    ><v-col cols="10" class="mb-0 pb-0 u-z-index--15">
      <h4
        class="c-text-sub-title u-font-size-sub_20 text-sm-left pl-3 mb-0 pb-0"
      >
        HISTORIAS QUE TRATAN DE LAS TENDENCIAS MUNDIALES PARA TODOS LOS PÚBLICOS
      </h4>
      <v-col cols="12" class="my-0 pt-0">
        <v-sheet
          class="mx-0 pl-0"
          max-width="1400"
          outlined
          color="transparent"
        >
          <v-slide-group
            mobile-breakpoint="600"
            :show-arrows="$vuetify.breakpoint.xsOnly"
            v-model="serie"
            class="pa-4 pl-0 ml-0 c-slide-group"
            center-active
            next-icon="mdi-chevron-right"
            prev-icon="mdi-chevron-left"
          >
            <v-slide-item
              v-for="(series, idx) in series.series"
              :key="idx"
              class="ml-0 pl-n0"
              v-slot="{ active, toggle }"
            >
              <div class="c-serie" :key="idx">
                <v-img
                  :key="idx"
                  :src="series.capa"
                  :lazy-src="series.draft"
                  position="center"
                  :width="$vuetify.breakpoint.xsOnly ? '100px' : '210px'"
                  :height="$vuetify.breakpoint.xsOnly ? '150.58px' : '316.23px'"
                  class="ma-3 c-img-serie"
                  :class="{ 'c-img-serie--hover': active }"
                  @click="toggle"
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
                <div class="serie-about">
                  <p class="c-serie-title subtitle-2 text-wrap">
                    {{ series.title }}
                  </p>
                  <p class="c-serie-category text-wrap">
                    {{ series.categoria }}
                  </p>
                </div>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
const s = JSON.stringify(require("@/api/series.json"));
export default {
  name: "CarrosselSeries",
  props: {},
  components: {},
  data: () => ({
    series: JSON.parse(s),
    serie: null,
  }),
};
</script>

<style>
/* Useful general classes */
.c-serie {
  max-width: 255px;
  display: block;
}
.serie-about {
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
}
.c-serie-title {
  text-align: center;
  font-style: normal;
  color: #e8edf0;
  padding-bottom: 0px !important;
  margin-bottom: 3px !important;
  width: 99px;
  line-height: 1rem !important;
}
.c-serie-category {
  text-align: center;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 12px;
  color: #e8edf0;
  padding-top: 8px;
  width: 99px;
}
.c-slide-group i {
  font-size: 60px !important;
  color: var(--v-text-pink-base) !important;
}
.c-slide-group .v-slide-group__prev {
  position: absolute;
  top: 0px;
  left: -68px;
  bottom: 0px;
}
.c-img-serie {
  cursor: pointer;
  transition: ease 0.3s;
}
.c-img-serie--hover {
  transition: ease 0.3s;
  -moz-transform: translate(0px, -4px);
  -webkit-transform: translate(0px, -4px);
  -o-transform: translate(0px, -4px);
  -ms-transform: translate(0px, -4px);
  transform: translate(0px, -4px);
}
/* @media queries < 600px */
@media only screen and (max-width: 600px) {
  .v-slide-group__next {
    position: absolute;
    top: 0px;
    right: -68px;
    bottom: 0px;
  }
}
</style>