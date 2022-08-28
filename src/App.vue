<template>
    <div class="app">
        <div class="app-content">
            <header-elem
            class="container-one"
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

import MainBanner from '@/types/MainBanner';
import PaginationText from '@/types/PaginationText';


export default defineComponent({
    components:{
        HeaderElem,
        SliderBanner,
        TextPagination,
        FooterElem,
        CatalogColors
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

        return {
            mainBannerArray,
            mainPaginationText
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

.main__content {
    max-height: 100vh;
    background: rgb(255, 255, 255);
    .main__content--container {
        max-height: 100%;
    }
}
</style>