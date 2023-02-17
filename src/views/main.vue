<template>
    <div>
        <headerCp></headerCp>
        <main class="d-flex">
            <div class="mx-auto mb-5" style="max-width: 1060px;">
                <section class="mb-5">
                    <div class="fs-1 fw-bold mt-5 mb-3">
                        여행이 돌아왔어요!
                    </div>
                    <swiperCp :swiperData="dummy.cityData" :swiperType="'cityCard'" :swiperNum="0"></swiperCp>
                </section>
                <section class="mb-5">
                    <swiperCp :swiperData="dummy.banner" :swiperType="'banner'" :swiperNum="1"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        여행편의 상품
                    </div>
                    <swiperCp :swiperData="$utils.utils.categoryData('여행편의')" :swiperNum="2"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        티켓/패스 상품
                    </div>
                    <swiperCp :swiperData="$utils.utils.categoryData('티켓/패스')" :swiperNum="3"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        가이드 투어 상품
                    </div>
                    <swiperCp :swiperData="$utils.utils.categoryData('가이드 투어')" :swiperNum="4"></swiperCp>
                </section>
                <section>
                    <div class="fs-4 fw-bold mt-5 mb-3">
                        마이페이크트립의 여행 정보
                    </div>
                    <div class="d-flex bg-light border py-5" style="height: 196px;">
                        <div class="fs-14 mx-auto" style="width: 260px;" v-for="infoData in dummy.info">
                            <div class="mb-3">
                                <img :src="infoData.iconSrc">
                                <a class="ms-2 text-decoration-none" href="/" target="_blank" rel="noopener noreferrer">
                                    {{ infoData.title }}
                                    <img class="ms-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgNyAxMCI+CiAgICA8cGF0aCBmaWxsPSIjM0U5MkQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNjI4TDMuODQ3IDQuNzguMjE5IDEuMTUzIDEuMzcyIDBsNC44MTQgNC44MTQtNSA1TDAgOC42Mjh6Ii8+Cjwvc3ZnPgo=">
                                </a>
                            </div>
                            <p class="text-start"> {{ infoData.data }} </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footerCp></footerCp>
    </div>
</template>

<script setup>
import dummy from '@/assets/dummy'
import swiperCp from '@/components/swiper-cp.vue';
import footerCp from '@/components/footer-cp.vue';
import headerCp from '@/components/header-cp.vue';


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