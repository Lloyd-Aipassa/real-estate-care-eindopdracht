<template>
  <v-snackbar class="mt-0 " location="top" color="warning" v-model="snackbar">
    {{ text }}
    <template v-slot:actions>
      <v-btn color="white" variant="flat" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-form class="form theme2" @submit="onSubnit">
    <h1>Maintenanche form</h1>
    <p class="error">{{ error.locatie }}</p>
    <p class="error">{{ error.TypeOfMaintenance }}</p>
    <p class="error">{{ error.CostOfMaintenance }}</p>

    <v-text-field label="Add Location" required v-model="Locatie" bg-color="#f0f0f100" :rules="[v => !!v || 'Location is required']"> </v-text-field>
    <label>"Pick Date"
      <input placeholder="Pick a Datess" type="date" v-model="Datum"> <br>
    </label>
    <v-select v-model="TypeOfMaintenance" :items="type" :rules="[v => !!v || 'Item is required']"
      label="Type of maintenance" required bg-color="#f0f0f100">
    </v-select>
    <v-select v-model="CostOfMaintenance" :items="cost" :rules="[v => !!v || 'Item is required']"
      label="Cost of maintenance" required bg-color="#f0f0f100">
    </v-select>
    <v-checkbox v-model="AcuteActieVereistMaintenance" label="Acute actie vereist" value="Ja"></v-checkbox>
    <v-file-input label="Add picture" filled prepend-icon="mdi-camera" bg-color="#f0f0f100"></v-file-input>
    <input type="submit" value="Submit">
  </v-form>
</template>
    
<script>
import { mapActions } from 'vuex';

export default {
  name: 'addMaintenance',
  data() {
    return {
      error: {
        locatie: '',
        TypeOfMaintenance: '',
        CostOfMaintenance: ''
      },
      snackbar: false,
      text: `Form updated`,
      Datum: '',
      Locatie: '',
      AcuteActieVereistMaintenance: 'nee',
      TypeOfMaintenance: '',
      CostOfMaintenance: '',
      type: [
        'Painting',
        'Wood is rotten',
        'Electricty',
        'Plumbing',
        'Glazing',
        'Something else'
      ],
      cost: [
        '0 - 500',
        '500 - 1500',
        '1500+',
      ],
    }
  },
  methods: {
    ...mapActions(['addSchadeOpnemen']),
    onSubnit(e) {
      if (this.Locatie === '') {
        this.error.locatie = 'Fill out the location... '
      } else { this.error.locatie = '' }

      if (this.TypeOfMaintenance === '') {
        this.error.TypeOfMaintenance = 'Fill out the type of maintenance... '
      } else { this.error.TypeOfMaintenance = '' }

      if (this.CostOfMaintenance === '') {
        this.error.CostOfMaintenance = 'Fill out the cost o f maintenance... '
      } else { this.error.CostOfMaintenance = '' }

      if (this.Locatie.length && this.TypeOfMaintenance.length && this.CostOfMaintenance.length> 0) {
        e.preventDefault();
        const newSchade = {
          Locatie: this.Locatie,
          Datum: this.Datum,
          AcuteActieVereistMaintenance: this.AcuteActieVereistMaintenance,
          TypeOfMaintenance: this.TypeOfMaintenance,
          CostOfMaintenance: this.CostOfMaintenance,
        }

        this.addSchadeOpnemen(newSchade)
        this.Datum = '',
          this.Locatie = '',
          this.AcuteActieVereistMaintenance = 'nee',
          this.TypeOfMaintenance = '',
          this.CostOfMaintenance = '',
          this.snackbar = true
        if (this.snackbar = true) {
          this.error.locatie = '',
            this.error.TypeOfMaintenance = ''
          this.error.CostOfMaintenance = ''
        }
        setTimeout(() => {
          this.$router.push({ name: 'Scheduled' })
        }, 2500);
      }
    }
  }

}
</script>
    
<style scoped>
.error {
    background-color: red;
    font-family: 'Raleway', sans-serif;
}

p.error{
    color: white;
    padding-left: 20px;
    font-size: 12px;
}


@media screen and (max-width: 600px) {
  .form {
    width: 90%;

  }

}
</style>