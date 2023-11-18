<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import GoToTop from "./components/GoToTop.vue";
import Navigation from "@/components/Navigation.vue";
import AddButton from "@/components/AddButton.vue";
</script>

<template>
    <Sidebar />
    <Navigation />
    <GoToTop />
    <AddButton />
</template>

<style lang="sass">

@import './css/fonts.css'

#app
    font-family: 'LXGW_WenKai', Arial, Helvetica, sans-serif
    min-height: 100vh
    min-width: 100vw
    margin: auto
    background: linear-gradient(to left bottom, #cffcf8, #fccfd7)
    background-attachment: fixed
</style>
