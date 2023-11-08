<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Options, Vue } from "vue-class-component";
import JSONTable from "@/components/JSONTable.vue";
import rawData from "@/json/user.json";

export default class User extends Vue {
    userData = "";

    created(): void {
        this.userData = JSON.stringify(rawData);
    }
}
</script>

<template>
    <div class="main">
        <div class="tables">
            <JSONTable :data="userData" />
        </div>
    </div>
</template>

<style lang="sass"></style>
