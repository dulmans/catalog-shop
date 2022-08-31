<template>
    <transition-group name="flip-list" tag="div" class="catalog__items-contain">
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
        prodLists: {
            type: Array as PropType<ResponseDataCatalog[]>,
            required: true
        }
    },
    setup () {


        return {}
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
    grid-template-columns: repeat(5, 1fr);
}
</style>