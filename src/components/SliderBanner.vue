<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
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
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <div class="swiper-pagination"></div>
        <button class="swiper-button-next">NEXT</button>
        <button class="swiper-button-prev">PREV</button>

    </swiper>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// import "swiper/css/pagination";
// import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";


export default defineComponent({
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
})
</script>

<style lang="scss">
.swiper-pagination{
    .swiper-pagination-bullet{
        padding: 13px 4px;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        // background: rgb(255, 255, 255);
        background: red;
        opacity: .2;
        cursor: pointer;
        &.swiper-pagination-bullet-active{
            opacity: 1;
        }
    }
}
</style>