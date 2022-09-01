<template>
    <div class="filter-items__container">
        <div
            class="filter-checkbox__item"
            v-for="(filterItem, index) in itemLists"
            :key="index"
        >
            <my-checkbox-button
                :checkboxItem="filterItem"
                @switchChecked="$emit('updateCheckbox', index)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { PresetCatalogOptionFilter } from '@/types/PresetCatalogOption';

export default defineComponent({
    props: {
        /* Массив с элементами фильтров */
        itemLists: {
            type: Array as PropType<PresetCatalogOptionFilter[]>
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.filter-items__container {
    display: inline-flex;
    flex-direction: column;

    @media (max-width: 960px) {
        padding-top: 12px;
        padding-left: 24px;
        position: absolute;
        width: 100%;
        height: 60%;
        bottom: 0;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
        background: #fff;

        &>*:first-child {
            margin-top: 38px;
        }

        &::before {
            content: '';
            position: absolute;
            width: 28px;
            height: 4px;
            background: rgba($color-default, .6);
            left: calc(50% - 14px);
        }
    }

    >.filter-checkbox__item {
        display: inline-block;

        &:not(:last-child) {
            margin-bottom: 8px;
        }
    }
}
</style>