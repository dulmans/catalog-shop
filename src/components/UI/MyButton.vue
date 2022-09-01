<template>
    <button type="button" class="default-button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'my-button'
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.default-button {
    background: $color-active;
    border-radius: 10px;
    padding: 16px 55px;
    border: none;
    cursor: pointer;
    transition: all .1s ease;
    color: $color-default;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

    @media (max-width: 400px) {
        padding: 16px 20px;
    }

    &:hover {
        opacity: .9;
    }

    &:active {
        transform: scale(.95);
    }
}

</style>