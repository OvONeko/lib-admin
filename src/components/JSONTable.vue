<template>
    <div v-html="inner" id="table" class="table"></div>
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

    mounted(): void {
        if (!this.data) return;
        const items = JSON.parse(this.data) as Item[];
        console.log(items);
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
    }
}
</script>

<style lang="sass">

.table
    width: calc(100vw - 370px)
    display: inline-block

.item
    display: block
    min-height: 5vh
    width: calc(100vw - 400px)
    border-color: #1D1E1F
    border-width: 1.5px
    border-radius: 20px
    border-style: double
    margin-left: 15px
    margin-top: 30px
    background-color: rgb(249, 249, 249)

.item:hover
    border-color: #3052DD
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

.button1
    display: inline-flex
    gap: 20px
    color: #FFFFFF
    background-color: #3052DD
    min-height: 30px
    min-width: 60px
    text-align: center
    vertical-align: middle
    border-radius: 10px
    font-size: large

.button2
    display: inline-flex
    gap: 20px
    color: #FFFFFF
    background-color: #DD0000
    min-height: 30px
    min-width: 60px
    text-align: center
    vertical-align: middle
    border-radius: 10px
    font-size: large
</style>
