<template>
    <div class="catalog-page">
        <div class="catalog-header__container">
            <catalog-header
                :itemLength="catalogLists?.length"
                :sortByInfo="presetData?.sort"
                @updateSelect="$emit('updateSelect', $event)"
            />
        </div>
        <aside class="aside__filter-bar">
            <filter-items :itemLists="presetData?.filter" @updateCheckbox="$emit('switchChecked', $event)" />
        </aside>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import FilterItems from '@/components/catalog-block/FilterItems.vue';
import CatalogHeader from '@/components/catalog-block/CatalogHeader.vue';

import { PresetCatalogOption } from '@/types/PresetCatalogOption';
import { ResponseDataCatalog } from '@/types/ResponseDataCatalog';


export default defineComponent({
    components: {
        FilterItems,
        CatalogHeader
    },
    props: {
        presetData: {
            type: Object as PropType<PresetCatalogOption>,
            requared: true
        },
        catalogLists: {
            type: Array as PropType<ResponseDataCatalog[]>
        }
    },
    setup() {

        return {};
    },
})
</script>

<style lang="scss" scoped>
.catalog-page {
    padding: 75px 0 30px;
}
</style>