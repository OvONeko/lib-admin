<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Navigation extends Vue {}
</script>

<template>
    <div class="nav">
        <div class="user">
            <img src="../assets/default.png" />
            <p>Admin</p>
        </div>
    </div>
</template>

<style lang="sass">

@import '../css/fonts.css'

.nav
    width: 100vw
    height: 60px
    background-color: #FEFEFE

.user
    text-align: right
    display: inline-block
    vertical-align: middle
    width: 6vw

img
    max-width: 40px
    max-height: 40px
    border-radius: 56562px

p
    font-size: normal
    font-family: 'Consolas'
</style>
