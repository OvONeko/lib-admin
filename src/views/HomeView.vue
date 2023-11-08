<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeView extends Vue {
    mounted(): void {
        if (!localStorage.getItem("login"))
            this.$router.push("/login");
        else 
            this.$router.push("/admin/book")
    }
}
</script>

<template></template>

<style lang="sass"></style>
