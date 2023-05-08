<template>
    <main>
        <div class="top">
            <!-- <img :src="require('@/assets/logoRealEstateCare.svg')" class="img" /> -->
        </div>
        <div class="top2">
            <img :src="require('@/assets/logoRealEstateCare.svg')" class="img" />
        </div>
        <div class="text-center">
            <v-dialog v-model="dialog">
                <v-card>
                    <v-card-text>
                        <form>
                            <p>Step-2: please fill in the code...</p>
                            <p class="error">{{ error.mobNumber }}</p>
                            <v-text-field label="Number" input type="text" required v-model="mobNumber" bg-color="#fff">
                            </v-text-field>
                            <v-btn flat color="#00AAA2" class="text-white" v-on:click="login2">Verify code</v-btn>
                        </form>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>

        <v-snackbar location="top" color="red" v-model="snackbar3" timeout="3000">
            Oops wrong verrification code
            <template v-slot:actions>
                <v-btn color="white" variant="flat" @click="snackbar3 = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar location="top" color="red" v-model="snackbar2" timeout="3000">
            Oops wrong email or password
            <template v-slot:actions>
                <v-btn color="white" variant="flat" @click="snackbar2 = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>

        <v-snackbar location="top" color="#00AAA2" v-model="snackbar" timeout="100000">
            Your code is 777
            <template v-slot:actions>
                <v-btn color="white" variant="flat" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>


        <div class="form">
            <h1>Login</h1>
            <p class="error">{{ error.eMail }}</p>
            <p class="error">{{ error.Password }}</p>
            <form>
                <v-text-field label="E-mail" input type="text" v-model="eMail" bg-color="#fff"></v-text-field>
                <v-text-field label="Password" type="password" required v-model="Password" bg-color="#fff">
                </v-text-field>
                <v-btn flat color="#00AAA2" class="text-white" v-on:click="login">Login
                </v-btn>
            </form>
        </div>

        <div class="bot"></div>
        <div class="bot2"></div>
    </main>
</template>

color="#fff"

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            error: {
                eMail: '',
                Password: '',
                mobNumber: '',
            },
            dialog: false,
            snackbar: false,
            snackbar2: false,
            snackbar3: false,
            eMail: '',
            Password: '',
            mobNumber: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `https://my-json-server.typicode.com/Lloyd-Aipassa/Database2/uSers?eMail=${this.eMail}&Password=${this.Password}`
            )

            if (this.eMail === '') {
                this.error.eMail = 'Please fill out your email... '
            } else { this.error.eMail = '' }

            if (this.Password === '') {
                this.error.Password = 'Please fill out you password... '
            } else { this.error.Password = '' }


            if (result.status === 200 && result.data.length > 0 && this.eMail.length && this.Password.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                // this.$router.push({ name: 'Home' })
                this.dialog = true
                this.snackbar = true
            }
            else (result.data.length === 0)
            this.snackbar2 = true
        },

        async login2() {
            let result = await axios.get(
                `https://my-json-server.typicode.com/Lloyd-Aipassa/Database2/uSers?mobNumber=${this.mobNumber}`
            )

            if (this.mobNumber === '') {
                this.error.mobNumber = 'The field is empty, please type in your verification code... '
            } else { this.error.mobNumber = '' }

            if (result.status === 200 && result.data.length > 0 && this.mobNumber.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
            }
            else (result.data.length === 0)
            this.snackbar3 = true
        }
    },

    mounted() {
        let user = localStorage.getItem('user-info')
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }

}


</script>

<style scoped>
.img {
    margin: 20px;
}


main {
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;

}

header,
footer {
    display: none;
}

.form {
    width: 100%;
    max-width: 500px;
}

.form input {
    border-bottom: 1px solid black;

}

.bot {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80vh;
    width: 100%;
    clip-path: polygon(0 90%, 100% 70%, 100% 100%, 0 100%);
    clip-path: ellipse(76% 24% at 100% 100%);
    background-color: #F0F0F1;
}

.bot2 {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80vh;
    width: 100%;
    clip-path: polygon(0 90%, 100% 70%, 100% 100%, 0 100%);
    clip-path: ellipse(53% 15% at 100% 100%);
    background-color: #00AAA2;
}



.top2 {
    position: absolute;
    top: 0;
    left: 0;
    height: 80vh;
    width: 100%;
    clip-path: ellipse(53% 15% at 0% 0%);
    background: linear-gradient(86deg, rgba(71, 94, 108, 1) 0%, rgba(20, 27, 31, 1) 60%);
}

.top {
    position: absolute;
    top: 0;
    left: 0;
    height: 80vh;
    width: 100%;
    clip-path: ellipse(76% 24% at 0% 0%);
    background-color: #00AAA2;
}

@media only screen and (max-width: 600px) {

    .img {
        margin: 20px;
        width: 120px;
    }

    .form {
        margin: 0 24px;
    }

}
</style>