<template>
    <label class="checkbox-label">
        <input
            type="checkbox"
            v-model="checked"
            @change="$emit('switchChecked')"
        >
        <div class="floating-button">
            <div class="eclipse"></div>
        </div>
        <span class="checkbox-title">{{checkboxItem?.title}}</span>
    </label>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'

import {PresetCatalogOptionFilter} from '@/types/PresetCatalogOption';

export default defineComponent({
    name: 'my-checkbox-button',
    props: {
        checkboxItem: {
            type: Object as PropType<PresetCatalogOptionFilter>
        }
    },
    setup (props) {
        const checked = ref(props.checkboxItem?.value)

        return {checked}
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
.checkbox-label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    &:hover {
        .checkbox-title {
            opacity: .7;
        }
    }

    input {
        height: 0;
        width: 0;
        visibility: hidden;
        &:checked {
            ~ .floating-button {
                background: $color-active;

                .eclipse {
                    right: 0;
                }
            }
        }
    }

    .floating-button {
        background: rgb(242, 242, 242);
        position: relative;
        border-radius: 25px;
        height: 22px;
        width: 36px;
        display: inline-flex;
        align-items: center;
        margin-right: 12px;
        transition: all .12s ease-in;

        .eclipse {
            position: absolute;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            background: $color-default;
            margin: 0 7px;
        }
    }

    .checkbox-title {
        text-transform: uppercase;
        font-size: 12px;
        color: $color-default;
        transition: all .13s ease;
    }
}
</style>