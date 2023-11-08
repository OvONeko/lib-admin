<script lang="tsx">
import * as Vue from "vue";
import { computed, defineComponent, h } from "vue";

export default defineComponent({
    name: "TableItem",
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        button1: {
            type: String,
            required: true,
        },
        button2: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const renderFunction = computed(() => {
            if (!props.title) return null;
            if (!props.description) return null;
            if (!props.button1) return null;
            if (!props.button2) return null;

            const module = new Function(
                "exports",
                "Vue",
                props.title,
                props.description,
                props.button1,
                props.button2,
            );
            const exports: any = {};
            module(exports, Vue);
            return exports.default;
        });

        return () => (
            <div class="item">
                <div class="text">
                    <p class="title">
                        <b>{props.title}</b>
                    </p>
                    <p class="description">{props.description}</p>
                </div>
                <div class="buttons">
                    <button class="button1">{props.button1}</button>
                    <button class="button2">{props.button2}</button>
                </div>
            </div>
        );
    },
});
</script>

<style lang="sass">

@import "../css/fonts";

.item
    display: block
    height: 5vh
    width: calc(100vw - 300px)
    border-color: #1D1E1F
    border-width: 2px
    border-radius: 10px

.item:hover
    border-color: #3052DD
    box-shadow: 5px 3px 3px rgba(21, 22, 23, 0.5)

.text
    display: inline-block
    font-family: 'Consolas'
    word-wrap: break-word

.title
    font-size: large

.description
    font-size: small

.buttons
    display: inline-block
    width: 150px

.button1
    display: flex
    gap: 20px
    color: #FFFFFF
    background-color: #3052DD

.button2
    display: flex
    gap: 20px
    color: #FFFFFF
    background-color: #DD0000
</style>
