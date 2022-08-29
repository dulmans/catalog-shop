<template>
    <select
        v-model="selected"
        @change="$emit('updateSelect', selected)"
    >
        <option
            v-for="(optionItem, index) in sortOptions?.lists"
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
        sortOptions: {
            type: Object as PropType<PresetCatalogOptionSort>,
            requared: true
        }
    },
    setup (props) {
        const selected = ref(props?.sortOptions?.currentValue);

        return {selected}
    }
})
</script>

<style lang="scss" scoped>

</style>