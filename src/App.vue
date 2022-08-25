<template>
    <div class="app">
        <div class="app-content">
            <header-elem
            class="container-one"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderElem from '@/components/header/HeaderElem.vue';

export default defineComponent({
    components:{
        HeaderElem
    },
    setup () {


        return {}
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
}

a{
    text-decoration: none;
}

.container-one{
    padding: 0 65px;
}
</style>