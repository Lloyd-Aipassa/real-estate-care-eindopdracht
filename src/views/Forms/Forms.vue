<template>
  <main class="theme">
    <h1 class="title" style="text-align:center">Forms</h1>
    <v-divider class="mb-5"></v-divider>

    <div class="content">
      <v-btn to="/Damages" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-note-edit-outline</v-icon>
          <h3><span>Fill out the damage form</span></h3>
        </div>
      </v-btn>

      <v-btn to="/Maintenance" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-magnify</v-icon>
          <h3><span>Fill out the <br> maintenanche form</span></h3>
        </div>
      </v-btn>



      <v-btn to="/Technical" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-apps</v-icon>
          <h3><span>Fill out the technical form</span></h3>
        </div>
      </v-btn>

      <v-btn to="/modifications" class="knop theme2">
        <div class="content-button">
          <v-icon style="color: #00AAA2;" size="70">mdi-wrench-cog-outline</v-icon>
          <h3><span>Fill out the <br> modifications form</span></h3>
        </div>
      </v-btn>

    </div>

    <v-divider class="divider" />



  </main>
</template>
    
<script>


export default {
  name: 'Scheduled',

  data() {
    return {
      toDo: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/toDo')
      .then((res) => res.json())
      .then(data => this.toDo = data)
      .catch(err => console.log(err.message))
  }
}
</script>
    
<style scoped>
.knop {
  width: 100%;
  height: 200px;
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

.content {
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
    padding: 20px;
    gap: 10px;
  }


}


/* #app>div>div>main>main>div {
  max-width: 600px !important;
}

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 50px;
  width: 100vw;
  min-height: 86vh;
}

@media only screen and (max-width: 600px) {
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 10px;
    padding: 0;
    padding: 16px;
  }

  .card {
    margin-bottom: 10px;
  }
} */
</style>