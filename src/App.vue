<template>
    <div class="app">
        <div class="app-content">
            <my-modal v-if="showBasketModal" v-model:showModal="showBasketModal" :modalTitle="'Корзина'">
                <basket-elem
                    v-model:showModal="showBasketModal"
                    :itemLists="basketLists"
                    @updateItemCount="basketAction.updateCount"
                    @deleteBasketItem="basketAction.deleteItem"
                    @allClear="basketAction.allClearItem"
                />
            </my-modal>
            <header-elem
                class="container-one"
                v-model:showBacket="showBasketModal"
                :basketTotalCount="(Object.keys(basketLists)).length"
            />
            <div class="slider-banner">
                <text-pagination :pages="mainPaginationText" />
                <slider-banner :banners="mainBannerArray" />
            </div>
            <main class="main__content">
                <div class="main__content--container container-one">
                    <catalog-colors
                        @addNewBasketItem="basketAction.addItem"
                    />
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
        const debugUpdateLocal = ():void => {
            basketLists.value = {...basketLists.value};
            return;
        };

        const mainBannerArray: MainBanner[] = [
            { title: 'Краски', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 2', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 3', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 4', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 5', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' },
            { title: 'Краски 6', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#' }
        ];

        const mainPaginationText = ref<PaginationText[]>([
            { title: 'главная', link: '#' },
            { title: 'продукты', link: '#' },
            { title: 'краски', link: '#' }
        ]);

        const showBasketModal = ref<boolean>(true);

        const basketLists = ref<BasketLists>({});

        const basketAction = {
            deleteItem(elemID: string):void {
                delete basketLists.value[elemID];
                debugUpdateLocal();
                return;
            },
            allClearItem():void {
                basketLists.value = {};
                debugUpdateLocal();
                return;
            },
            updateCount(updateInfo: UpdateCount):void {
                if (updateInfo.newCount <= 0) {
                    basketAction.deleteItem(updateInfo.id);
                }
                else {
                    basketLists.value[updateInfo.id].count = updateInfo.newCount;
                }
                debugUpdateLocal();
                return;
            },
            addItem(itemInfo:ResponseDataCatalog):void {
                if(itemInfo.id in basketLists.value){
                    basketLists.value[itemInfo.id].count += 1;
                }
                else {
                    const newItem:BasketItem = {
                        count: 1,
                        info: itemInfo
                    };
                    basketLists.value[itemInfo.id] = newItem;
                }
                debugUpdateLocal();
                return;
            }
        };

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
        if(localStorage.getItem('basketItems')){
            const getLocalBasketLists:BasketLists = JSON.parse(localStorage.getItem('basketItems') ?? '');
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
    }
}

a {
    text-decoration: none;
}

.container-one {
    padding: 0 65px;
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
}

.main__content {
    background: rgb(255, 255, 255);

    .main__content--container {}
}
</style>