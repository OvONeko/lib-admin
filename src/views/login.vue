<template></template>

<script lang="ts">
import Swal from "sweetalert2";
import { Vue } from "vue-class-component";

export default class Login extends Vue {
    mounted(): void {
        Swal.fire({
            title: "管理员统一登录",
            text: "用户名",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "确认",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "管理员统一登录",
                    text: "密码",
                    input: "password",
                    inputAttributes: {
                        autocapitalize: "off",
                    },
                    showCancelButton: true,
                    confirmButtonText: "确认",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            text: "登录成功",
                            timer: 2000,
                            timerProgressBar: true,
                            showConfirmButton: false,
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                                this.$router.push("/admin/manage");
                                localStorage.setItem("login", "success");
                            }
                        });
                    } else this.$router.push("/");
                });
            } else this.$router.push("/");
        });
    }
}
</script>

<style lang="sass"></style>
