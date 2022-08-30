<template>
    <div class="basket-item__contain">
        <div class="basket-item">
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
                >
                    <minus-icon
                        width="12px"
                        height="2px"
                    />
                </my-button>
                <span class="basket-count__text">{{itemBas?.count}}</span>
                <my-button
                    class="basket-btn"
                >
                    <plus-icon
                        width="12px"
                        height="12px"
                    />
                </my-button>
            </div>
            <div class="basket-delete__btn"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import MinusIcon from '@/assets/icons/MinusIcon.vue';
import PlusIcon from '@/assets/icons/PlusIcon.vue';

import { BasketItem } from '@/types/Basket';


export default defineComponent({
    props: {
        itemBas: {
            type: Object as PropType<BasketItem>,
            requared: true
        }
    },
    setup() {
        return {};
    },
    components: { MinusIcon, PlusIcon }
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

            img {
                height: 100%;
                width: auto;
                object-fit: cover;
            }
        }

        .basket-info {
            color: $color-default;
            font-size: 16px;

            .basket-title {
                font-weight: 300;
                margin: 0;
                height: 2.5em;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .basket-price {
                font-weight: 600;
            }
        }

        .basket-count__contain {
            display: inline-flex;
            align-items: center;

            .basket-count__text {
                font-size: 16px;
                color: $color-default;
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

                .icon {
                    stroke: black;
                }
            }
        }

        .basket-delete__btn {}
    }

}
</style>