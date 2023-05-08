<template>
    <v-snackbar class="mt-0" location="top" color="warning" v-model="snackbar">
        {{ text }}
        <template v-slot:actions>
            <v-btn color="white" variant="flat" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
    <v-form class="form theme2" @submit="onSubmit">
        <h1>Technical form</h1>
        <p class="error">{{ error.locatie }}</p>
        <p class="error">{{ error.TypeInstallation }}</p>
        <p class="error">{{ error.ReportedMalfunction }}</p>
        <v-text-field label="Add Location" required v-model="Locatie" bg-color="#f0f0f100" :rules="[v => !!v || 'required']"> </v-text-field>
        <label>"Pick Date"
            <input placeholder="Pick Date" type="date" v-model="Datum"> <br>
        </label>
        <v-select v-model="TypeInstallation" :items="typeMain" :rules="[v => !!v || 'Item is required']"
            label="Type of installation" required bg-color="#f0f0f100">
        </v-select>
        <v-text-field label="Reported malfunction" required v-model="ReportedMalfunction" bg-color="#f0f0f100" :rules="[v => !!v || 'required']">
        </v-text-field>
        <v-checkbox v-model="Aproved" label="Aproved" true-value="yes" false-value="No"></v-checkbox>
        <v-text-field label="Comments" required v-model="Comments" bg-color="#f0f0f100"> </v-text-field>
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
                locatie: '',
                TypeInstallation: '',
                ReportedMalfunction: '',
            },
            snackbar: false,
            text: `Form updated`,
            Datum: '',
            Locatie: '',
            TypeInstallation: '',
            Aproved: 'nee',
            ReportedMalfunction: '',
            Comments: '',
            typeMain: [
                'Cooling',
                'Heating',
                'Air conditioning',
                'Electricity',
                'Security',
                'Someting else'
            ],
        }
    },
    methods: {
        ...mapActions(['addSchadeOpnemen']),
        onSubmit(e) {
            if (this.Locatie === '') {
                this.error.locatie = 'Fill out the location... '
            } else { this.error.locatie = '' }

            if (this.TypeInstallation === '') {
                this.error.TypeInstallation = 'Fill out Type of installation... '
            } else { this.error.TypeInstallation = '' }

            if (this.ReportedMalfunction === '') {
                this.error.ReportedMalfunction = 'Fill out Reported malfunction... '
            } else { this.error.ReportedMalfunction = '' }

            if (this.Locatie.length && this.TypeInstallation.length && this.ReportedMalfunction.length> 0) {
                e.preventDefault();
                const newSchade = {
                    Locatie: this.Locatie,
                    Datum: this.Datum,
                    TypeInstallation: this.TypeInstallation,
                    Aproved: this.Aproved,
                    ReportedMalfunction: this.ReportedMalfunction,
                    Comments: this.Comments
                }
                this.addSchadeOpnemen(newSchade)
                this.Datum = '',
                    this.Locatie = '',
                    this.TypeInstallation = '',
                    this.Aproved = '',
                    this.ReportedMalfunction = '',
                    this.Comments = '',
                    this.snackbar = true
                    if (this.snackbar = true) {
                    this.error.locatie = '',
                    this.error.TypeInstallation = ''
                    this.error.ReportedMalfunction = ''
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