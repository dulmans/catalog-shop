<template>
    <a class="menu-item">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.menu-item {
    text-decoration: none;
    color: $color-default;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    transition: all .1s ease;
    display: inline-block;

    &:hover {
        opacity: .95;
        color: $color-active;
    }
}
</style>