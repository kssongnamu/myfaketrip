<template>
    <div v-if="SwiperData.Type === 'RecentItem'">
        <div class="fs-4 fw-bold mt-5 mb-3">
            {{ SwiperData.Title }}
        </div>
        <swiper :navigation="true" :modules="modules" class="w-100 mx-auto">
            <swiper-slide class="d-flex">
                <div class="py-3 px-2 d-flex" @mouseover="ChangeRecentItem(index)" style="width: 265px; height: 92px;" v-for="(DataCol, index) in SwiperData.Data">
                    <img class="rounded-3 me-3" style="width: 60px; height: 60px;" :src='DataCol.ImgSrc'>
                    <div class="">
                        <div class="fs-14">
                            {{ DataCol.Title }}
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="d-flex">
            <Card :Data="SwiperData.Data[state.Dataindex].Data" :Width="'width: 237.5px;'"></Card>
        </div>
    </div>
    <div v-else-if="SwiperData.Type !== 'Banner'">
        <div :class="[SwiperData.Type === 'CityCard' ? 'fs-1' : 'fs-4', 'fw-bold mt-5 mb-3']">
            {{ SwiperData.Title }}
        </div>
        <swiper :navigation="true" :modules="modules" class="w-100 mx-auto">
                <template v-for="DataCols in SwiperData.Data">
                    <swiper-slide class="d-flex" v-if="SwiperData.Type === 'CityCard'">
                        <router-link 
                            :to="{name: 'cities', params: { path1: index }}" v-for="(DataCol, index) in DataCols" 
                            :class="['position-relative overflow-hidden rounded-3', index !== 0 ? 'ms-auto' : '']" 
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
                        <Card :Data="DataCols" :Width="'width: 250px;'"></Card>
                    </swiper-slide>
                </template>
        </swiper>
    </div>
    <div v-else>
        <swiper :pagination="true" :navigation="true" :modules="modules" class="w-100 h-100 mx-auto">
            <template v-for="BannerSrc in SwiperData.Data">
                <swiper-slide>
                    <img class="w-100 rounded-3" :src=BannerSrc>
                </swiper-slide>
            </template>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
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
</style>
