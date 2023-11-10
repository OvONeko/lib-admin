<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { Options, Vue } from "vue-class-component";

export default class Sidebar extends Vue {
    valid = true;

    created(): void {
        localStorage.setItem("last", this.$route.path);
    }
}
</script>

<template>
    <div class="sidebar">
        <div style="height: 2.5vh"></div>
        <div class="header">
            <div class="ht">
                <img src="../assets/logo.svg" />
                <b>Library Admin</b>
            </div>
        </div>
        <div style="height: 2.5vh"></div>
        <div>
            <RouterLink v-if="valid" to="/admin/manage">管理员设置</RouterLink>
            <RouterLink v-if="valid" to="/admin/user">读者管理</RouterLink>
            <RouterLink v-if="valid" to="/admin/book">图书管理</RouterLink>
        </div>
    </div>
    <RouterView />
</template>

<style lang="sass">

@import '../css/color'

.sidebar
    height: 100%
    width: 240px
    position: fixed
    left: 0px
    background-color: #F4F5F6
    color: #303540
    font-size: large
    display: inline-block

a
    height: 40px
    display: block
    color: #304050
    text-decoration: none
    vertical-align: middle
    text-align: left
    text-indent: 20px

.header
    display: block
    max-height: 60px
    background: transparent

.ht
    display: block
    font-size: x-large
    overflow: hidden
    width: 100%
    text-align: center

img
    display: inline-block
    max-height: 25px
    max-width: 25px
</style>
