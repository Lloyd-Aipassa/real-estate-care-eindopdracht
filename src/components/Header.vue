<template>
  <header>
    <div class="content">
      <img :src="require('@/assets/logoRealEstateCare.svg')" alt="logo" />
      <v-btn class="ml-2 text-black" variant="flat" color="#fff">
        log out
        <v-dialog v-model="dialog" activator="parent" max-width="500">
          <v-card>
            <v-card-text class="text-center">
              Are you sure you want to log out
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn class="ml-2 text-white" size="small" variant="flat" color="#1B1F32" v-on:click="logout">Yes</v-btn>
              <v-btn class="ml-2 text-white" size="small" variant="flat" color="#00AAA2" @click="dialog = false">No
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </header>
</template>

  
<script>
export default {
  name: 'Header',
  data() {
    return {
      dialog: false,
    }
  },

  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({ name: "Login" })
      this.dialog = false
    }

  }
}
</script>

<style scoped>
header {
  height: 7vh !important;
  padding: 0 15px;
  width: 100%;
  background: linear-gradient(86deg, rgba(71, 94, 108, 1) 0%, rgba(20, 27, 31, 1) 60%);
  border-bottom: 1px solid white;
}

.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

@media screen and (max-width: 600px) {
  header {
    height: 9vh !important;
  }
}
</style>