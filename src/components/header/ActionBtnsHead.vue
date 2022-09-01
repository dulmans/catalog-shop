<template>
    <div class="action-btns">
        <button type="button" class="action-btn__item">
            <search-icon />
        </button>
        <button type="button" class="action-btn__item">
            <profile-icon />
        </button>
        <button type="button" class="action-btn__item">
            <heart-icon />
        </button>
        <button
            type="button"
            class="action-btn__item header-basket__elem"
            @click="$emit('openModal')"
            :style="{ opacity: (basketCount ?? 0) > 0 ? '1' : '.65' }"
        >
            <header-basket-item :basketTotalCount="basketCount" />
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import SearchIcon from '@/assets/icons/SearchIcon.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import HeaderBasketItem from '@/components/header/HeaderBasketItem.vue';

export default defineComponent({
    props: {
        /* Кол-во товаров в корзине*/
        basketCount: {
            type: Number as PropType<number>,
            required: false
        }
    },
    components: {
        SearchIcon,
        ProfileIcon,
        HeartIcon,
        HeaderBasketItem
    }
})
</script>

<style lang="scss">
@import "@/variables.scss";

.action-btns {
    display: flex;
    align-items: center;
    gap: 24px;

    .action-btn__item {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        height: 22px;
        width: 22px;

        * {
            transition: all .1s ease;
        }

        &:hover {
            opacity: .9;

            svg .header-action__icon {
                stroke: $color-active;
            }
        }


        >* {
            width: 100%;
            height: 100%;
        }

        svg {
            fill: none;

            .header-action__icon {
                stroke: $color-default;
            }
        }
    }
}
</style>