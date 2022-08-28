<template>
    <footer class="footer">
        <a href="https://t.me/ulmanss" class="author">2022 @ulmanss 💓</a>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {


        return {}
    }
})
</script>

<style lang="scss" scoped>
.footer {
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0);

    .author {
        color: #011AFF;
        opacity: 0.7;
        text-shadow: -2px -2px 6px, 2px 2px 6px;
}
}
</style>