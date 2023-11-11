<template>
    <div class="placeholder"></div>
    <div v-html="inner" id="table" class="table"></div>
    <div class="searchBox">
        <div class="searchbar">
            <input
                v-model="textValue"
                v-on:keypress="keyDown($event.key)"
                class="search"
            />
            <button v-on:click="search()" class="searchButton">🔍</button>
        </div>
        <p class="count" v-text="count"></p>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";

interface Item {
    title: String;
    description: String;
    button1: String;
    button2: String;
}

export default class JSONTable extends Vue {
    @Prop({ required: true }) data!: string;

    inner = "";
    textValue = "";
    count = "";

    mounted(): void {
        if (!this.data) return;
        const items = JSON.parse(this.data) as Item[];
        var i = 0;
        while (i < items.length) {
            var e = items[i];
            this.inner += `<div>
                <div class="item">
                    <div class="text">
                        <p class="title">
                            <b>${e.title}</b>
                        </p>
                        <p class="description">${e.description}</p>
                    </div>
                    <div class="buttons">
                        <button class="button1">${e.button1}</button>
                        <button class="button2">${e.button2}</button>
                    </div>
                </div>
            </div>`;
            i = i + 1;
        }
        this.count = items.length + " items";
    }

    keyDown(key: string): void {
        console.log(this.textValue);
        if (key == "Enter") this.search();
    }

    search(): void {
        const items = JSON.parse(this.data) as Item[];
        var i = 0;
        var n = 0;
        this.inner = "";
        while (i < items.length) {
            var e = items[i];
            if (
                e.title.includes(this.textValue) ||
                e.description.includes(this.textValue)
            ) {
                this.inner += `
                <div>
                    <div class="item">
                        <div class="text">
                            <p class="title">
                                <b>${e.title}</b>
                            </p>
                            <p class="description">${e.description}</p>
                        </div>
                        <div class="buttons">
                            <button class="button1">${e.button1}</button>
                            <button class="button2">${e.button2}</button>
                        </div>
                    </div>
                </div>`;
                n++;
            }
            i++;
        }
        this.count = n + " items";
    }
}
</script>

<style lang="sass">

.placeholder
    display: block
    height: 55px

.table
    width: calc(100vw - 330px)
    max-width: calc(100vw - 330px)
    display: flex
    position: inherit
    flex-wrap: wrap

.item
    display: flexbox
    min-height: 10.5vh
    width: calc(50vw - 200px)
    text-decoration: none
    border-color: rgba(178, 179, 180, 0.5)
    border-width: 3px
    border-radius: 20px
    border-style: solid
    margin-left: 15px
    margin-top: 15px
    background-color: rgb(249, 249, 249, 0.75)

.item:hover
    border-color: rgba(48, 82, 221, 0.5)
    box-shadow: 5px 3px 3px rgba(21, 22, 23, 0.5)

.text
    display: inline
    font-family: 'Consolas'
    word-wrap: break-word
    text-indent: 20px

.title
    font-size: x-large

.description
    font-size: x-small

.buttons
    display: inline
    width: 150px
    margin-right: 0
    margin-left: 40px
    margin-bottom: 10px

.button1
    display: inline-flex
    gap: 20px
    color: #FFFFFF
    background-color: #3052DD
    min-height: 25px
    min-width: 50px
    text-align: center
    vertical-align: middle
    border-radius: 5px
    border-style: none
    font-size: large

.button1:hover
    background-color: #2642b1

.button1:active
    background-color: #1e368d

.button2
    display: inline-flex
    gap: 20px
    color: #FFFFFF
    background-color: #DD0000
    min-height: 25px
    min-width: 50px
    text-align: center
    vertical-align: middle
    border-radius: 5px
    border-style: none
    font-size: large

.button2:hover
    background-color: #AA0000

.button2:active
    background-color: #770000

.searchBox
    display: block
    position: fixed
    left: 0px
    bottom: 25px

.searchbar
    display: flex
    gap: 5px
    width: 180px
    max-width: 180px
    height: 25px

.search
    display: inline-flex
    height: 25px
    max-height: 25px
    width: 180px
    border-style: solid
    border-color: rgba(0, 0, 0, 0.25)
    border-width: 1px
    border-radius: 10px
    background-color: rgba(255, 255, 255, 0.5)
    margin-left: 15px

.search:hover
    background-color: rgba(255, 255, 255, 0.75)

.searchButton
    display: inline-flex
    width: 30px
    height: 25px
    text-align: center
    border-style: solid
    border-width: 0.5px
    border-color: rgba(0, 0, 0, 0.25)
    border-radius: 10px
    font-size: large

.count
    font-size: x-small
    display: block
    margin-left: 15px
    margin-bottom: 0
    margin-top: 5px
    max-height: 5px
</style>

<style lang="scss">
.search:focus-visible,
.search:active {
    background-color: rgba(255, 255, 255, 0.8);
    border-style: none;
    border-color: transparent;
}
</style>
