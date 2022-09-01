<template>
    <div class="catalog-header">
        <div v-if="darkFocus" class="dark-focus-bg"></div>
        <span class="catalog-header__count-items filter-text" @click="$emit('update:showFilter', true)">Фильтры</span>
        <span class="catalog-header__count-items">{{itemLength ?? 0}} товаров</span>
        <div class="catalog-header__sort-list">
            <my-options-list
                :sortOptions="sortByInfo"
                @updateSelect="$emit('updateSelect', $event)"
                v-model:focusControl="darkFocus"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { PresetCatalogOptionSort } from '@/types/PresetCatalogOption';

export default defineComponent({
    props: {
        itemLength: {
            type: Number as PropType<number>
        },
        sortByInfo: {
            type: Object as PropType<PresetCatalogOptionSort>
        },
        showFilter: {
            type: Boolean as PropType<Boolean>
        }
    },
    setup () {
        const darkFocus = ref<boolean>(false);

        return { darkFocus }
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.catalog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .catalog-header__sort-list {
        font-size: 0;
    }

    .catalog-header__count-items {
        color: $color-default;
        font-weight: 500;
        font-size: 12px;
        text-transform: uppercase;
        display: none;

        @media (min-width: 960px) {
            &:not(.filter-text) {
                display: inline-block
            }
        }

        @media (max-width: 960px) {
            &.filter-text {
                display: inline-block;
            }
        }
    }
}

</style>