<template>
    <div class="bg-image" :style="`background-image: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${dummy.CityCard.Data[0][route.params.path1].ImgSrc}'); background-size: cover; background-position: center center;`">
        <headerCp></headerCp>
        <div class="mx-auto mb-5 text-center text-white pt-5 fw-bold" style="font-size: 54px; max-width: 1060px; height: 220px;">
            {{ dummy.CityCard.Data[0][route.params.path1].Name }}
        </div>
    </div>
    <main>
        <section class="mx-auto mb-5" style="max-width: 1060px;" v-for="SwiperData in [dummy.MAIN_TOPN]">
            <swiperCp :SwiperData="SwiperData"></swiperCp>
        </section>
    </main>
    <footerCp></footerCp>
</template>

<script setup>
import dummy from '@/assets/dummy'
import swiperCp from '@/components/swiper-cp.vue';
import footerCp from '@/components/footer-cp.vue';
import headerCp from '@/components/header-cp.vue';
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style>
.info ul,
.info-nav ul {
    margin-top: 10px;
}
.info li {
    align-items: center;
    border: 0;
    padding: 0;
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.info-nav li {
    height: 32px;
    align-items: center;
    border: 0;
    padding: 0;
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.info-icon {
    margin: 0px 10px;
    height: 100%;
    color: rgb(206, 212, 218);
}
.info-icon img {
    height: 20px;
    width: 20px;
    margin: auto 10px;
}
.fs-12 {
    font-size: 12px;
    color: #848c94;
}
.fs-14 {
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.fs-15 {
    font-size: 15px;
    color: #343a40;
    font-weight: 600;
}
.fs-18 {
    font-size: 18px;
    font-weight: bold;
    color: rgb(102, 109, 117);
}
</style>