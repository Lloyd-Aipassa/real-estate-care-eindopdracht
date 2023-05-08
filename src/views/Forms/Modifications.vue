<template>
    <main class="theme">
        <addModifications />
    </main>
</template>

<script>
import addModifications from '@/components/addModifications.vue'
export default {
    components: {
        addModifications
    },
}
</script>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 86vh;
    justify-content: center;
    padding-bottom: 10vh;
}

@media only screen and (max-width: 600px) {

    main {
        min-height: 82vh;
        padding-bottom: 10vh;
    }
}
</style>