// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from "vuetify";



export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          
        }
      },
    },
  },
})

