<template>
    <div class="basket-item">
        <span>0</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
        font-weight: 500;
        font-size: 12px;
    }
}
</style>