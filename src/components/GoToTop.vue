<template>
    <div class="gotoTop" v-on:click="onClick()">↑</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class GoToTop extends Vue {
    onClick(): void {
        window.scroll(0, 0);
    }
}
</script>

<style lang="scss">
.gotoTop {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 50;
    user-select: none;
    background-color: rgba(239, 239, 245, 0.85);
    min-width: 50px;
    min-height: 50px;
    border-style: solid;
    border-color: #d9dadb;
    border-radius: 25px;
    font-size: 29px;
    text-align: center;
    box-shadow: 4px 4px 4px rgba(44, 45, 47, 0.2);
    font-size: 25px;
    transition: 0.5s;
    &:hover {
        border-color: #3052dd;
        box-shadow: 8px 8px 8px rgba(44, 45, 47, 0.6);
    }
    &::before {
        border-color: #d9dadb;
        box-shadow: none;
    }
    &::after {
        border-color: #3052dd;
        box-shadow: 8px 8px 8px rgba(44, 45, 47, 0.6);
    }
}
</style>
