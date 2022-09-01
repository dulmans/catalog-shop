<template>
    <div class="request-call">
        <a href="tel:+74952217769" class="phone-text">+7 (495) 221-77-69</a>
        <a href="#" class="action-text">Заказать звонок</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.request-call{
    display: inline-flex;
    flex-direction: column;
    margin-right: 110px;
    white-space: nowrap;

    @media (max-width: 1290px) {
        margin: 0 50px 0 20px;
    }

    @media (max-width: 960px) {
        margin: 0;
    }

    > * {
        color: $color-default;
    }
    .phone-text{
        font-weight: 500;
        font-size: 14px;
        transition: opacity .1s linear;
        &:hover{
            opacity: .8;
        }
    }
    .action-text{
        opacity: .3;
        max-width: max-content;
        transition: all .08s ease;
        &:hover{
            opacity: .6;
            color: $color-active;
        }
    }
}
</style>