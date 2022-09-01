<template>
    <h2 class="page-title container-one">Краски</h2>
    <CatalogPage
        :presetData="presetOption"
        :catalogLists="itemsCatalogFilterSort"
        @switchChecked="updateFilterOption"
        @updateSelect="updateSelectSort"
        @addNewItem="$emit('addNewBasketItem', $event)"
    />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import axios, { AxiosResponse } from 'axios';

import CatalogPage from '@/components/catalog-block/CatalogPage.vue';

import { ResponseDataCatalog, CategoryFilter } from '@/types/ResponseDataCatalog';
import { PresetCatalogOption, ValueSortLists } from '@/types/PresetCatalogOption';

export default defineComponent({
    components: {
        CatalogPage
    },
    setup() {
        /* Хранит элементы сортировки и элементы фильтрации товаров */
        const presetOption = ref<PresetCatalogOption>({
            filter: [
                { title: 'Новинки', name: 'novelty' as CategoryFilter, value: false },
                { title: 'Есть в наличии', name: 'inStock' as CategoryFilter, value: false },
                { title: 'Контрактные', name: 'contract' as CategoryFilter, value: false },
                { title: 'Эксклюзивные', name: 'exclusive' as CategoryFilter, value: false },
                { title: 'Распродажа', name: 'sales' as CategoryFilter, value: false }
            ],
            sort: {
                lists: [
                    { title: 'Сначала дорогие', value: 'byHightPrice' },
                    { title: 'Сначала недорогие', value: 'byLowPrice' },
                    { title: 'Сначала популярные', value: 'byPopular' },
                    { title: 'Сначала новые', value: 'byNovelty' }
                ],
                currentValue: 'byHightPrice'
            }
        });

        /* Массив с элементами каталога */
        const itemsCatalog = ref<ResponseDataCatalog[]>([]);



        /* Возвращает массив с отфильтрованными элементами каталога */
        const itemsCatalogFilter = computed(():ResponseDataCatalog[] => {
            const filterOption: CategoryFilter[] = [];
            for (const key of presetOption.value.filter) {
                if (key.value) {
                    filterOption.push(key.name as CategoryFilter);
                };
            };
            if (filterOption.length === 0) {
                return [...itemsCatalog.value];
            };
            return [...itemsCatalog.value].filter(item => {
                for (const filter of filterOption) {
                    if (item.category[filter]) continue;
                    else return false ;
                };
                return true;
            });
        });

        /* Возвращает массив с отфильтрованными И отсортированными элементами каталога */
        const itemsCatalogFilterSort = computed(():ResponseDataCatalog[] => {
            const currentSort:ValueSortLists = presetOption.value.sort.currentValue;
            let result = [];
            switch (currentSort) {
                case 'byHightPrice':
                    result = [...itemsCatalogFilter.value].sort((a, b) =>
                                Number(b.mainInfo.price) - Number(a.mainInfo.price));
                    break;
                case 'byLowPrice':
                    result = [...itemsCatalogFilter.value].sort((a, b) =>
                                Number(a.mainInfo.price) - Number(b.mainInfo.price));
                    break;
                case 'byNovelty':
                    result = [...itemsCatalogFilter.value].sort((a, b) =>
                                Number(b.category.novelty) - Number(a.category.novelty));
                    break;
                default:
                    result = [...itemsCatalogFilter.value].sort((a, b) =>
                                Number(b.category.sales) - Number(a.category.sales));
            };
            return result;
        });

        /* Обновляет значения фильтров */
        const updateFilterOption = (event: number): void => {
            presetOption.value.filter[event].value = !(presetOption.value.filter[event].value);
            return;
        };

        /* Обновляет значение сортировки */
        const updateSelectSort = (event: ValueSortLists): void => {
            presetOption.value.sort.currentValue = event;
            return;
        };

        /* Делает API-запрос и возвращает полученный массив элементов */
        const getDataCatalog = async (): Promise<ResponseDataCatalog[]> => {
            const response: AxiosResponse = await axios.get('https://6304a3c8761a3bce77ec52e3.mockapi.io/api/v1/products');
            return response?.data ?? [];
        };

        return {
            presetOption,
            getDataCatalog,
            itemsCatalog,
            updateFilterOption,
            itemsCatalogFilter,
            updateSelectSort,
            itemsCatalogFilterSort
        };
    },
    mounted() {
        /* При загрузке страницы, вызывает функцию API-запроса и присваивает полученное значение переменной элементов каталога */
        const setItemsCatalog = async (): Promise<void> => {
            this.itemsCatalog = await this.getDataCatalog();
            return;
        };
        setItemsCatalog();
    }
})
</script>

<style lang="scss" scoped>
.page-title {
    @media (min-width: 960px) {
        display: none;
    }
}
</style>