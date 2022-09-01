<template>
    <transition-group
        name="flip-list"
        tag="div"
        class="catalog__items-contain"
    >
        <product-item
            v-for="prod in prodLists"
            :key="prod.id"
            :prodItem="prod"
            @addNewItem="$emit('addNewBasketItem', $event)"
        />
    </transition-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import ProductItem from '@/components/catalog-block/ProductItem.vue';

import { ResponseDataCatalog } from '@/types/ResponseDataCatalog';

export default defineComponent({
    components: {
        ProductItem
    },
    props: {
        /* Массив с элементами товаров каталога */
        prodLists: {
            type: Array as PropType<ResponseDataCatalog[]>
        }
    }
})
</script>

<style lang="scss" scoped>
.flip-list-move {
    transition: transform 0.5s ease-in-out;
}

.catalog__items-contain {
    display: inline-grid;
    gap: 16px 24px;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 278px);
    justify-content: space-between;

    @media (max-width: 1550px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>