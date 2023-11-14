<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Options, Vue } from "vue-class-component";
import JSONTable from "@/components/JSONTable.vue";
import getData from "@/logic/getData";

export default class Book extends Vue {
    bookData = "";

    created(): void {
        if (!localStorage.getItem("login")) this.$router.push("/login");
        this.bookData = getData("book.json");
    }
}
</script>

<template>
    <div class="main">
        <div class="tables">
            <JSONTable :data="bookData" />
        </div>
    </div>
</template>

<style lang="sass"></style>
