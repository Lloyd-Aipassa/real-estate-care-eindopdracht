<template>
    <v-navigation-drawer v-model="drawer" temporary>
        <main class="theme">
            <v-list-item
                prepend-avatar="https://brooklynwebdesign.nl/wp-content/uploads/2022/11/6da5454b31e5ef16ac547f1736216544-1.webp"
                title="Tony Stark" class="settings">
            </v-list-item>
            <v-divider />

            <v-list density="compact" nav>
                <P>Account settings</P>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Change password" value="home"> <v-overlay
                        activator="parent" location-strategy="connected" scroll-strategy="close">
                        <v-card class="pa-2">
                            You can not change your password in the demo application.
                        </v-card>
                    </v-overlay></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="About Tony" value="about"></v-list-item>
                <v-list-item prepend-icon="mdi-brightness-4" title="Theme" @click="toggle2(!isDarkmode)"></v-list-item>
            </v-list>

            <v-checkbox class="notifi" v-model="checkbox1">
                <P>sound</P>
                <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
                    <v-card class="pa-2">
                        The sound option is not working yet
                    </v-card>
                </v-overlay>
            </v-checkbox>

            <v-checkbox class="notifi2" v-model="checkbox2">
                <P>notifications</P>
                <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close">
                    <v-card class="pa-2">
                        The notification option is not working yet
                    </v-card>
                </v-overlay>
            </v-checkbox>



        </main>
    </v-navigation-drawer>

    <v-btn class="knop theme2" @click.stop="drawer = !drawer">
        <div class="content">
            <v-icon style="color: #00AAA2;" size="70">mdi-cog</v-icon>
            <h3><span class="material-icons">settings</span></h3>
        </div>
    </v-btn>
</template>

<script>


export default {
    name: 'settingsComp',
    data() {
        return {
            drawer: false,
            isDarkmode: false,
            checkbox1: false,
            checkbox2: false,
        }
    },
    methods: {
        toggle2(dark) {
            this.isDarkmode = dark
            document.documentElement.className = dark
            localStorage.setItem('theme', dark)
        },
    },
}
</script>

<style scoped>
.settings {
    font-family: 'Agency FB', sans-serif;
    font-size: 18px;
}

.knop {
    width: 100%;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    height: 100%;
}

.divider {
    margin: 20px 130px;
}

.notifi {
    padding-left: 40px;
    text-align: left;
    margin-top: -10px;
    margin-bottom: -30px;
}

.notifi2 {
    padding-left: 60px;
    text-align: left;
}

@media only screen and (max-width: 600px) {
    main {
        padding: 0;
    }
}
</style>