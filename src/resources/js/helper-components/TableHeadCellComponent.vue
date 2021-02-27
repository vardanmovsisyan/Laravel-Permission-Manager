<template>
    <th 
        class="root"
        :class="`text-${align}`"
        :style="`width: ${width}`"
    >
        <slot></slot>
    </th>
</template>

<script>
    export default {
        name: "TableHeadCellComponent",
        props: {
            width: { 
                type: string,
                default: "inherit"
            },
            align: {
                type: string,
                default: "left",
            },
        },
        data() {
            return {
                isActive: false
            };
        },
        mounted() {
            this.isActive = this.selected;
        }
    }
</script>

<style scoped>
    .text-left{
        text-align: left;
    }
    .text-center{
        text-align: center;
    }
    .text-right{
        text-align: right;
    }
</style>