<template>
  <v-snackbar class="mt-0 " location="top" color="warning" v-model="snackbar">
    {{ text }}
    <template v-slot:actions>
      <v-btn color="white" variant="flat" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <!-- <h1 class="title"> Filled out inspection reports:</h1> -->
  <v-form class="form theme2" @submit="onSubmit">
    <h1>Damage form</h1>
    <p class="error">{{ error.Locatie }}</p>
    <p class="error">{{ error.SoortSchade }}</p>
    <p class="error"> {{ error.Omschrijving }}</p>
    <v-text-field label="Add Location" required v-model="Locatie" bg-color="#f0f0f100" :rules="[v => !!v || 'Location is required']"> </v-text-field>
    <p> </p>
    <label>"Pick Date"
      <input placeholder="Pick Date" type="date" v-model="Datum"> <br>
    </label>
    <v-row>
      <v-col cols="12" md="4">
        <v-checkbox v-model="NieuweSchade" label="New damage" true-value="yes" false-value="no"></v-checkbox>
      </v-col>

      <v-col cols="12" md="4">
        <v-checkbox v-model="AcuteActieVereist" label="Immediate action needed" true-value="yes" false-value="no">
        </v-checkbox>
      </v-col>
      <v-col cols="12" md="4">
        <v-select v-model="SoortSchade" :items="items" :rules="[v => !!v || 'Item is required']" label="Type of damage" bg-color="#f0f0f100">
        </v-select>
      </v-col>
    </v-row>

    <v-textarea v-model="Omschrijving" name="Omschrijving" label="Description
" bg-color="#f0f0f100" :rules="[v => !!v || 'Description is required']"></v-textarea>

    <v-file-input label="Add picture" filled prepend-icon="mdi-camera" bg-color="#f0f0f100"></v-file-input>
    <input type="submit" value="Submit">
  </v-form>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddSchade',
  data() {
    return {
      error: {
        Locatie: '',
        SoortSchade: '',
        Omschrijving: '',
      },
      snackbar: false,
      text: `Form updated`,
      Datum: '',
      Locatie: '',
      NieuweSchade: 'no',
      AcuteActieVereist: 'no',
      SoortSchade: '',
      Omschrijving: '',
      items: [
        'Willfully',
        'Wear and tear',
        'By force',
        'Regular usage',
        'Calamity',
        'Something else'
      ],
    }
  },
  methods: {
    ...mapActions(['addSchadeOpnemen']),
    async onSubmit(e) {

      if (this.Locatie === '') {
        this.error.Locatie = 'vul locatie in... '
      } else { this.error.Locatie = '' }

      if (this.Datum === '') {
        this.error.datum = 'vul datum in... '
      } else { this.error.datum = '' }

      if (this.SoortSchade === '') {
        this.error.SoortSchade = 'vul SoortSchade in... '
      } else { this.error.SoortSchade = '' }

      if (this.Omschrijving === '') {
        this.error.Omschrijving = 'vul Omschrijving in... '
      } else { this.error.Omschrijving = '' }

      if (this.Locatie.length && this.SoortSchade.length && this.Omschrijving.length > 0) {
        e.preventDefault();
        const newSchade = {
          Locatie: this.Locatie,
          Datum: this.Datum,
          NieuweSchade: this.NieuweSchade,
          AcuteActieVereist: this.AcuteActieVereist,
          SoortSchade: this.SoortSchade,
          Omschrijving: this.Omschrijving
        }
        this.addSchadeOpnemen(newSchade)
        this.Datum = '',
          this.Locatie = '',
          this.NieuweSchade = 'no',
          this.AcuteActieVereist = 'no',
          this.SoortSchade = '',
          this.Omschrijving = '',
          this.snackbar = true
        if (this.snackbar = true) {
          this.error.Locatie = '',
            this.error.Omschrijving = '',
            this.error.SoortSchade = ''
        }

        setTimeout(() => {
          this.$router.push({ name: 'Completed' })
        }, 1500);

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

p.error {
  color: white;
  padding-left: 10px;
  font-size: 12px;
}


@media screen and (max-width: 600px) {
  .form {
    width: 90%;

  }

}</style>