<template>
    <div class="addButton" v-on:click="onClick()">+</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import postData from '@/logic/postData';
import {nameRouting, type NameRouting} from '@/logic/constants'
import Swal from "sweetalert2";

interface RQ {
    title: string,
    description: string,
    type: string
}

export default class AddButton extends Vue {
    static title = "";
    static description = "";
    static rt = {} as NameRouting;

    onClick(): void {
        console.log(this.$route.path);
        var i = 0;
        while (i < 3) {
            i = i + 1;
            AddButton.rt = nameRouting[i];
            console.log(nameRouting);
            if (this.$route.path == AddButton.rt.path) {
                Swal.fire({
                    "title": AddButton.rt.title,
                    "input": "text",
                    "inputAttributes": {
                        autocapitalize: "off"
                    },
                    showCancelButton: true,
                    showCloseButton: false,
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                    preConfirm: async (t) => {
                        AddButton.title = t;
                    }
                }).then((result) => {
                    console.log(result.value);
                    console.log(AddButton.title);
                    if (result.isConfirmed) {
                        Swal.fire({
                            "title": AddButton.rt.description,
                            "input": "text",
                            "inputAttributes": {
                                autocapitalize: "off"
                            },
                            showCancelButton: true,
                            showCloseButton: false,
                            confirmButtonText: "确认",
                            cancelButtonText: "取消",
                            preConfirm: async (t) => {
                                AddButton.description = t;
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                var rq = {} as RQ;
                                rq.title = AddButton.title;
                                rq.description = AddButton.description;
                                rq.type = AddButton.rt.name;
                                postData("add.json", JSON.stringify(rq));
                            }
                        });
                    }
                });
            }
        }
    }
}
</script>

<style lang="scss">
.addButton {
    position: fixed;
    bottom: 110px;
    right: 40px;
    z-index: 50;
    user-select: none;
    background-color: rgba(239, 239, 245, 0.85);
    min-width: 50px;
    min-height: 50px;
    border-style: solid;
    border-color: #D9DADB;
    border-radius: 25px;
    font-size: 29px;
    text-align: center;
    box-shadow: 4px 4px 4px rgba(44, 45, 47, 0.2);
    font-size: 25px;
    transition: 0.5s;
    &:hover {
        border-color: #3052DD;
        box-shadow: 8px 8px 8px rgba(44, 45, 47, 0.6);
    };
    &::before {
        border-color: #D9DADB;
        box-shadow: none;
    }
    &::after {
        border-color: #3052DD;
        box-shadow: 8px 8px 8px rgba(44, 45, 47, 0.6);
    }
}
</style>
