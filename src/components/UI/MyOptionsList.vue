<template>
    <div class="options-list">
        <label class="current-value__area item-area">
            <input
                type="checkbox"
                v-model="showOptions"
            />
            <span class="text-option__value">{{ currentIndexValue }}</span>
            <arrow-sort-icon class="current-icon" />
        </label>
        <transition name="optionsList">
            <div
                class="options-container"
                v-show="showOptions"
            >
                <label
                    v-for="(optionItem, index) in sortOptions?.lists"
                    :key="index"
                    @change="$emit('updateSelect', selected)"
                    @click="showOptions = false"
                    :class="[{ 'active-option': selected === optionItem.value }, 'option-item__area', 'item-area']"
                >
                    <input
                        type="radio"
                        name="options"
                        :value="optionItem.value"
                        v-model="selected"
                        :checked="selected === optionItem.value"
                    >
                    <span class="text-option__value">{{ optionItem.title }}</span>
                </label>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, watch } from 'vue'

import ArrowSortIcon from '@/assets/icons/ArrowSortIcon.vue';

import { PresetCatalogOptionSort } from '@/types/PresetCatalogOption';

export default defineComponent({
    name: 'my-options-list',
    components: {
        ArrowSortIcon
    },
    props: {
        /* Содержит элементы списка */
        sortOptions: {
            type: Object as PropType<PresetCatalogOptionSort>,
            requared: true
        },
        /* Отвечает за скрытие/ отображение выпадающего списка */
        focusControl: {
            type: Boolean as PropType<Boolean>
        }
    },
    emits: ['updateSelect', 'update:focusControl'],
    setup(props, { emit }) {
        /* Содержит текущее значение select */
        const selected = ref(props?.sortOptions?.currentValue);

        /* Отвечает за скрытие/ отображение выпадающего списка */
        const showOptions = ref<boolean>(false);

        /* Возвращает за текущее строчное значение selected  */
        const currentIndexValue = computed((): string => {
            for (const itemSort of (props?.sortOptions?.lists ?? [])) {
                if (itemSort.value === selected.value) {
                    return itemSort.title;
                };
            };
            return 'Отсортировать'; // в случае непредвиденной ошибки
        });

        /* Наблюдатель за функцией отображения/ скрытия списка элементов */
        watch(showOptions, () => {
            emit('update:focusControl', showOptions.value);
        });

        return {
            selected,
            currentIndexValue,
            showOptions,
        };
    }
})
</script>

<style lang="scss">
@import "@/variables.scss";

.optionsList-enter-active,
.optionsList-leave-active {
    transition: all 0.3s ease;
}

.optionsList-enter-from,
.optionsList-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}

input {
    height: 0;
    width: 0;
    visibility: hidden;
}

.options-list {
    z-index: 99;
    display: inline-flex;
    flex-direction: column;
    position: relative;

    @media (max-width: 960px) {
        z-index: 8;
    }

    input {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .item-area {
        cursor: pointer;
        overflow: hidden;
        width: 280px;
        display: inline-flex;
        align-items: center;
        padding: 0 24px;

        @media (max-width: 650px) {
            width: unset;
        }
    }

    .current-value__area {
        transition: opacity .1s ease;
        justify-content: flex-end;

        &:hover {
            opacity: .7;

            .current-icon {
                transform: rotate(180deg);
            }
        }

        .current-icon {
            width: 8px;
            height: 5px;
            margin-left: 5px;
            transition: all .22s ease;

            .icon {
                fill: $color-default;
            }
        }
    }

    .text-option__value {
        color: $color-default;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: .5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        transition: opacity .09s ease;
    }

    .options-container {
        display: inline-flex;
        flex-direction: column;
        position: absolute;
    }

    .option-item__area {
        background: rgb(255, 255, 255);
        height: 48px;

        &:hover .text-option__value {
            opacity: .65;
        }

        &.active-option {
            background: $color-active;
        }
    }
}
</style>