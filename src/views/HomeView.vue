<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeView extends Vue {
    mounted(): void {
        this.$router.push("/login");
    }
}
</script>

<template></template>

<style lang="sass"></style>
