<template>
    <header class="header">
        <transition name="mobile">
            <div class="header__mobile-menu" v-if="showMobileMenu">
                <div class="mobile-menu__header">
                    <button class="mobile-menu__close" @click="showMobileMenu = false">
                        <close-icon />
                    </button>
                </div>
                <div class="mobile-menu_contain">
                    <navigation-menu />
                    <request-call />
                    <action-btns-head />
                </div>
            </div>
        </transition>
        <div class="container-one">
            <div class="header__contain">
                <button @click="showMobileMenu = true" class="header-btn__mobile-menu">
                    <burger-icon />
                </button>
                <div class="header-content__block left-content">
                    <div class="logo">
                        <a href="#">
                            <logo fill="#1F2020" />
                        </a>
                    </div>

                    <div class="navigation">
                        <navigation-menu />
                    </div>
                </div>

                <div class="header-content__block right-content">
                    <request-call />

                    <action-btns-head @openModal="$emit('update:showBacket', true)" :basketCount="basketTotalCount" />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import Logo from '@/assets/Logo.vue';
import BurgerIcon from '@/assets/icons/BurgerIcon.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import NavigationMenu from '@/components/header/NavigationMenu.vue';
import RequestCall from '@/components/header/RequestCall.vue';
import ActionBtnsHead from '@/components/header/ActionBtnsHead.vue';

export default defineComponent({
    components: {
        Logo,
        NavigationMenu,
        RequestCall,
        ActionBtnsHead,
        BurgerIcon,
        CloseIcon
    },
    props: {
        showBacket: {
            type: Boolean as PropType<boolean>
        },
        basketTotalCount: {
            type: Number as PropType<number>
        }
    },
    setup() {
        const showMobileMenu = ref<boolean>(false);

        return { showMobileMenu };
    },
})
</script>

<style lang="scss">
@import "@/variables.scss";

.mobile-enter-active,
.mobile-leave-active {
    transition: all 0.3s ease;
}

.mobile-enter-from,
.mobile-leave-to {
    transform: translateX(-100%);
}

.header {
    background: rgb(255, 255, 255);

    @media (max-width: 960px) {
        position: fixed;
        z-index: 9;
        width: 100%;
        top: 0;
    }

    .header__mobile-menu {
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 200;
        background: rgb(255, 255, 255);
        padding: 35px;

        .mobile-menu__header {
            margin-bottom: 20px;
        }

        .mobile-menu__close {
            padding: 0;
            width: 25px;
            height: auto;
            background: none;
            border: none;

            svg {
                width: 100%;
                height: auto;

                .icon {
                    stroke: $color-default;
                }
            }

            &:hover {
                .icon {
                    stroke: $color-active;
                }
            }
        }

        .mobile-menu_contain {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            gap: 10%;

            .menu-items {
                flex-direction: column;
                align-items: center;
                gap: 15px;
            }

            .header-basket__elem {
                display: none;
            }
        }
    }

    .header__contain {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 40px;
        padding-bottom: 40px;

        @media (max-width: 960px) {
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid $color-default;
        }

        .header-btn__mobile-menu {
            background: none;
            padding: 10px;
            border: none;
            display: none;

            @media (max-width: 960px) {
                display: inline-block;
            }

            svg {
                width: 24px;
                height: 14px;
                .icon {
                    fill: $color-default;
                }
            }
        }

        .header-content__block {
            display: flex;
            align-items: center;

            &.left-content {
                min-width: 50%;
                justify-content: space-between;

                @media (max-width: 960px) {
                    min-width: unset;
                }

                .navigation {
                    margin-left: 35px;

                    @media (max-width: 960px) {
                        display: none;
                    }
                }
            }

            &.right-content {
                .request-call {
                    @media (max-width: 960px) {
                        display: none;
                    }
                }

                .action-btn__item:not(.action-btn__item.header-basket__elem) {
                    @media (max-width: 960px) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>