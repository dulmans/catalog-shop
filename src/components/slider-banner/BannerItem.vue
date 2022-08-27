<template>
    <a
        :href="bannerInfo.link"
        class="main-banner__item"
    >
        <div class="banner-content">
            <h2 class="banner-text banner-title">{{bannerInfo.title}}</h2>
            <p class="banner-text banner-body">{{bannerInfo.body}}</p>
        </div>
        <img :src="`${bannerInfo.bgImage}`" class="banner-background">
    </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import MainBanner from '@/types/MainBanner';

export default defineComponent({
    props: {
        bannerInfo: {
            type: Object as PropType<MainBanner>,
            required: true
        }
    },
    setup () {


        return {}
    }
})
</script>

<style lang="scss" scoped>
.main-banner__item{
    position: relative;
    display: block;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .banner-content{
        max-width: 25%;
        .banner-text{
            color: rgb(255, 255, 255);
            text-align: center;
            transition: all .15s ease;
        }

        .banner-title {
            font-size: 72px;
            font-weight: 400;
            margin: 0;
        }

        .banner-body {
            font-weight: 500;
            font-size: 16px;
        }
    }

    .banner-background{
        position: absolute;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: all .5s ease-in-out;
    }

    &:hover{
        .banner-background{
            transform: scale(1.05);
        }

        .banner-title{
            opacity: .9;
        }

        .banner-body{
            opacity: .8;
        }
    }
}
</style>