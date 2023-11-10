<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { Options, Vue } from "vue-class-component";
import JSONTable from "@/components/JSONTable.vue";
import rawData from "@/json/book.json";

export default class Book extends Vue {
    bookData = "";

    created(): void {
        if (!localStorage.getItem("login")) this.$router.push("/login");
        this.bookData = JSON.stringify(rawData);
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
