<template >
  <footer>
    <button @click="$router.push('/')">
      <v-icon style="color: #FFF;">mdi-view-dashboard</v-icon>
      <span style="color: #FFF;">Dashboard</span>
    </button>

    <div class="text-center">
      <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
          <button>
            <v-icon style="color: #FFF;" v-bind="props">mdi-logout</v-icon>
            <span style="color: #FFF;" v-bind="props">Information</span>
          </button>
        </template>

        <v-card class="theme2">
          <v-card-text>
            Deze applicatie is gemaakt door Lloyd Aipassa als afstudeer project voor het onderdeel "Front-end frameworks"
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close information</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <button @click="$router.back()">
      <v-icon style="color: #FFF;">mdi-arrow-left-circle</v-icon>
      <span style="color: #FFF;">back</span>
    </button>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>
button {
  background-color: #00aaa200 !important;
}

footer {
  background-color: #00AAA2 !important;
  height: 7vh !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
}

span {
  display: flex;
  flex-direction: column-reverse;
}

@media screen and (max-width: 600px) {
  footer {
    height: 9vh !important;
  }
}
</style>