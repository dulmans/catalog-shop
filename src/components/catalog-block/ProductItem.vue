<template>
    <div class="product-item">
        <div class="product-category">
            <div class="category-item__contain">
                <category-item
                    v-for="category in categoryProduct"
                    :style="{background: `${category.bgColor}`}"
                >
                    {{category.title}}
                </category-item>
            </div>
        </div>
        <div class="product-image">
            <div class="main-image image"><img :src="prodItem.mainInfo.image.main" loading="lazy"/></div>
            <div class="hover-image image"><img :src="prodItem.mainInfo.image.hover" loading="lazy"/></div>
        </div>
        <h3 class="product-title">{{prodItem.mainInfo.title}}</h3>
        <div class="product-footer">
            <span class="product-price">{{Math.ceil(Number(prodItem.mainInfo.price))}} ₽</span>
            <my-button
                class="button-add"
            ><span class="button-text">+</span></my-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import CategoryItem from '@/components/catalog-block/CategoryItem.vue';

import { ResponseDataCatalog, CategoryFilter } from '@/types/ResponseDataCatalog';
import { CategoryOption, FillObjectOption } from '@/types/CategoryOption';


export default defineComponent({
    props: {
        prodItem: {
            type: Object as PropType<ResponseDataCatalog>,
            required: true
        }
    },
    components: { CategoryItem },
    setup() {
        const categoryOption:CategoryOption = {
            novelty: {
                title: 'Новинка',
                bgColor: 'rgba(0, 179, 88, .5)',
            },
            inStock: {
                title: 'В наличии',
                bgColor: 'rgba(166, 137, 0, .5)',
            },
            contract: {
                title: 'Контрактная',
                bgColor: '',
            },
            exclusive: {
                title: 'Эксклюзив',
                bgColor: 'rgba(18, 64, 171, .5)',
            },
            sales: {
                title: 'Распродажа',
                bgColor: 'rgba(166, 0, 0, .5)',
            }
        };

        const categoryProduct = ref<FillObjectOption[]>([])

        return {categoryOption, categoryProduct};
    },
    mounted () {
        for(let key in this.prodItem.category){
            if(this.prodItem.category[key as CategoryFilter]){
                this.categoryProduct.push(this.categoryOption[key as CategoryFilter])
            }
        }
    }
})
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.product-category {
    position: absolute;
    z-index: 3;

    .category-item__contain {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 5px 10px;
    }
}

.product-item {
    color: $color-default;
    font-size: 16px;
    display: inline-flex;
    position: relative;
    flex-direction: column;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);

    .product-image {
        max-width: 100%;
        position: relative;

        .image {
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }
            &.main-image {

            }

            &.hover-image {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                opacity: 0;
                transition: opacity .12s ease-in-out;

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    .product-title {
        font-weight: 300;
        font-size: inherit;
    }

    .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .product-price {
            font-weight: 600;
            font-size: inherit;
            letter-spacing: .5px;
        }

        .button-add {
            padding: 5px 33px;
            opacity: 0;

            .button-text {
                font-weight: 600;
                font-size: 20px;
            }
        }
    }

    &:hover {
        .button-add {
            opacity: 1;
        }
    }

}
</style>