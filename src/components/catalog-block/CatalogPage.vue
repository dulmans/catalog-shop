<template>
    <div class="catalog-page">
        <aside class="aside__filter-bar">
            <filter-items :itemLists="presetData?.filter" @updateCheckbox="$emit('switchChecked', $event)" />
        </aside>
        <div class="content-group">
            <div class="catalog-header__container">
                <catalog-header
                    :itemLength="catalogLists?.length"
                    :sortByInfo="presetData?.sort"
                    @updateSelect="$emit('updateSelect', $event)"
                />
            </div>
            <div class="catalog-lists">
                <catalog-lists
                    :prodLists="catalogLists ?? []"
                    @addNewBasketItem="$emit('addNewItem', $event)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import FilterItems from '@/components/catalog-block/FilterItems.vue';
import CatalogHeader from '@/components/catalog-block/CatalogHeader.vue';
import CatalogLists from '@/components/catalog-block/CatalogLists.vue';

import { PresetCatalogOption } from '@/types/PresetCatalogOption';
import { ResponseDataCatalog } from '@/types/ResponseDataCatalog';


export default defineComponent({
    components: {
        FilterItems,
        CatalogHeader,
        CatalogLists
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
    display: flex;

    .aside__filter-bar {
        position: sticky;
        top: 5em;
        min-width: 305px;
        height: max-content;
    }

    .content-group {
        display: inline-flex;
        flex-direction: column;
        flex-grow: 1;

        .catalog-header__container {
            grid-area: headerCatalog;
            margin-bottom: 40px;
        }
        .catalog-lists {
            grid-area: mainCatalog;
        }
    }
}
</style>