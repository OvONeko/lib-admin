<template>
    <div class="main">
        <div class="tables">
            <JSONTable :data="adminData" />
        </div>
    </div>
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Options, Vue } from "vue-class-component";
import JSONTable from "@/components/JSONTable.vue";
import rawData from "@/json/admin.json";

export default class Manage extends Vue {
    adminData = "";

    created(): void {
        if (!localStorage.getItem("login")) this.$router.push("/login");
        this.adminData = JSON.stringify(rawData);
    }
}
</script>

<style lang="sass">
.main
    display: inline-block
.tables
    display: inline-block
</style>
