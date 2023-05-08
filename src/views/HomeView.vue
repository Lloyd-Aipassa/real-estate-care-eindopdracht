<template>

  <main class="theme">
    <h1 class="title1" style="text-align:center">Dashboard</h1>
        <v-divider  class="mb-5"></v-divider>
    <div class="content">
      <v-btn to="/Completed" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-checkbox-marked-circle</v-icon>
          <h3><span>completed</span></h3>
        </div>
      </v-btn>

      <v-btn to="/Scheduled" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-bookmark-outline</v-icon>
          <h3><span>Scheduled</span></h3>
        </div>
      </v-btn>
  

 
      <v-btn to="/KnowledgeBase" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-apps</v-icon>
          <h3><span>KnowledgeBase</span></h3>
        </div>
      </v-btn>
      <settingsComp/>
    </div>
   
    <v-divider class="divider" />
  
  </main>
</template>

<script>
import settingsComp from '@/components/settingsComp.vue';
export default {
  name: 'Home',
  components: {
    settingsComp
  },

  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'Login' })
    }
  }
};
</script>

<style scoped>
.knop {
  width: 100%;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}


.content-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 100%;
  height: 86vh;
  padding: 20px;
}


.content{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.divider {
  width: 100%;
  max-width: 1300px;
  margin: 20px auto;  
}

@media only screen and (max-width: 600px) {
  main {
    height: 82svh;
    padding: 20px;
    padding-bottom: 90vh;
    gap: 10px;
  }

  
}
</style>