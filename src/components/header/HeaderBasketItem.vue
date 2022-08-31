<template>
    <div class="basket-item">
        <span v-if="(basketTotalCount ?? 0) <= 0">0</span>
        <span v-else-if="(basketTotalCount ?? 0) >= 100">99</span>
        <span v-else>{{basketTotalCount}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        basketTotalCount: {
            type: Number as PropType<number>
        }
    },
    setup () {


        return {}
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.basket-item{
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-active;
    border-radius: 50%;
    span{
        color: $color-default;
        font-weight: 600;
        font-size: 12px;
    }
}
</style>