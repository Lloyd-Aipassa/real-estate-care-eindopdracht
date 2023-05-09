<template>
  <div v-for="{ _id, Locatie, Datum, Adress, typeOfInspection, pathForm } in toDo" :key="_id" class="post theme2">
    <div class="content">
      <span>
        <h2>Execute before: {{ Datum }},<br>{{ Locatie }},&nbsp;&nbsp{{ Adress }}<br>scheduled for: {{ typeOfInspection }}
        </h2>
        <v-btn :to="`${pathForm}`" class="ml-2 text-white button" max-width="40%" size="small" variant="flat"
          color="#00AAA2">
          Go to forms </v-btn>
      </span>
      <v-icon class="icon" style="color: red;" size="25" @click="deleteRapport(_id)">mdi-delete</v-icon>
    </div>
  </div>
  <div v-if="loading">
    <h1 class="loading">
      <img :src="require('@/assets/spinner.svg')" class="spin" width="50" height="50" alt="logo" />
      loading...
    </h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Scheduleds',

  data() {
    return {
      toDo: [],
      loading: "",
    }
  },

  methods: {
    getData() {
      this.loading = true
      fetch('https://kind-tan-goshawk-tux.cyclic.app/scheduled?_sort=Datum&order=desc')
        .then((res) => res.json()
          .then(this.loading = false))
        .then((data) => this.toDo = data.sort((d1, d2) => (d1.Datum > d2.Datum) ? 1 : (d1.Datum < d2.Datum) ? -1 : 0))
        .catch(err => console.log(err.message))
    },

    deleteRapport(id) {

      axios.delete('https://kind-tan-goshawk-tux.cyclic.app/scheduled' + id)
        .then(() => { this.toDo.splice(id, 1) })
        .then(() => {
          //   this.$router.push({ name: 'Completed' })
          this.reload++
        })
        .catch(err => console.log(err.message))

    },

  },

  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  padding-bottom: 10vh;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between !important;
  padding: 10px;
}

.icon-refresh {
  width: 10px;
}

.post {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 150px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 5px;
  max-width: 600px;
}

.icon {
  align-self: center;
}

.button {
  padding: 0 80px;
  margin-top: 10px;
  margin-left: 0px !important;
}



.post a:hover {
  background: rgba(221, 221, 221, 0.164);
  color: white;
}

.post h2 {

  text-transform: uppercase;
  font-size: 18px;
}

h1.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 50px;
}

.spin {
  animation: spinnerAnimatie 3s infinite;
}

@keyframes spinnerAnimatie {
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  .post h2 {

    text-transform: uppercase;
    font-size: 16px;
  }
}
</style>