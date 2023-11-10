<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Navigation extends Vue {}
</script>

<template>
    <div class="nav">
        <div class="user">
            <p class="us">Admin</p>
            <img class="avatar" src="../assets/default.png" />
        </div>
    </div>
</template>

<style lang="sass">

@import '../css/fonts.css'

.nav
    display: block
    position: fixed
    width: calc(100vw - 240px)
    height: 50px
    right: 0px
    top: 0px
    background-color: rgba(240, 241, 242, 0.75)

.user
    text-align: right
    display: inline-block
    vertical-align: middle
    width: 16vw
    position: fixed
    right: 30px

.avatar
    display: inline-flex
    max-width: 40px
    max-height: 40px
    border-radius: 56562px
    position: absolute
    top: 5px
    right: 0px

.us
    display: inline-flex
    font-size: x-large
    font-family: 'Consolas'
    text-align: center
    position: absolute
    top: 10px
    right: 45px
</style>
