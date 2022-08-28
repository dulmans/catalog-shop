<template>
    <CatalogPage
        :presetData="presetOption"
        :catalogLists="itemsCatalog"
        @switchChecked="updateFilterOption"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios, { AxiosResponse } from 'axios';

import CatalogPage from '@/components/catalog-block/CatalogPage.vue';

import ResponseDataCatalog from '@/types/ResponseDataCatalog';
import {PresetCatalogOption} from '@/types/PresetCatalogOption';

export default defineComponent({
    components: {
        CatalogPage
    },
    setup () {
        const presetOption = ref<PresetCatalogOption>({
            filter: [
                {title: 'Новинки', name: 'novelty', value: false},
                {title: 'Есть в наличии', name: 'inStock', value: false},
                {title: 'Контрактные', name: 'contract', value: false},
                {title: 'Эксклюзивные', name: 'exclusive', value: false},
                {title: 'Распродажа', name: 'sales', value: false},
            ],
            sort: [
                {title: 'Сначала дорогие', value: 'byHightPrice', checked: true},
                {title: 'Сначала недорогие', value: 'byLowPrice'},
                {title: 'Сначала популярные', value: 'byPopular'},
                {title: 'Сначала новые', value: 'byNovelty'}
            ]
        });

        const itemsCatalog = ref<ResponseDataCatalog[]>([]);

        const getDataCatalog = async ():Promise<ResponseDataCatalog[]> => {
            const response:AxiosResponse = await axios.get('https://6304a3c8761a3bce77ec52e3.mockapi.io/api/v1/products');
            return response?.data;
        };

        const updateFilterOption = (event:number) => {
            presetOption.value.filter[event].value = !(presetOption.value.filter[event].value);
        }

        return {
            presetOption,
            getDataCatalog,
            itemsCatalog,
            updateFilterOption
        }
    },
    mounted() {
        const setItemsCatalog = async ():Promise<void> => {
            this.itemsCatalog = await this.getDataCatalog();
        }
        setItemsCatalog();
    }
})
</script>

<style scoped>

</style>