<template>
    <div class="app">
        <div class="app-content">
            <div name="basket">

                <transition name="basket">
                    <my-modal
                        v-if="showBasketModal"
                        v-model:showModal="showBasketModal"
                        :modalTitle="'Корзина'"
                    >
                        <basket-elem
                            v-model:showModal="showBasketModal"
                            :itemLists="basketLists"
                            @updateItemCount="basketAction.updateCount"
                            @deleteBasketItem="basketAction.deleteItem"
                            @allClear="basketAction.allClearItem"
                        />
                    </my-modal>
                </transition>
            </div>

            <header-elem
                v-model:showBacket="showBasketModal"
                :basketTotalCount="(Object.keys(basketLists)).length"
            />

            <div class="slider-banner">
                <text-pagination :pages="mainPaginationText" />
                <slider-banner :banners="mainBannerArray" />
            </div>

            <main class="main__content">
                <div class="main__content--container">
                    <catalog-colors @addNewBasketItem="basketAction.addItem" />
                </div>
            </main>

            <footer-elem />

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import HeaderElem from '@/components/HeaderElem.vue';
import SliderBanner from '@/components/SliderBanner.vue';
import TextPagination from '@/components/slider-banner/TextPagination.vue';
import FooterElem from '@/components/FooterElem.vue';
import CatalogColors from '@/views/CatalogColors.vue';
import BasketElem from '@/components/BasketElem.vue';

import MainBanner from '@/types/MainBanner';
import PaginationText from '@/types/PaginationText';
import { ResponseDataCatalog } from '@/types/ResponseDataCatalog';
import { BasketLists, UpdateCount, BasketItem } from '@/types/Basket';



export default defineComponent({
    components: {
        HeaderElem,
        SliderBanner,
        TextPagination,
        FooterElem,
        CatalogColors,
        BasketElem
    },
    setup() {
        /* Элементы слайдер-баннера */
        const mainBannerArray: MainBanner[] = [
            { title: 'Краски', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 2', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 3', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 4', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 5', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 6', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' }
        ];

        /* Элементы пагинации */
        const mainPaginationText = ref<PaginationText[]>([
            { title: 'главная', link: '#' },
            { title: 'продукты', link: '#' },
            { title: 'краски', link: '#' }
        ]);

        /* Скрывает/отображает корзину */
        const showBasketModal = ref<boolean>(false);

        /* Содержит элементы корзины */
        const basketLists = ref<BasketLists>({});



        /* Дебаг-функция, которая обновляет значение элементов корзины для синхронизации с localStorage */
        const debugUpdateLocal = (): void => {
            basketLists.value = { ...basketLists.value };
            return;
        };

        /* Объект с функциями, отвечающие за любые действия с корзиной */
        const basketAction = {
            /* Удаление элементов корзины */
            /* elemID - ID элемента, который нужно удалить */
            deleteItem(elemID: string): void {
                delete basketLists.value[elemID];
                debugUpdateLocal();
                return;
            },
            /* Удаление ВСЕХ элементов корзины */
            allClearItem(): void {
                basketLists.value = {};
                debugUpdateLocal();
                return;
            },
            /* Обновление кол-ва каждого товара в корзине */
            /* updateInfo - объект с необходимой информацией о товаре и новом значении кол-ва */
            updateCount(updateInfo: UpdateCount): void {
                if (updateInfo.newCount <= 0) {
                    basketAction.deleteItem(updateInfo.id);
                }
                else {
                    basketLists.value[updateInfo.id].count = updateInfo.newCount;
                };
                debugUpdateLocal();
                return;
            },
            /* Добавление нового элемента в корзину */
            /* itemInfo - информация об элементе */
            addItem(itemInfo: ResponseDataCatalog): void {
                if (itemInfo.id in basketLists.value) {
                    basketLists.value[itemInfo.id].count += 1;
                }
                else {
                    const newItem: BasketItem = {
                        count: 1,
                        info: itemInfo
                    };
                    basketLists.value[itemInfo.id] = newItem;
                };
                debugUpdateLocal();
                showBasketModal.value = true;
                return;
            }
        };

        /* Наблюдатель за элементами корзины для сохранения актуального значения в localStorage */
        watch(basketLists, () => {
            localStorage.setItem('basketItems', JSON.stringify(basketLists.value));
        });

        return {
            mainBannerArray,
            mainPaginationText,
            showBasketModal,
            basketLists,
            basketAction
        };
    },
    mounted() {
        /* Достаём элементы корзины из localStorage (если они имеются) */
        if (localStorage.getItem('basketItems')) {
            const getLocalBasketLists: BasketLists = JSON.parse(localStorage.getItem('basketItems') ?? '');
            this.basketLists = getLocalBasketLists;
        };
    }
})
</script>

<style lang="scss">
@import "@/variables.scss";
@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

.app {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: normal;
    position: relative;

    * {
        box-sizing: border-box;
    }

    .slider-banner {
        position: relative;
        width: 100%;
        height: 560px;

        @media (max-width: 500px) {
            position: static;
            height: unset;
        }
    }

    .page-title {
        margin: 48px 0;
        font-size: 36px;
        font-weight: 400;
        color: $color-default;
    }

    a {
        text-decoration: none;
    }

    .container-one {
        padding: 0 65px;

        @media (max-width: 900px) {
            padding: 0 50px;
        }

        @media (max-width: 700px) {
            padding: 0 35px;
        }

        @media (max-width: 500px) {
            padding: 0 25px;
        }
    }

    .dark-focus-bg {
        position: absolute;
        z-index: 98;
        background: rgba(0, 0, 0, .6);
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        @media (max-width: 960px) {
            z-index: 7;
        }
    }

    .main__content {
        background: rgb(255, 255, 255);
    }
}

.basket-enter-active,
.basket-leave-active {
    transition: all 0.3s ease;
}

.basket-enter-from,
.basket-leave-to {
    transform: translateX(100%);
}
</style>