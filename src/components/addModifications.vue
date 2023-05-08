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
    <h1>Modifications form</h1>
    <p class="error">{{ error.locatie }}</p>
    <p class="error">{{ error.Datum }}</p>
    <p class="error">{{ error.modificationLocatie }}</p>
    <p class="error">{{ error.Omschrijving }}</p>
    <p class="error">{{ error.ModificationDescription }}</p>
    <p class="error">{{ error.PerformedBy }}</p>
    <p class="error">{{ error.requiredAction }}</p>
    <v-text-field label="Add Location" v-model="Locatie" bg-color="#f0f0f100" width="50%"
      :rules="[v => !!v || 'Location Required']"> </v-text-field>
    <label>"Pick Date"
      <input placeholder="Pick Date" type="date" v-model="Datum" :rules="[v => !!v || 'Location Required']"> <br>
    </label>
    <v-text-field label="Location of modification" v-model="modificationLocatie" bg-color="#f0f0f100" width="50%"
      :rules="[v => !!v || 'Modification location Required']"> </v-text-field>
    <v-text-field label="Existing situation and modified documents" v-model="ModificationDescription"
      bg-color="#f0f0f100" :rules="[v => !!v || 'Required']"> </v-text-field>
    <v-row>
      <v-col cols="12" md="6">
        <v-select v-model="PerformedBy" :items="action" :rules="[v => !!v || 'this is required']" label="Performed by"
          bg-color="#f0f0f100">
        </v-select>
      </v-col>
      <v-select v-model="requiredAction" :items="rAction" :rules="[v => !!v || 'Item is required']"
        label="Required action" bg-color="#f0f0f100ff">
      </v-select>
    </v-row>
    <v-text-field label="Comments" v-model="ModificationComment" bg-color="#f0f0f100"> </v-text-field>
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
        // Datum: '',
        locatie: '',
        modificationLocatie: '',
        ModificationDescription: '',
        PerformedBy: '',
        requiredAction: '',
      },
      snackbar: false,
      text: `Form updated`,
      Datum: '',
      Locatie: '',
      modificationLocatie: '',
      ModificationDescription: '',
      PerformedBy: '',
      ModificationComment: '',
      requiredAction: '',
      action: [
        'The tenant',
        'The contracter',
        'Unknown',
      ],
      rAction: [
        'Accept',
        'Approve',
        'Remove',
        'Adapt and approve',
      ],
    }
  },
  methods: {
    ...mapActions(['addSchadeOpnemen']),
    onSubnit(e) {
      if (this.Locatie === '') {
        this.error.locatie = 'Fill out the location... '
      } else { this.error.locatie = '' }

      // if (this.Datum === '') {
      //   this.error.Datum = 'vul datum in... '
      // } else { this.error.Datum = '' }

      if (this.modificationLocatie === '') {
        this.error.modificationLocatie = 'Fill out the modification location... '
      } else { this.error.modificationLocatie = '' }

      if (this.ModificationDescription === '') {
        this.error.ModificationDescription = 'Fill out the modification description... '
      } else { this.error.ModificationDescription = '' }

      if (this.PerformedBy === '') {
        this.error.PerformedBy = 'Fill out perfomed by... '
      } else { this.error.PerformedBy = '' }

      if (this.requiredAction === '') {
        this.error.requiredAction = 'Fill out Required action by... '
      } else { this.error.requiredAction = '' }

      if (this.Locatie.length && this.modificationLocatie.length && this.ModificationDescription.length && this.PerformedBy.length && this.requiredAction.length > 0) {
        e.preventDefault();
        const newSchade = {
          Locatie: this.Locatie,
          Datum: this.Datum,
          modificationLocatie: this.modificationLocatie,
          ModificationDescription: this.ModificationDescription,
          PerformedBy: this.PerformedBy,
          ModificationComment: this.ModificationComment,
          requiredAction: this.requiredAction,
        }
        this.addSchadeOpnemen(newSchade)
        this.Datum = '',
          this.Locatie = '',
          this.modificationLocatie = '',
          this.ModificationDescription = '',
          this.PerformedBy = '',
          this.ModificationComment = '',
          this.requiredAction = '',
          this.snackbar = true
        if (this.snackbar = true) {
          this.error.locatie = '',
            // this.error.Datum = ''
            this.error.modificationLocatie = ''
          this.error.ModificationDescription = ''
          this.error.PerformedBy = ''
          this.error.requiredAction = ''
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
    padding-left: 10px;
    font-size: 12px;
}

@media screen and (max-width: 600px) {
  .form {
    width: 90%;

  }

}
</style>