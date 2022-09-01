<template>
    <div class="basket-item__contain">
        <div :class="[{ 'basket-inActive': !(itemBas?.info.category.inStock) }, 'basket-item']">
            <div class="basket-image">
                <img :src="itemBas?.info.mainInfo.image.main">
            </div>
            <div class="basket-info">
                <h4 class="basket-title">{{ itemBas?.info.mainInfo.title }}</h4>
                <span class="basket-price">{{ Math.ceil(Number(itemBas?.info.mainInfo.price)) }} ₽</span>
            </div>
            <div class="basket-count__contain">
                <my-button
                    class="basket-btn"
                    @click="$emit('updateCount', { id: itemBas?.info.id, newCount: (itemBas?.count ?? 0) - 1 })"
                >
                    <minus-icon width="12px" height="2px" />
                </my-button>
                <span class="basket-count__text">{{ itemBas?.count }}</span>
                <my-button
                    class="basket-btn"
                    @click="$emit('updateCount', { id: itemBas?.info.id, newCount: (itemBas?.count ?? 0) + 1 })"
                >
                    <plus-icon width="12px" height="12px" />
                </my-button>
            </div>
            <button
                type="button"
                class="basket-delete__btn"
                @click="$emit('deleteItem', itemBas?.info.id)"
            >
                <close-icon
                    v-if="itemBas?.info.category.inStock"
                    class="basket-delete__icon"
                />
                <switch-icon
                    v-else
                    class="basket-delete__icon"
                    @click="switchItem"
                />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import MinusIcon from '@/assets/icons/MinusIcon.vue';
import PlusIcon from '@/assets/icons/PlusIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import SwitchIcon from '@/assets/icons/SwitchIcon.vue';

import { BasketItem } from '@/types/Basket';


export default defineComponent({
    props: {
        /* Объект с информацией об элементе корзины */
        itemBas: {
            type: Object as PropType<BasketItem>,
            requared: true
        }
    },
    components: {
        MinusIcon,
        PlusIcon,
        CloseIcon,
        SwitchIcon
    },
    emits: ['deleteItem', 'updateCount', 'hideModalSwitch'],
    setup(props, { emit }) {
        /* Функция, которая вызывает events для удаления элемента и скрытии корзины */
        const switchItem = ():void => {
            emit('deleteItem', props?.itemBas?.info.id);
            emit('hideModalSwitch');
            return;
        };
        return {
            switchItem
        };
    }
})
</script>

<style lang="scss">
@import "@/variables.scss";

.basket-item__contain {
    border-top: 1px solid rgba(0, 0, 0, .1);
    padding: 12px 0;
    height: 120px;

    .basket-item {
        display: flex;
        align-items: center;
        height: 100%;

        .basket-image {
            height: 100%;

            @media (max-width: 400px) {
                height: 90%;
            }

            img {
                height: 100%;
                width: auto;
                object-fit: cover;
            }
        }

        .basket-info {
            color: $color-default;
            font-size: 16px;

            @media (max-width: 500px) {
                font-size: 15px;
            }

            .basket-title {
                font-weight: 300;
                margin: 0;
                height: 2.5em;
                overflow: hidden;
                text-overflow: ellipsis;

                @media (max-width: 960px) {
                    height: unset;
                    margin-bottom: 10px
                }
            }

            .basket-price {
                font-weight: 600;
            }
        }

        .basket-count__contain {
            display: inline-flex;
            align-items: center;
            margin: 0 7% 0 11%;

            @media (max-width: 600px) {
                flex-direction: column;
                gap: 5px;
            }

            .basket-count__text {
                font-size: 16px;
                color: $color-default;
                width: 3em;
                text-align: center;
                padding: 0 5px;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .basket-btn {
                padding: 0;
                width: 40px;
                height: 24px;
                border-radius: 6px;
                background: rgb(242, 242, 242);
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .12s ease;

                .icon {
                    stroke: black;
                }

                &:hover {
                    opacity: .6;
                }

                &:active {
                    transform: scale(.9);
                }
            }
        }

        .basket-delete__btn {
            cursor: pointer;
            border: none;
            background: none;
            font-size: 0;
            padding: 0px;
            flex-basis: 24px;
            flex-shrink: 0;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            opacity: .2;
            transition: opacity .12s ease, transform .08s ease;

            .basket-delete__icon {
                width: 14px;
                height: auto;

                .icon {
                    stroke: $color-default;
                }
            }

            &:hover {
                opacity: 1;
            }

            &:active {
                transform: scale(.9);
            }
        }

        &.basket-inActive {
            >*:not(.basket-delete__btn) {
                opacity: .2;
                pointer-events: none;
            }

            .basket-delete__btn {
                opacity: 1;

                svg {
                    width: 24px;
                }

                &:hover {
                    opacity: .6;
                }
            }
        }
    }

}
</style>