import Vue from "vue";
import Vuetify from "vuetify/lib";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";

const vuetify = new Vuetify({
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

Vue.use(Vuetify);

Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: "mdi",
});

export default vuetify;
