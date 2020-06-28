import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  // theme: {
  //   primary: colors.purple.base, // #E53935
  //   secondary: colors.teal.base, // #FFCDD2
  //   accent: colors.deepOrange.base, // #3F51B5
  // },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 768,
      md: 1024,
      lg: 1440,
    },
    scrollBarWidth: 24,
  },
});
