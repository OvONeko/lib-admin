<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Navigation extends Vue {}
</script>

<template>
    <div class="nav">
        <div class="user">
            <p>Admin</p>
            <img src="../assets/default.png" />
        </div>
    </div>
</template>

<style lang="sass">

@import '../css/fonts.css'

.nav
    display: block
    position: fixed
    width: calc(100vw - 300px)
    height: 60px
    right: 0px
    top: 0px
    background-color: #E0E1E2

.user
    text-align: right
    display: inline-block
    vertical-align: middle
    width: 6vw

img
    display: inline-block
    max-width: 40px
    max-height: 40px
    border-radius: 56562px

p
    display: inline-block
    font-size: x-large
    font-family: 'Consolas'
</style>
