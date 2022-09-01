<template>
    <div class="pagination-text__block container-one">
        <a
            v-for="(page, index) in pages"
            :href="page.link"
            :key="index"
            class="pagination-text__item"
        >
            {{page.title}}
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import PaginationText from '@/types/PaginationText';

export default defineComponent({
    props:{
        pages: {
            type: Array as PropType<PaginationText[]>,
            requared: true
        }
    },
    setup () {


        return {}
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

$padding-eclipse: 8px;
$size-eclipse: 3px;
$color-elems: #fff;

.pagination-text__block {
    position: absolute;
    z-index: 2;
    margin-top: 35px;

    > *:not(:last-child) {
        position: relative;
        display: inline-flex;
        align-items: center;
        margin-right: calc(($padding-eclipse * 2) + $size-eclipse);

        &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            border-radius: 50%;
            right: -($padding-eclipse + $size-eclipse);
            width: $size-eclipse;
            height: $size-eclipse;
            background-color: rgba($color-elems, .3);
        }
    }

    .pagination-text__item {
        text-transform: uppercase;
        color: rgba($color-elems, .3);
        transition: color .1s ease;
        font-size: 10px;
        letter-spacing: 1px;

        &:hover{
            color: rgba($color-elems, 1);
        }
    }

    @media (max-width: 500px) {
        $color-elems: $color-default;

        position: static;
        z-index: unset;
        margin: 16px 0 48px;

        & > *:not(:last-child) {
            &::after {
                background-color: rgba($color-elems, .3);
            }
        }
        .pagination-text__item {
            color: rgba($color-elems, .3);

            &:hover{
                color: rgba($color-elems, 1);
            }
        }
    }
}
</style>