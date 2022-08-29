<template>
    <swiper
        :slidesPerView="1"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
        }"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }"
        :modules="modules"
        class="slider-content"
    >
        <component :is="'style'">
            :root {
                --count-slider: {{banners?.length}};
            }
        </component>
        <swiper-slide v-for="(banner, index) in banners" :key="index">
            <banner-item :bannerInfo="banner" />
        </swiper-slide>

        <button class="swiper-button swiper-button-prev" type="button">
            <arrow-icon />
        </button>
        <button class="swiper-button swiper-button-next" type="button">
            <arrow-icon />
        </button>

        <div class="swiper-pagination-contain">
            <div class="swiper-pagination"></div>
        </div>

    </swiper>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import BannerItem from '@/components/slider-banner/BannerItem.vue';
import ArrowIcon from '@/assets/icons/ArrowIcon.vue';

import MainBanner from '@/types/MainBanner';

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
        BannerItem,
        ArrowIcon
    },
    props: {
        banners: {
            type: Array as PropType<MainBanner[]>,
            requared: true
        }
    },
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay],
        };
    },
})
</script>

<style lang="scss">
$size-pagination-bullet: 6px;
$padding-pagination-contain: 20px;
$padding-pagination-bulletLR: 4px;

.slider-content {
    position: relative;
    height: 100%;
    width: 100%;

    .swiper-pagination-contain {
        position: absolute;
        z-index: 1;
        bottom: 40px;
        margin: 0 calc(50% - ((var(--count-slider) * ($padding-pagination-bulletLR * 2 + $size-pagination-bullet) + ($padding-pagination-contain * 2)) / 2));

        .swiper-pagination {
            background: rgba(0, 0, 0, .4);
            display: flex;
            padding: 0 $padding-pagination-contain;
            border-radius: 20px;

            .swiper-pagination-bullet {
                position: relative;
                padding: 13px $padding-pagination-bulletLR;
                height: $size-pagination-bullet;
                width: $size-pagination-bullet;
                opacity: .2;
                display: inline-flex;
                cursor: pointer;
                box-sizing: unset;

                &::before {
                    content: '';
                    position: absolute;
                    width: $size-pagination-bullet;
                    height: $size-pagination-bullet;
                    border-radius: 50%;
                    background: rgb(255, 255, 255);
                }

                &.swiper-pagination-bullet-active {
                    opacity: 1;
                }
            }
        }
    }

    .swiper-button {
        position: absolute;
        bottom: 25%;
        z-index: 1;
        margin: 0 18%;
        background: none;
        border: none;
        cursor: pointer;
        transition: all .1s ease;
        padding: 20px 30px;

        &.swiper-button-prev {
            transform: rotate(180deg);
            left: 0;
        }

        &.swiper-button-next {
            right: 0;
        }

        &:hover {
            opacity: .8;
        }

        .arrow-banner {
            stroke: rgb(255, 255, 255)
        }
    }
}
</style>