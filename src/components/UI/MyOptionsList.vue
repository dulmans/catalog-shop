<template>
    <select
        v-model="selected"
        @change="updt"
    >
        <option
            v-for="(optionItem, index) in optionLists"
            :key="index"
            :value="optionItem.value"
        >
            {{optionItem.title}}
        </option>
    </select>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { PresetCatalogOptionSort } from '@/types/PresetCatalogOption';

export default defineComponent({
    name: 'my-options-list',
    props: {
        optionLists: {
            type: Array as PropType<PresetCatalogOptionSort[]>,
            requared: true
        }
    },
    setup (props) {
        const selected = ref(props?.optionLists ? props?.optionLists[0].value : '')
        const updt = () => {
            console.log(selected.value);
            /* !!!
                ПОДНЯТЬ selected НАВЕРХ, ЗАСТИЛИТЬ СЕЛЕКТ ЛИСТ И СДЕЛАТЬ СОРТИРОВКУ МАССИВА
            */
        }

        return {selected, updt}
    }
})
</script>

<style lang="scss" scoped>

</style>