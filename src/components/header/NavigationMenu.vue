<template>
    <nav class="menu-items">
        <navigation-item href="#">Продукты</navigation-item>
        <navigation-item href="#">Цвета</navigation-item>
        <navigation-item href="#">Вдохновение</navigation-item>
        <navigation-item href="#">Советы</navigation-item>
        <navigation-item href="#">Найти магазин</navigation-item>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationItem from '@/components/header/NavigationItem.vue';

export default defineComponent({
    setup() {
        return {};
    },
    components: { NavigationItem }
})
</script>

<style lang="scss" scoped>
.menu-items{
    display: flex;
    gap: 10px 24px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>