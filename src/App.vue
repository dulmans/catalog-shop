<template>
    <div class="app">
        <div class="app-content">
            <my-modal
                v-if="showBasketModal"
                v-model:showModal="showBasketModal"
                :modalTitle="'Корзина'"
            >
                <basket-elem
                    v-model:showModal="showBasketModal"
                    :itemLists="basketLists"
                />
            </my-modal>
            <header-elem
                class="container-one"
                v-model:showBacket="showBasketModal"
            />
            <div class="slider-banner">
                <text-pagination
                    :pages="mainPaginationText"
                />
                <slider-banner
                    :banners="mainBannerArray"
                />
            </div>
            <main class="main__content">
                <div class="main__content--container container-one">
                    <catalog-colors />
                </div>
            </main>
            <footer-elem />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HeaderElem from '@/components/HeaderElem.vue';
import SliderBanner from '@/components/SliderBanner.vue';
import TextPagination from '@/components/slider-banner/TextPagination.vue';
import FooterElem from '@/components/FooterElem.vue';
import CatalogColors from '@/views/CatalogColors.vue';
import BasketElem from '@/components/BasketElem.vue';

import MainBanner from '@/types/MainBanner';
import PaginationText from '@/types/PaginationText';
import { BasketLists } from '@/types/Basket';



export default defineComponent({
    components:{
    HeaderElem,
    SliderBanner,
    TextPagination,
    FooterElem,
    CatalogColors,
    BasketElem
},
    setup () {
        const mainBannerArray:MainBanner[] = [
            {title: 'Краски', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'},
            {title: 'Краски 2', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'},
            {title: 'Краски 3', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'},
            {title: 'Краски 4', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'},
            {title: 'Краски 5', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'},
            {title: 'Краски 6', body: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!', bgImage: 'https://i.postimg.cc/Gt2Gzgmt/image-banner-1.jpg', link: '#'}
        ];

        const mainPaginationText = ref<PaginationText[]>([
            {title: 'главная', link: '#'},
            {title: 'продукты', link: '#'},
            {title: 'краски', link: '#'}
        ]);

        const showBasketModal = ref<boolean>(true);

        const basketLists = ref<BasketLists>({
            '93': {
                info: {
                    "mainInfo":{"title":"Краска Wallquest, Brownsone MS90102","price":"149.00","image":{"main":"https://i.postimg.cc/7h74js66/mainImg.jpg","hover":"https://i.postimg.cc/c18dKHmS/hoverImg.jpg"}},"category":{"novelty":false,"inStock":true,"contract":false,"exclusive":true,"sales":true},"id":"93"
                },
                count: 1
            }
        })

        return {
            mainBannerArray,
            mainPaginationText,
            showBasketModal,
            basketLists
        }
    },
    mounted() {

    }
})
</script>

<style lang="scss">
@import "@/variables.scss";
@import 'normalize.css/normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

.app{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: normal;
    position: relative;
    * {box-sizing: border-box;}

    .slider-banner{
        position: relative;
        width: 100%;
        height: 560px;
    }
}

a{
    text-decoration: none;
}

.container-one{
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
    .main__content--container {
    }
}
</style>