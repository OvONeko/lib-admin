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
    <div></div>
    <div class="sidebar">
        <div style="height: 2.5vh"></div>
        <div class="header">
            <div class="ht">
                <img class="image" src="../assets/logo.svg" />
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
    background-color: rgba(244, 245, 246, 0.75)
    color: #303540
    font-size: large
    display: inline-block

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

.image
    display: inline-block
    max-height: 25px
    max-width: 25px
</style>

<style lang="scss">
a {
    height: 40px;
    display: block;
    color: #304050;
    text-decoration: none;
    text-wrap: pretty;
    text-align: left;
    text-indent: 20px;
    transition: all 0.4s ease-in-out 0s;
    &:hover {
        box-shadow: inset 300px 0 0 0 rgba(65, 185, 131, 0.4);
    }
}
</style>
