<template>
    <div v-if="SwiperData.Type !== 'Banner'">
        <div :class="[{'fs-1' : SwiperData.Type === 'CityCard'}, {'fs-4' : SwiperData.Type === 'MainCard'}, 'fw-bold mt-5 mb-3']">
            {{ SwiperData.Title }}
        </div>
        <swiper :navigation="true" :modules="modules" class="w-100 mx-auto">
                <template v-for="DataCols in SwiperData.Data">
                    <swiper-slide class="d-flex" v-if="SwiperData.Type === 'CityCard'">
                        <div :class="['position-relative', 'overflow-hidden', 'rounded-3', index !== 0 ? 'ms-auto' : '']" style="width: 250px; height: 333px;" v-for="(DataCol, index) in DataCols">
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
                        </div>
                    </swiper-slide>
                    <swiper-slide class="d-flex" v-else>
                        <div :class="['overflow-hidden rounded-3 border', index !== 0 ? 'ms-auto' : '']" style="width: 250px;" v-for="(DataCol, index) in DataCols">
                            <img :src='DataCol.ImgSrc' class="d-block w-100" style="height: 166px;">
                            <div class="d-flex flex-column px-3 py-2 w-100" style="height: 145px;">
                                <div class="fs-12 pb-1">
                                    {{ DataCol.Label }}
                                </div>
                                <div class="fs-15">
                                    {{ DataCol.Title }}
                                </div>
                                <div class="d-flex fs-12 mt-auto pb-1">
                                    <div class="me-1" v-if="DataCol.Num !== ''">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                                                d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                                                d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                                                d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                                                d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                                                d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                                        </svg>
                                    </div>
                                    {{ DataCol.Num }}
                                </div>
                                <div class="fs-6">
                                    {{ DataCol.Price }}
                                </div>
                            </div>
                        </div>
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
import { defineProps } from 'vue';

const props = defineProps({
    SwiperData: Object
})
const modules = [Pagination, Navigation];

</script>

<style>
</style>
