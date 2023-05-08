<template>
  <v-app>
    <theme/>
    <Header v-show="$route.name !== 'Login'" />
      <router-view />
    <Footer v-show="$route.name !== 'Login'" />
  </v-app>

</template>

<script>
// Components
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Theme from '@/components/Theme.vue';

export default {
  name: 'App',

  data() {
    return {
      darkMode: true
    }
  },

  components: {
    Footer,
    Header,
    Theme
  },

  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'Login' })
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;900&display=swap');
@import url('https://fonts.cdnfonts.com/css/agency-fb');
@import '@/Styles/dark.css';
@import '@/Styles/light.css';

body{
  background-color: #F0F0F1;
}

.knop{
  background-color: #fff;
}



.theme {
  background-color: var(--bg);
  color: var(--text)!important;
}

.theme a {
  background-color: var(--bgGrey);
  color: var(--text);
}

.theme2 {
  background-color: var(--bgGrey) !important;
  color: var(--text) !important;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Agency FB', sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

p {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
}

input[type=date] {
  border: none;
  border-bottom: 1px solid rgba(133, 133, 133, 0.527);
  color: #7a7a7ab0;
  font-size: 16px;
  padding: 20px 0;
  border-radius: 4px;
  width: 100%;
  border-radius: 0;
}

input[type=date]:hover {
  background-color: #7a7a7a1a;
}

input[type=date]:focus-visible {
  border: none;
  border-bottom: 1px solid #555;
}


input[type=button],
input[type=submit],
input[type=reset] {
  background-color: #00AAA2;
  border: none;
  color: white;
  padding: 12px 32px;
  text-decoration: none;
  margin: 4px 0px;
  cursor: pointer;
  border-radius: 50px;
  width: 40%;
}

label {
  color: #7a7a7ab0;
}

.v-application__wrap {
    min-height: 0vh !important;
  }

@media screen and (max-width: 600px) {

  input[type=button],
  input[type=submit],
  input[type=reset] {
    width: 100%;
  }

  .form {
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
}
</style>