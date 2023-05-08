<template>
    <main class="main theme">
        <h1 class="title1" style="text-align:center">Completed inspection</h1>
        <v-divider class="mb-5"></v-divider>
        <h1 class="title"> Filled out inspection <br> reports for {{ Schade.Locatie }}:</h1>
        <div class="d-flex justify-center gap=20 align-center py-4">
            <v-btn class="mr-1 text-white" size="large" variant="flat" color="#00AAA2"
                @click="model = Math.max(model - 1, 0)">back</v-btn>

            <v-btn class="ml-1 text-white" size="large" variant="flat" color="#00AAA2"
                @click="model = Math.min(model + 1, 4)">next</v-btn>
        </div>
        <div class="container">
            <v-carousel hide-delimiters :show-arrows="false" height="100%" v-model="model" class="carousel">
                <v-snackbar location="top" color="#00AAA2" v-model="snackbar">
                    {{ text }}
                    <template v-slot:actions>
                        <v-btn color="white" variant="flat" @click="snackbar = false">
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>


                <!-- **************************************************************************************************************************************
                                                            Update Time and Location
                ************************************************************************************************************************************-->
                <v-carousel-item>
                    <v-card class="main-card theme2">
                        <div v-if="Schade" class="details-data">
                            <h1 class="titel">Date and location</h1>
                            <v-divider />
                            <h1> Date:&nbsp;&nbsp; <span>{{ Schade.Datum }}</span></h1>
                            <v-divider />
                            <h1>Location: &nbsp;&nbsp;<span>{{ Schade.Locatie }}</span></h1>
                            <v-divider />
                        </div>

                        <div class="text-center">
                            <v-dialog v-model="dialog4" class="dialog">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="#1E292f" v-bind="props" class="knop">
                                        Update Date and location
                                    </v-btn>
                                </template>

                                <v-card class="theme2">
                                    <v-card-text>
                                        <v-form class="theme2" @submit="onSubmit">
                                            <h1>Edit time and location</h1>
                                            <v-text-field label="Add Location" required v-model="Schade.Locatie"
                                                bg-color="#f0f0f100">
                                            </v-text-field>
                                            <label>"Pick Date"
                                                <input placeholder="Pick Date" type="date" v-model="Schade.Datum"> <br>
                                            </label>
                                            <input type="submit" value="Update" v-on:click="Update" @click="overlay = false"
                                                class="button">
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="#1E292f" block @click="dialog4 = false">Close Form</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-carousel-item>
                <!-- **************************************************************************************************************************************
                                                            Update Damage
            ************************************************************************************************************************************-->
                <v-carousel-item>
                    <v-card class="main-card theme2">
                        <div v-if="Schade" class="details-data">
                            <h1 class="titel">DAMAGES REPORT</h1>
                            <v-divider />
                            <h1> New damage:&nbsp;&nbsp; <span>{{ Schade.NieuweSchade }}</span></h1>
                            <v-divider />
                            <h1> Type of damage:&nbsp;&nbsp; <span>{{ Schade.SoortSchade }}</span></h1>
                            <v-divider />
                            <h1> Need fixing now:&nbsp;&nbsp; <span>{{ Schade.AcuteActieVereist }}</span></h1>
                            <v-divider />
                            <h1> Description:&nbsp;&nbsp;<span>{{ Schade.Omschrijving }}</span></h1>
                            <v-divider />
                        </div>

                        <div class="text-center">
                            <v-dialog v-model="dialog1" class="dialog">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="#1E292f" v-bind="props" class="knop">
                                        Fill out / Update form
                                    </v-btn>
                                </template>

                                <v-card class="theme2">
                                    <v-card-text>
                                        <v-form class="theme2" @submit="onSubmit">
                                            <h1>Damage form</h1>
                                            <v-row>
                                                <v-col cols="12" md="4">
                                                    <v-checkbox v-model="Schade.NieuweSchade" label="New damage"
                                                        true-value="yes" false-value="no"></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-checkbox v-model="Schade.AcuteActieVereist"
                                                        label="Immediate action needed" true-value="yes" false-value="no">
                                                    </v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="4">
                                                    <v-select v-model="Schade.SoortSchade" :items="itemss"
                                                        :rules="[v => !!v || 'Item is required']" label="Type of damage"
                                                        required bg-color="#f0f0f100">
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                            <v-textarea v-model="Schade.Omschrijving" name="Omschrijving"
                                                label="Description" bg-color="#f0f0f100"></v-textarea>
                                            <v-file-input label="Add picture" filled prepend-icon="mdi-camera"
                                                bg-color="#f0f0f100">
                                            </v-file-input>
                                            <input type="submit" value="Update" v-on:click="Update" @click="overlay = false"
                                                class="button">
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="#1E292f" block @click="dialog1 = false">Close Form</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-carousel-item>
                <!-- **************************************************************************************************************************************
                                                            Update Maintenance
            ************************************************************************************************************************************-->
                <v-carousel-item>
                    <v-card class="main-card theme2">
                        <div v-if="Schade" class="details-data">
                            <h1 class="titel">MAINTENANCE</h1>
                            <v-divider></v-divider>
                            <h1> In need of maintenanace:&nbsp;&nbsp;<span>{{ Schade.AcuteActieVereistMaintenance
                            }}</span></h1>
                            <v-divider />
                            <h1> Type of maintenance:&nbsp;&nbsp;<span>{{ Schade.TypeOfMaintenance }}</span></h1>
                            <v-divider />
                            <h1> Cost of maintenance:&nbsp;&nbsp;<span>{{ Schade.CostOfMaintenance }}</span></h1>
                            <v-divider></v-divider>
                        </div>
                        <div class="text-center">
                            <v-dialog v-model="dialog" class="dialog">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="#1E292f" v-bind="props" class="knop">
                                        Fill out / Update form
                                    </v-btn>
                                </template>

                                <v-card class="theme2">
                                    <v-card-text>
                                        <v-form class="theme2" @submit="onSubnit">
                                            <h1>Maintenanche form</h1>
                                            <v-select v-model="Schade.TypeOfMaintenance" :items="type"
                                                :rules="[v => !!v || 'Item is required']" label="Type of maintenance"
                                                required bg-color="#f0f0f100">
                                            </v-select>
                                            <v-select v-model="Schade.CostOfMaintenance" :items="cost"
                                                :rules="[v => !!v || 'Item is required']" label="Cost of maintenance"
                                                required bg-color="#f0f0f100">
                                            </v-select>
                                            <v-checkbox v-model="Schade.AcuteActieVereistMaintenance"
                                                label="Acute actie vereist" value="Ja"></v-checkbox>
                                            <v-file-input label="Add picture" filled prepend-icon="mdi-camera"
                                                bg-color="#f0f0f100">
                                            </v-file-input>
                                            <input type="submit" value="Update" v-on:click="Update" class="button">
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="#1E292f" block @click="dialog = false">Close Form</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-carousel-item>
                <!-- **************************************************************************************************************************************
                                                           Update Technical
            ************************************************************************************************************************************-->
                <v-carousel-item>

                    <v-card class="main-card theme2">
                        <div v-if="Schade" class="details-data">
                            <h1 class="titel">Technical</h1>
                            <v-divider></v-divider>
                            <h1>Type off installation:&nbsp;&nbsp;<span>{{ Schade.TypeInstallation }}</span></h1>
                            <v-divider />
                            <h1> Reported malfunction:&nbsp;&nbsp;<span>{{ Schade.ReportedMalfunction }}</span></h1>
                            <v-divider />
                            <h1> Approved:&nbsp;&nbsp;<span>{{ Schade.Aproved }}</span></h1>
                            <v-divider></v-divider>
                            <h1> Comments:&nbsp;&nbsp;<span>{{ Schade.Comments }}</span></h1>
                            <v-divider></v-divider>
                        </div>
                        <div class="text-center">
                            <v-dialog v-model="dialog2" class="dialog">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="#1E292f" v-bind="props" class="knop">
                                        Fill out / Update form
                                    </v-btn>
                                </template>

                                <v-card class="theme2">
                                    <v-card-text>
                                        <v-form class="theme2" @submit="onSubnit">
                                            <h1>Technical form</h1>
                                            <v-select v-model="Schade.TypeInstallation" :items="typeMain"
                                                :rules="[v => !!v || 'Item is required']" label="Type of installation"
                                                required bg-color="#f0f0f100">
                                            </v-select>
                                            <v-text-field label="Reported malfunction" required
                                                v-model="Schade.ReportedMalfunction" bg-color="#f0f0f100">
                                            </v-text-field>
                                            <v-checkbox v-model="Schade.Aproved" label="Aproved" true-value="yes"
                                                false-value="no">
                                            </v-checkbox>
                                            <v-text-field label="Comments" required v-model="Schade.Comments"
                                                bg-color="#f0f0f100">
                                            </v-text-field>
                                            <v-file-input label="Add picture" filled prepend-icon="mdi-camera"
                                                bg-color="#f0f0f100">
                                            </v-file-input>
                                            <input type="submit" value="Update" v-on:click="Update" class="button">
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="#1E292f" block @click="dialog2 = false">Close Form</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-carousel-item>

                <!-- **************************************************************************************************************************************
                                                           Update Modifications
            ************************************************************************************************************************************-->
                <v-carousel-item>
                    <v-card class="main-card theme2">
                        <div v-if="Schade" class="details-data">
                            <h1 class="titel">Modifications</h1>
                            <v-divider></v-divider>
                            <h1> modification location:&nbsp;&nbsp;<span>{{ Schade.modificationLocatie }}</span></h1>
                            <v-divider />
                            <h1> Modification description:&nbsp;&nbsp;<span>{{ Schade.ModificationDescription }}</span>
                            </h1>
                            <v-divider />
                            <h1> Performed by:&nbsp;&nbsp;<span>{{ Schade.PerformedBy }}</span></h1>
                            <v-divider />
                            <h1> Required action:&nbsp;&nbsp;<span>{{ Schade.requiredAction }}</span></h1>
                            <v-divider></v-divider>
                            <h1> Comment action:&nbsp;&nbsp;<span>{{ Schade.ModificationComment }}</span></h1>
                            <v-divider></v-divider>
                        </div>
                        <div class="text-center">
                            <v-dialog v-model="dialog3" class="dialog">
                                <template v-slot:activator="{ props }">
                                    <v-btn color="#1E292f" v-bind="props" class="knop">
                                        Fill out / Update form
                                    </v-btn>
                                </template>

                                <v-card class="theme2">
                                    <v-card-text>
                                        <v-form class="theme2" @submit="onSubnit">
                                            <h1>Modifications form</h1>
                                            <v-text-field label="Location of modification" required
                                                v-model="Schade.modificationLocatie" bg-color="#f0f0f100" width="50%">
                                            </v-text-field>
                                            <v-text-field label="Existing situation and modified documents" required
                                                v-model="Schade.ModificationDescription" bg-color="#f0f0f100">
                                            </v-text-field>
                                            <v-row>
                                                <v-col cols="12" md="6">
                                                    <v-select v-model="Schade.PerformedBy" :items="action"
                                                        :rules="[v => !!v || 'Item is required']" label="Performed by"
                                                        required bg-color="#f0f0f100">
                                                    </v-select>
                                                </v-col>
                                                <v-select v-model="Schade.requiredAction" :items="rAction"
                                                    :rules="[v => !!v || 'Item is required']" label="Required action"
                                                    required bg-color="#f0f0f100">
                                                </v-select>
                                            </v-row>
                                            <v-text-field label="Description" required v-model="Schade.ModificationComment"
                                                bg-color="#f0f0f100">
                                            </v-text-field>
                                            <v-file-input label="Add picture" filled prepend-icon="mdi-camera"
                                                bg-color="#f0f0f100">
                                            </v-file-input>
                                            <input type="submit" value="Update" v-on:click="Update" class="button">
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="#1E292f" block @click="dialog3 = false">Close Form</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </div>

    </main>
</template>
  
<script>
import axios from 'axios';
export default {
    props: ['id'],

    data() {
        return {
            model: 0,
            snackbar: false,
            text: `Form updated`,
            tab: null,
            dialog: false,
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            itemss: [
                'Willfully',
                'Wear and tear',
                'By force',
                'Regular usage',
                'Calamity',
                'Something else'
            ],
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
            action: [
                'The tenant',
                'The contracter',
                'Unknown',
            ],
            cost: [
                '0 - 500',
                '500 - 1500',
                '1500+',
            ],
            typeMain: [
                'Cooling',
                'Heating',
                'Air conditioning',
                'Electricity',
                'Security',
                'Someting else'
            ],
            rAction: [
                'Accept',
                'Approve',
                'Remove',
                'Adapt and approve',
            ],
            Schade: {
                Datum: '',
                Locatie: '',
                NieuweSchade: 'nee',
                AcuteActieVereist: 'nee',
                SoortSchade: '',
                Kostenindicatie: '',
                Omschrijving: '',
                AcuteActieVereistMaintenance: '',
                TypeOfMaintenance: '',
                CostOfMaintenance: '',
                TypeInstallation: '',
                Aproved: 'nee',
                ReportedMalfunction: '',
                Comments: '',
                ModificationDescription: '',
                PerformedBy: '',
                ModificationComment: '',
                requiredAction: '',
                modificationLocatie: '',
            }

        }
    },

    mounted() {
        fetch('https://kind-tan-goshawk-tux.cyclic.app/schade' + this.id)
            .then((res) => res.json())
            .then(data => this.Schade = data)
            .catch(err => console.log(err.message))
    },



    methods: {
        async Update(e) {
            e.preventDefault();
            axios.put('https://kind-tan-goshawk-tux.cyclic.app/schade' + this.id, {
                Locatie: this.Schade.Locatie,
                Datum: this.Schade.Datum,
                NieuweSchade: this.Schade.NieuweSchade,
                AcuteActieVereist: this.Schade.AcuteActieVereist,
                SoortSchade: this.Schade.SoortSchade,
                Omschrijving: this.Schade.Omschrijving,
                Kostenindicatie: this.Schade.Kostenindicatie,
                TypeInstallation: this.Schade.TypeInstallation,
                Aproved: this.Schade.Aproved,
                ReportedMalfunction: this.Schade.ReportedMalfunction,
                Comments: this.Schade.Comments,
                ModificationDescription: this.Schade.ModificationDescription,
                PerformedBy: this.Schade.PerformedBy,
                ModificationComment: this.Schade.ModificationComment,
                requiredAction: this.Schade.requiredAction,
                modificationLocatie: this.Schade.modificationLocatie,
                AcuteActieVereistMaintenance: this.Schade.AcuteActieVereistMaintenance,
                TypeOfMaintenance: this.Schade.TypeOfMaintenance,
                CostOfMaintenance: this.Schade.CostOfMaintenance
            })
            this.snackbar = true
            this.dialog = false
            this.dialog1 = false
            this.dialog2 = false
            this.dialog3 = false
            this.dialog4 = false
        },

    },
}
</script>
  
<style scoped>
.container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    padding-bottom: 10vh;
}

h1.titel {
    font-size: 25px !important;
    text-transform: uppercase;
}

.details-data h1 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 900px;
}

.details-data h1 span {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 400;
}

.dialog {
    width: 100%;
    max-width: 800px;
}

h1.title {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    color: #00AAA2;
    text-align: center;
    margin-top: 60px;
    line-height: 35px;

}

span {
    color: #00AAA2;
    font-family: 'Raleway', sans-serif;
    font-size: 16px !important;
    font-weight: 500 !important;
}

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    padding-bottom: 10px;
    min-height: 86vh;
}

.main-card {
    padding: 50px;
    margin: auto;
    max-width: 600px;
    background-color: #fff;
}

.knop {
    color: #fff;
    margin-top: 40px;
}

.button {
    text-transform: uppercase;
    background-color: #00AAA2;
    width: 50%;
    height: 50px;
    padding: 0 20px;
    color: #fff;
    border-radius: 8px;
    margin-top: 20px;
}

@media only screen and (max-width: 600px) {

    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        padding-bottom: 10px;
        min-height: 82vh;
    }

    h1.title {

        margin-top: 20px;
    }


    .main-card {
        padding: 20px;
        margin: 16px;

    }
}
</style>