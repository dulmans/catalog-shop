<template>
    <div class="catalog-page">
        <aside class="aside__filter-bar">
            <filter-items
                :itemLists="presetData?.filter"
                @updateCheckbox="$emit('switchChecked', $event)"
            />
        </aside>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import FilterItems from '@/components/FilterItems.vue';

import {PresetCatalogOption} from '@/types/PresetCatalogOption';
import ResponseDataCatalog from '@/types/ResponseDataCatalog';


export default defineComponent({
    components: { FilterItems },
    props: {
        presetData: {
            type: Object as PropType<PresetCatalogOption>,
            requared: true
        },
        catalogLists: {
            type: Array as PropType<ResponseDataCatalog[]>
        }
    },
    setup(props) {

        return {};
    },
})
</script>

<style scoped>

</style>