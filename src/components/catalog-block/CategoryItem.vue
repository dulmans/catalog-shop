<template>
    <span class="category-item">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.category-item {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 500;
    color: $color-default;
    padding: 2px 8px;
    border-radius: 20px;
    background: rgb(105, 105, 105, .5);

    @media (max-width: 800px) {
        font-size: 10px;
        padding: 2px 5px;
    }
}
</style>