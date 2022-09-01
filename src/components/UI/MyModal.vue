<template>
    <div class="my-modal" @click.prevent="$emit('update:showModal', false)">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h2 class="modal-title" v-if="modalTitle">{{ modalTitle }}</h2>
                <div class="modal-close__btn">
                    <button
                        type="button"
                        class="modal-close__act"
                        @click="$emit('update:showModal', false)"
                    >
                        <close-icon class="close-icon" />
                    </button>
                </div>
            </div>
            <div class="modal-main">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import CloseIcon from '@/assets/icons/CloseIcon.vue';

export default defineComponent({
    name: "my-modal",
    props: {
        /* Отвечает за отображение модального окна */
        showModal: {
            type: Boolean as PropType<boolean>,
            requared: true
        },
        /* Содержит title модального окна */
        modalTitle: {
            type: String as PropType<string>,
            required: false
        }
    },
    components: {
        CloseIcon
    }
})
</script>

<style lang="scss">
@import "@/variables.scss";

.my-modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    z-index: 100;

    .modal-content {
        position: fixed;
        width: 600px;
        right: 0;
        height: 100%;
        background: rgb(255, 255, 255);
        padding: 32px 40px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;

        @media (max-width: 960px) {
            width: 100%;
            padding: 3% 4%;
        }

        .modal-main {
            height: 100%;
            flex-grow: 1;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 9%;

            .modal-title {
                font-weight: 500;
                font-size: 30px;
                color: $color-default;
            }

            .modal-close__btn {
                .modal-close__act {
                    cursor: pointer;
                    border: 1px solid rgba(0, 0, 0, .1);
                    border-radius: 50%;
                    background: none;
                    padding: 16px;
                    font-size: 0;
                    transition: all .12s ease;

                    .close-icon {
                        width: 15px;
                        height: auto;

                        .icon {
                            stroke: $color-default;
                            transition: all .12s ease;
                        }
                    }

                    &:hover {
                        opacity: .6;
                        border-color: $color-active;

                        .icon {
                            stroke: $color-active;
                        }
                    }

                    &:active {
                        transform: scale(.9);
                    }
                }
            }
        }
    }
}
</style>