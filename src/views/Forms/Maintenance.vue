<template>
    <main class="theme">
        <addMaintenance />
    </main>
</template>

<script>
import addMaintenance from '@/components/addMaintenance.vue'
export default {
    components: {
        addMaintenance
    },
}
</script>

<style scoped>
main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 86vh;
    padding-bottom: 10vh;
}

@media only screen and (max-width: 600px) {

    main {
        min-height: 82vh;
        padding-bottom: 10vh;
    }
}
</style>