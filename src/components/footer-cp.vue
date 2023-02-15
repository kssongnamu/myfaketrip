<template>
    <div class="border-top">
        <footer class="mx-auto py-5" style="max-width: 1060px;">
            <div class="d-flex pb-4 border-bottom info">
                <div class="col">
                    <UlLi :UlData="guide"></UlLi>
                    <div class="mt-3">
                        <span role="button">
                            <button type="button" class="fs-14 p-2 border-1 border-light bg-white rounded-3 fw-bold">
                                <span>1:1 채팅상담</span>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="d-flex col info-nav">
                    <div class="col" v-for="UlData in [introduction, partner, support]">
                        <UlLi :UlData="UlData"></UlLi>
                    </div>
                </div>
            </div>
            <div class="pt-2">
                <div class="d-flex align-items-center mb-2" style="height: 44px;">
                    <div class="d-flex">
                        <div class="p-1 fs-14">이용 약관</div>
                        <div class="p-1 fs-14 fw-bold ms-4">개인정보 처리방침</div>
                        <div class="p-1 fs-14 ms-4">취소 및 환불 정책</div>
                    </div>
                    <div class="d-flex ms-auto info-icon">
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_facebook_20x20_gray_400.svg" alt="icon">
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_naver_20x20_gray_400.svg" alt="icon">
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_instagram_20x20_gray_400.svg" alt="icon">
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_youtube_20x20_gray_400.svg" alt="icon">
                        <div class="mt-2">|</div>
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_appstore_20x20_gray_400.svg" alt="icon">
                        <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_googleplay_20x20_gray_400.svg" alt="icon">
                    </div>
                    <div class="ms-4">
                        <button type="button" class="border-1 border-light rounded-3 bg-white">
                            <img class="m-1" src="https://dffoxz5he03rp.cloudfront.net/icons/ic-md-globe.svg" alt="icon">
                            <span class="m-1" >한국어</span>
                            <img class="m-1" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrow_down_12x12_gray_300.svg" alt="icon">
                        </button>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="fs-12">
                        <p class="m-0">
                            상호명 (주)마이리얼트립 | 
                            대표 이동건 | 
                            개인정보보호책임자 정재훈 | 
                            사업자등록번호 209-81-55339 사업자정보확인 | 
                            통신판매업신고번호 2019-서울서초-0260
                            <br>
                            주소 서울특별시 서초구 강남대로 311, 드림플러스 강남 18~19층 (서초동, 한화생명보험빌딩) | 
                            이메일 help@myrealtrip.com | 
                            광고/제휴 문의 partnership@myrealtrip.com
                            <br><br>
                            자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다. 
                            마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 
                            따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
                        </p>
                    </div>
                    <div class="d-flex">
                        <button type="button" class="border-0 bg-white mt-auto">
                            <img style="width: 56px;" src="https://dffoxz5he03rp.cloudfront.net/etc/img-logo-isms@2x.png" alt="ISMS-P">
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import UlLi from '@/components/ul-li-cp.vue';

const guide = ref({
    Title: '고객지원실 운영안내', 
    Data: [
        '연중무휴 09:00-18:00 (점심시간 12:00-13:00)',
        '주말/공휴일 포함, 한국시간 기준',
        '※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능',
        '유선상담 1670-8208'
    ] 
});
const introduction = ref({Title: '소개', Data: ['회사소개', '채용', '공고']});
const partner = ref({Title: '파트너', Data: ['파트너 등록하기', 'Affiliate 프로그램', '리얼파트너', '파트너 블로그']});
const support =  ref({Title: '지원', Data: ['공지사항/FAQ', '최저가 보장제', '공고']});
</script>