<script lang="tsx">
import * as Vue from "vue";
import { computed, defineComponent, h } from "vue";
import TableItem from "./TableItem.vue";

interface Item {
    title: String;
    description: String;
    button1: String;
    button2: String;
}

export default defineComponent({
    name: "JSONTable",
    props: {
        data: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        if (!props.data) return null;
        const items = JSON.parse(props.data) as Item[];
        var inner = "";
        items.forEach(function (e, i) {
            inner += (
                <TableItem
                    title={e.title as string}
                    description={e.description as string}
                    button1={e.button1 as string}
                    button2={e.button2 as string}
                ></TableItem>
            );
        });
        return () => <div class="table">{inner}</div>;
    },
});
</script>

<style lang="sass">

.table
    width: calc(100vw - 270px)
    display: inline-block
</style>
