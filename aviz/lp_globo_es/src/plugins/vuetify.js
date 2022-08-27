import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/lib/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: {
            pt
        },
        current: 'pt',
    },
    theme: {
        dark: true,
        default: 'light',
        themes: {
            light: {
                primary: '#7833E8',
                secondary: '#D1268E',
                'text-pink': '#CB2283',
                'text-white': '#FFFFFF',
                bg: '#160E26',
                bg2: '#201437',
                accent: '#45b986',
                error: '#FF5252',
                info: '#45b986',
                success: '#6AC79E',
                warning: '#FB8C00',
                primaryMn: '#31835F',
                secondaryMn: '#6AC79E',
                terceira: '#4D3C56',
                quarta: '#bdbabe',
                fundoBranco: '#f2f2f2',
                textos: '#44444c',
            },
            dark: {
                primary: '#7833E8',
                secondary: '#D1268E',
                'text-pink': '#CB2283',
                'text-white': '#FFFFFF',
                bg: '#160E26',
                bg2: '#201437',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
            },
        },
        options: {
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
            customProperties: true
        },
        breakpoint: {
            thresholds: {
                xs: 600,
                sm: 960,
                md: 1264,
                lg: 1904,
            },
        },
    },

});