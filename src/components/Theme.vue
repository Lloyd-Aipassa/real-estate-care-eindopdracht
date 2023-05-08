<template></template>
<script>
export default {
    created() {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem('theme', false)
    }
  },
    methods: {
        getLocalstorage: function () {
            const getLocal = localStorage.getItem("theme")

            if (getLocal === "false") {
                this.isDarkmode = false
              
                document.documentElement.className = false
            }
            if (getLocal === "true") {
                this.isDarkmode = true
            
                document.documentElement.className = true
            }
        }
    },
    beforeMount() {
        this.getLocalstorage()
    },
}
//test
</script>