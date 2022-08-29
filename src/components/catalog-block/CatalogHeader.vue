<template>
    <div class="catalog-header">
        <span class="catalog-header__count-items">{{itemLength ?? 0}} товаров</span>
        <div class="catalog-header__sort-list">
            <my-options-list
                :sortOptions="sortByInfo"
                @updateSelect="$emit('updateSelect', $event)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { PresetCatalogOptionSort } from '@/types/PresetCatalogOption';

export default defineComponent({
    props: {
        itemLength: {
            type: Number as PropType<number>
        },
        sortByInfo: {
            type: Object as PropType<PresetCatalogOptionSort>
        }
    },
    setup () {

        return {}
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.catalog-header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .catalog-header__count-items {
        color: $color-default;
        font-weight: 500;
        font-size: 12px;
        text-transform: uppercase;
    }

    .catalog-header__sort-list {

    }
}

</style>