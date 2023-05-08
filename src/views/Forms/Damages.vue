<template>
    <main class="theme">
        <AddSchade />
    </main>
</template>

<script>
import AddSchade from '@/components/AddSchade.vue'
export default {
    components: {
        AddSchade
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