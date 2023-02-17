<template>
    <header-cp></header-cp>
    <main>
        <div class="d-flex mx-auto mt-5 justify-content-between" style="width: 1060px;">
            <article class="mx-auto mb-5 text-center pt-5 fw-bold" style="width: 700px;">
                <h1 class="text-start">{{ route.query.title }}</h1>
                <div class="mt-5">
                    <img class="w-100" :src="route.query.image">
                </div>
            </article>
            <aside style="width: 320px;">
                <h4 class="p-5 border position-sticky" style="top: 80px;">{{ route.query.price }}원 / 1인</h4>
            </aside>
        </div>
        <section class="border-top">
            <div class="mx-auto mb-5" style="max-width: 1060px;">
                <div class="fs-4 fw-bold mt-5 mb-3">
                    {{ route.query.category }} 상품
                </div>
                <swiperCp :swiperData="$utils.utils.categoryData(route.query.category)" :swiperNum="2"></swiperCp>
            </div>
        </section>
    </main>
    <footer-cp></footer-cp>
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