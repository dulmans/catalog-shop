<template>
    <header class="header">
        <div class="header__contain">

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

                <action-btns-head
                    @openModal="$emit('update:showBacket', true)"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Logo from '@/assets/Logo.vue';

import NavigationMenu from '@/components/header/NavigationMenu.vue';
import RequestCall from '@/components/header/RequestCall.vue';
import ActionBtnsHead from '@/components/header/ActionBtnsHead.vue';

export default defineComponent({
    components: {
        Logo,
        NavigationMenu,
        RequestCall,
        ActionBtnsHead
    },
    props: {
        showBacket: {
            type: Boolean as PropType<boolean>
        }
    },
    setup() {
        return {};
    },
})
</script>

<style lang="scss" scoped>
.header {
    background: rgb(255, 255, 255);
    padding-top: 40px;
    padding-bottom: 40px;
}
.header__contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-content__block {
    display: flex;
    align-items: center;
}
.left-content {
    min-width: 50%;
    justify-content: space-between;
}
.logo {
}
.navigation {
}
.right-content {
    *:first-child{
        margin-right: 110px;
    }
}
</style>