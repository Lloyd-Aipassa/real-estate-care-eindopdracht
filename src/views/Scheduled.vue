<template >
  <main class="theme">
    <h1 class="title" style="text-align:center">Scheduled inspections</h1>
    <button @click="  Refresh()">refresh  <v-icon class="icon-refresh" size="15" >mdi-refresh</v-icon></button>
    <Scheduleds :key="reload" />
  </main>
</template>


<script>
import Scheduleds from '@/components/Scheduleds.vue';

export default {
  name: 'Scheduled',

  components: {
    Scheduleds
  },

  data() {
    return {
      reload: 0
    }
  },

  methods:{
    Refresh(){
      this.reload++
    }
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


.icon-refresh{
  width: 10px;
}


h1.loading{
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
  100% {transform: rotate(360deg);}
}

@media only screen and (max-width: 600px) {

main {
  min-height: 82vh;
  padding-bottom: 10vh;
}
}


</style>