<template>
    <header class="header">
        <div class="header__contain">

            <div class="header-content__block left-content">
                <div class="logo">
                    <a href="#">
                        <logo
                            fill="#1F2020"
                        />
                    </a>
                </div>

                <div class="navigation">
                    <navigation-menu />
                </div>
            </div>

            <div class="header-content__block right-content">
                <request-call/>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/assets/Logo.vue';
import NavigationMenu from '@/components/header/NavigationMenu.vue';
import RequestCall from '@/components/header/RequestCall.vue';

export default defineComponent({
    components: {
        Logo,
        NavigationMenu,
        RequestCall },
    setup() {
        return {};
    },
})
</script>

<style lang="scss" scoped>

</style>