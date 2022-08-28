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
import { defineComponent, PropType } from 'vue'

import {PresetCatalogOptionFilter} from '@/types/PresetCatalogOption';

export default defineComponent({
    props: {
        itemLists: {
            type: Array as PropType<PresetCatalogOptionFilter[]>
        }
    },
    setup () {


        return {}
    }
})
</script>

<style lang="scss" scoped>
.filter-items__container {
    display: inline-flex;
    flex-direction: column;

    > .filter-checkbox__item {
        display: inline-block;

        &:not(:last-child){
            margin-bottom: 8px;
        }
    }
}
</style>