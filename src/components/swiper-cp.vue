<template>
    <div v-if="SwiperData.Type === 'RecentItem'">
        <div class="fs-4 fw-bold mt-5 mb-3">
            {{ SwiperData.Title }}
        </div>
        <div class="position-relative">
            <swiper :navigation="{nextEl: '.swiper-next', prevEl: '.swiper-prev'}" :slidesPerView="4" :slidesPerGroup="4" :modules="modules" class="w-100 mx-auto">
                <swiper-slide class="d-flex" @mouseover="ChangeRecentItem(index)" style="width: 265px; height: 92px;" v-for="DataCol, index in SwiperData.Data">
                    <div class="py-3 px-2 d-flex">
                        <img class="rounded-3 me-3" style="width: 60px; height: 60px;" :src='DataCol.ImgSrc'>
                        <div class="">
                            <div class="fs-14">
                                {{ DataCol.Title }}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-prev start-0">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
            </div>
            <div class="swiper-next start-100">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
            </div>
        </div>
        <div class="d-flex">
            <Card class="mx-auto" :Data="DataCol" :Width="'width: 237.5px;'" v-for="DataCol in SwiperData.Data[state.Dataindex].Data"></Card>
        </div>
    </div>
    <div v-else-if="SwiperData.Type !== 'Banner'">
        <div :class="[SwiperData.Type === 'CityCard' ? 'fs-1' : 'fs-4', 'fw-bold mt-5 mb-3']">
            {{ SwiperData.Title }}
        </div>
        <div class="position-relative">
            <swiper :navigation="navigationParam" :slidesPerView="4" :slidesPerGroup="4" :spaceBetween="20" :modules="modules" class="w-100 mx-auto">
                <template v-for="DataCol, index in SwiperData.Data">
                    <swiper-slide class="d-flex" v-if="SwiperData.Type === 'CityCard'">
                        <router-link 
                            :to="{name: 'cities', params: { path1: index }}" 
                            class="position-relative overflow-hidden rounded-3" 
                            style="width: 250px; height: 333px;"
                        >
                            <img :src='DataCol.ImgSrc' class="d-block h-100">
                            <div class="position-absolute top-0 start-0 h-100 w-100" style="background-image: linear-gradient(142deg,rgba(0,0,0,.7),hsla(0,0%,100%,0) 65%);"></div>
                            <div class="d-flex flex-column position-absolute top-0 start-0 text-white p-4 h-100 w-100">
                                <div class="fs-2 fw-bold">
                                    {{ DataCol.Name }}
                                </div>
                                <div class="fs-5 fw-bold">
                                    {{ DataCol.Num }}
                                </div>
                                <button type="button" class="btn btn-light mt-auto me-auto">둘러보기</button>
                            </div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide class="d-flex" v-else>
                        <Card :Data="DataCol" :Width="'width: 250px;'"></Card>
                    </swiper-slide>
                </template>
            </swiper>
            <div class="swiper-prev start-0">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
            </div>
            <div class="swiper-next start-100">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
            </div>
        </div>
    </div>
    <div v-else>
        <div class="position-relative">
            <swiper :pagination="true" :navigation="navigationParam" :modules="modules" class="w-100 h-100 mx-auto">
                <template v-for="BannerSrc in SwiperData.Data">
                    <swiper-slide>
                        <img class="w-100 rounded-3" :src=BannerSrc>
                    </swiper-slide>
                </template>
            </swiper>
            <div class="swiper-prev start-0">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo=" alt="prev">
            </div>
            <div class="swiper-next start-100">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg==" alt="next">
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';
import { defineProps, reactive } from 'vue';
import Card from '@/components/card.vue'

const state = reactive({
    Dataindex: 0
})

const props = defineProps({
    SwiperData: Object
})

const modules = [Pagination, Navigation];

const ChangeRecentItem = (index) => { state.Dataindex = index; };


</script>

<style>
.swiper-prev,
.swiper-next {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    padding-top: 6.5px;
    z-index: 10;
    cursor: pointer;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%), 0 4px 12px 0 rgb(0 0 0 / 5%);
}

</style>
