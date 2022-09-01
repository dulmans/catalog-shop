<template>
    <div class="basket">
        <div class="basket-zero" v-if="totalCount <= 0">
            <span class="basket-zero__text default__text">Ваша корзина пуста &#128549;</span>
            <span @click="hideModal" class="basket-zero__text close-modal__text">
                &gt; Но это легко исправить &#128516; &lt;
            </span>
        </div>
        <div class="basket-content" v-else>
            <div class="basket-main-content__container">
                <div class="basket-header">
                    <span class="basket-count header-text">{{ totalCount }} товара</span>
                    <span class="basket-clear header-text" @click="$emit('allClear')">
                        очистить список
                    </span>
                </div>
                <div class="basket-lists">
                    <basket-item
                        v-for="item in itemLists"
                        :key="item.info.id"
                        :itemBas="item"
                        @updateCount="$emit('updateItemCount', $event)"
                        @deleteItem="$emit('deleteBasketItem', $event)"
                        @hideModalSwitch="hideModal"
                    />
                </div>
            </div>
            <div class="basket-footer">
                <div class="basket-total__price">
                    <span>Итого</span>
                    <span class="price-field">{{ totalPrice.toLocaleString() }}₽</span>
                </div>
                <div class="basket-btn__checkout">
                    <my-button>
                        Оформить заказ
                    </my-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import BasketItem from '@/components/basket/BasketItem.vue';

import { BasketLists } from '@/types/Basket';

export default defineComponent({
    props: {
        showModal: {
            type: Boolean as PropType<boolean>
        },
        itemLists: {
            type: Object as PropType<BasketLists>,
        }
    },
    components: { BasketItem },
    emits: ['update:showModal', 'updateItemCount', 'deleteBasketItem', 'allClear'],
    setup(props, { emit }) {
        const hideModal = () => {
            emit('update:showModal', false)
        };

        const totalPrice = computed((): number => {
            let totalRes = 0;
            for (const key in props?.itemLists) {
                if (!(props?.itemLists[key].info.category.inStock)) { continue; }
                else {
                    totalRes += props?.itemLists[key].count * Number(props?.itemLists[key].info.mainInfo.price);
                };
            };
            return totalRes;
        });

        const totalCount = computed((): number => {
            let totalRes = 0;
            for (const key in props?.itemLists) {
                totalRes += props?.itemLists[key].count;
            };
            return totalRes;
        })

        return { hideModal, totalPrice, totalCount };
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.basket {
    height: 100%;

    .basket-content {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .basket-zero {
        display: flex;
        flex-direction: column;
        align-items: center;
        white-space: nowrap;

        .basket-zero__text {
            font-size: 16px;

            &.default__text {
                color: $color-default;
                margin-bottom: 10px;
            }

            &.close-modal__text {
                color: $color-active;
                cursor: pointer;
                font-weight: 500;
                border-bottom: 1px solid $color-active;
            }
        }
    }

    .basket-main-content__container {
        flex-grow: 1;
        display: inline-flex;
        flex-direction: column;

        .basket-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;

            .header-text {
                color: $color-default;
                font-size: 14px;

                &.basket-clear {
                    cursor: pointer;
                    font-weight: 300;
                    transition: all .09s ease;
                    display: inline-block;

                    &:hover {
                        color: $color-active;
                    }

                    &:active {
                        transform: scale(.97);
                    }
                }
            }
        }

        .basket-lists {
            flex-grow: 1;
            max-height: 100%;
            overflow-y: auto;
        }
    }

    .basket-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .basket-total__price {
            font-size: 16px;
            color: $color-default;
            display: inline-flex;
            flex-direction: column;

            .price-field {
                font-size: 30px;
                font-weight: 500;
                margin-top: 5px;
            }
        }

        .basket-btn__checkout {}
    }
}
</style>