<template>
    <CatalogPage
        :presetData="presetOption"
        :catalogLists="itemsCatalogFilter"
        @switchChecked="updateFilterOption"
    />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import axios, { AxiosResponse } from 'axios';

import CatalogPage from '@/components/catalog-block/CatalogPage.vue';

import { ResponseDataCatalog, CategoryFilter } from '@/types/ResponseDataCatalog';
import { PresetCatalogOption } from '@/types/PresetCatalogOption';

export default defineComponent({
    components: {
        CatalogPage
    },
    setup () {
        const presetOption = ref<PresetCatalogOption>({
            filter: [
                {title: 'Новинки', name: 'novelty' as CategoryFilter, value: false},
                {title: 'Есть в наличии', name: 'inStock' as CategoryFilter, value: false},
                {title: 'Контрактные', name: 'contract' as CategoryFilter, value: false},
                {title: 'Эксклюзивные', name: 'exclusive' as CategoryFilter, value: false},
                {title: 'Распродажа', name: 'sales' as CategoryFilter, value: false},
            ],
            sort: [
                {title: 'Сначала дорогие', value: 'byHightPrice'},
                {title: 'Сначала недорогие', value: 'byLowPrice'},
                {title: 'Сначала популярные', value: 'byPopular'},
                {title: 'Сначала новые', value: 'byNovelty'}
            ]
        });

        const itemsCatalog = ref<ResponseDataCatalog[]>([]);

        const itemsCatalogFilter = computed(() => {
            const filterOption:CategoryFilter[] = [];
            for(const key of presetOption.value.filter){
                if(key.value){
                    filterOption.push(key.name as CategoryFilter)
                };
            };
            if(filterOption.length === 0){
                return [...itemsCatalog.value];
            };
            return [...itemsCatalog.value].filter(item => {
                for(const filter of filterOption){
                    if(item.category[filter]){
                        continue;
                    }
                    else {return false};
                };
                return true;
            });
        });

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
            updateFilterOption,
            itemsCatalogFilter
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