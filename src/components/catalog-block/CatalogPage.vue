<template>
    <div class="catalog-page">
        <transition name="filter">
            <aside class="aside__filter-bar container-one mobile-filter" v-if="showFilterBlock" @click="showFilterBlock = false">
                <filter-items :itemLists="presetData?.filter" @updateCheckbox="$emit('switchChecked', $event)" @click.stop="" />
            </aside>
        </transition>
        <aside class="aside__filter-bar container-one">
            <filter-items :itemLists="presetData?.filter" @updateCheckbox="$emit('switchChecked', $event)" />
        </aside>

        <div class="content-group container-one">
            <div class="catalog-header__container">
                <catalog-header
                    :itemLength="catalogLists?.length"
                    :sortByInfo="presetData?.sort"
                    v-model:showFilter="showFilterBlock"
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
import { defineComponent, PropType, ref } from 'vue'

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
        const showFilterBlock = ref<boolean>(false);

        return { showFilterBlock };
    },
})
</script>

<style lang="scss">
.catalog-page {
    padding: 75px 0 30px;
    display: flex;

    @media (max-width: 960px) {
        padding-top: 0;
    }

    .aside__filter-bar {
        position: sticky;
        top: 5em;
        margin-right: 5%;
        height: max-content;
        padding-right: 0;
        display: block;

        @media (min-width: 960px) {
            &.mobile-filter {
                display: none
            }
        }

        @media (max-width: 960px) {
            position: fixed;
            top: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .7);

            &:not(.mobile-filter) {
                display: none;
            }

            &.container-one {
                padding: 0;
            }
        }
    }

    .content-group {
        display: inline-flex;
        flex-direction: column;
        flex-grow: 1;

        @media (min-width: 960px) {
            padding-left: 0;
        }

        .catalog-header__container {
            grid-area: headerCatalog;
            margin-bottom: 40px;
        }
        .catalog-lists {
            grid-area: mainCatalog;
        }
    }
}

.filter-enter-active,
.filter-leave-active {
    transition: all 0.3s ease;
}

.filter-enter-from,
.filter-leave-to {
    transform: translateY(100%);
}
</style>