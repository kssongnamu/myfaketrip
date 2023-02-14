<template>
    <div>
        <div class="border-bottom">
            <header class="mx-auto" style="max-width: 1060px;">
                <div class="d-flex py-3 align-items-center ">
                    <a href="/" class="fs-1 fw-bold text-decoration-none">
                        <span class="text-dark">my</span>
                        <span class="text-primary">fake</span>
                        <span class="text-dark">trip</span>
                    </a>
                    <div class="input-group ms-3 " style="width: 340px; height: 48px;">
                        <span class="material-icons input-group-text fs-3 p-2" id="inputGroup-sizing-lg">search</span>
                        <input id="globalSearchInput" placeholder="도시나 상품을 검색해보세요" class="form-control" value="">
                    </div>
                    <div class="ms-auto text-end">
                        <button type="button" class="btn btn-light me-3">파트너 등록하기</button>
                        <button type="button" class="btn btn-light me-3">로그인</button>
                        <button type="button" class="btn btn-outline-primary me-3">회원가입</button>
                    </div>
                </div>
                <div class="justify-content-start py-2 align-items-center mx-auto">
                    <a href="/" class="fs-5 fw-bold text-decoration-none me-3">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/69_original_1651050188.png?1651050188" class="mb-1 me-2"  style="width: 25px; height: 25px;">
                        <span class="text-dark">항공권</span>
                    </a>
                    <a href="/" class="fs-5 fw-bold text-decoration-none me-3">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/79_original_1651050471.png?1651050471" class="mb-1 me-2"  style="width: 25px; height: 25px;">
                        <span class="text-dark">숙소</span>
                    </a>
                    <a href="/" class="fs-5 fw-bold text-decoration-none me-3">
                        <img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/1265_original_1676017530.png?1676017530" class="mb-1 me-2"  style="width: 25px; height: 25px;">
                        <span class="text-dark">AI 여행플래너</span>
                    </a>
                </div>
            </header>
        </div>
        <main>
            <section class="mx-auto mb-5" style="max-width: 1060px;">
                <SwiperSection :SwiperData="CityCard"></SwiperSection>
            </section>
            <section class="mx-auto mb-5" style="max-width: 1060px;">
                <SwiperSection :SwiperData="Banner"></SwiperSection>
            </section>
            <section class="mx-auto mb-5" style="max-width: 1060px;">
                <SwiperSection :SwiperData="MAIN_TOPN"></SwiperSection>
            </section>
        </main>
        <div class="border-top">
            <footer class="mx-auto py-5" style="max-width: 1060px;">
                <div class="d-flex pb-4 border-bottom">
                    <div class="col">
                        <span class="fs-18">고객지원실 운영안내</span>
                        <ul class="list-group mt-2">
                            <li class="list-group-item border-0 p-0 fs-14">연중무휴 09:00-18:00 (점심시간 12:00-13:00)</li>
                            <li class="list-group-item border-0 p-0 fs-14">주말/공휴일 포함, 한국시간 기준</li>
                            <li class="list-group-item border-0 p-0 fs-14">※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능</li>
                            <li class="list-group-item border-0 p-0 fs-14">유선상담 1670-8208</li>
                        </ul>
                        <div class="mt-3">
                            <span role="button">
                                <button type="button" class="fs-14 p-2 border-1 bg-white rounded-3 fw-bold">
                                    <span>1:1 채팅상담</span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div class="d-flex col info-nav">
                        <div class="col">
                            <span class="fs-18">소개</span>
                            <ul class="list-group">
                                <li class="list-group-item">회사소개</li>
                                <li class="list-group-item">채용</li>
                                <li class="list-group-item">공고</li>
                            </ul>
                        </div>
                        <div class="col">
                            <span class="fs-18">파트너</span>
                            <ul class="list-group">
                                <li class="list-group-item border-0 p-0 fs-14">파트너 등록하기</li>
                                <li class="list-group-item border-0 p-0 fs-14">Affiliate 프로그램</li>
                                <li class="list-group-item border-0 p-0 fs-14">리얼파트너</li>
                                <li class="list-group-item border-0 p-0 fs-14">파트너 블로그</li>
                            </ul>
                        </div>
                        <div class="col">
                            <span class="fs-18">지원</span>
                            <ul class="list-group">
                                <li class="list-group-item border-0 p-0 fs-14">공지사항/FAQ</li>
                                <li class="list-group-item border-0 p-0 fs-14">최저가 보장제</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="pt-2">
                    <div class="d-flex align-items-center" style="height: 44px;">
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
                            <button type="button" class="border-1 bg-white">
                                <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic-md-globe.svg" alt="icon">
                                <span>한국어</span>
                                <img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrow_down_12x12_gray_300.svg" alt="icon">
                            </button>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div>
                            <p>
                                상호명 (주)마이리얼트립 | 
                                대표 이동건 | 
                                개인정보보호책임자 정재훈 | 
                                사업자등록번호 209-81-55339사업자정보확인 | 
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
                        <div class="css-xniy3s--ISMS--Container e1mmjwgx3">
                            <button type="button">
                                <img src="https://dffoxz5he03rp.cloudfront.net/etc/img-logo-isms@2x.png" alt="ISMS-P">
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import SwiperSection from '@/components/swiper-section.vue';

const CityCard = ref({
        Type: 'CityCard',
        Title: '여행이 돌아왔어요!',
        Data: [
            [{
                Name: '오사카',
                Num: '370여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4720_large_square_1535703132.jpg?1535703132'
            },
            {
                Name: '멜버른',
                Num: '220여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4752_large_square_1536110340.jpg?1536110340'
            },
            {
                Name: '파리',
                Num: '850여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4747_large_square_1536047752.jpg?1536047752'
            },
            {
                Name: '제주도',
                Num: '1,490여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304'
            }],
            [{
                Name: '라스베가스',
                Num: '370여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4654_large_square_1535621335.jpg?1535621335'
            },
            {
                Name: '바르셀로나',
                Num: '340여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4672_large_square_1535678422.jpg?1535678422'
            },
            {
                Name: '싱가포르',
                Num: '240여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4749_large_square_1536048461.jpg?1536048461'
            },
            {
                Name: '런던',
                Num: '530여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4750_large_square_1536049651.jpg?1536049651'
            }],
            [{
                Name: '피렌체',
                Num: '260여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4711_large_square_1535695390.jpg?1535695390'
            },
            {
                Name: '로마',
                Num: '350여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4751_large_square_1536050273.jpg?1536050273'
            },
            {
                Name: '옥스포드',
                Num: '50여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/610_large_square_1472534358.jpg?1472534358'
            },
            {
                Name: '방콕',
                Num: '680여 개의 여행상품',
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4652_large_square_1535619901.jpg?1535619901'
            }]
        ]
})
const Banner = ref({
    Type: 'Banner',
    Data: [
        'https://d2ur7st6jjikze.cloudfront.net/cms/2419_original_1676329973.jpg?1676329973',
        'https://d2ur7st6jjikze.cloudfront.net/cms/2346_original_1673232152.jpg?1673232152',
        'https://d2ur7st6jjikze.cloudfront.net/cms/2445_original_1675747747.jpg?1675747747',
        'https://d2ur7st6jjikze.cloudfront.net/cms/2442_original_1676268122.png?1676268122',
        'https://d2ur7st6jjikze.cloudfront.net/cms/2338_original_1675604378.jpg?1675604378',
        'https://d2ur7st6jjikze.cloudfront.net/cms/2317_original_1676261831.jpg?1676261831',
        'https://d2ur7st6jjikze.cloudfront.net/cms/1579_original_1676249130.jpg?1676249130',
        'https://d2ur7st6jjikze.cloudfront.net/cms/1693_original_1675747749.jpg?1675747749',
        'https://d2ur7st6jjikze.cloudfront.net/cms/1648_original_1673232213.jpg?1673232213'
    ]
})
const MAIN_TOPN = ref({
        Type: 'MainCard',
        Title: '실시간 베스트 상품',
        Data: [
            [{
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/70816/737984_medium_1673497752.jpg?1673497752',
                Label: '티켓/패스 ・ 서울',
                Title: '[QR바로입장] 롯데월드 어드벤처 종합이용권',
                Num: '2,117',
                Price: '32,495원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/113325/763093_medium_1675643698.jpg?1675643698',
                Label: '티켓/패스 ・ 서울',
                Title: '[서울 잠실] 롯데월드 어드벤처 매직패스 프리미엄 패키지',
                Num: '28',
                Price: '85,500원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/102916/766230_medium_1676214240.jpg?1676214240',
                Label: '티켓/패스 ・ 제주도',
                Title: '[제주] 제주투어패스 48시간 프리패스권 ',
                Num: '1,647',
                Price: '23,655원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/50211/342328_medium_1618391385.jpg?1618391385',
                Label: '티켓/패스 ・ 오사카',
                Title: '오사카 유니버셜 스튜디오 재팬 입장권 (1일권)',
                Num: '6,685',
                Price: '54,900원 / 1인'
            }],
            [{
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/129438/759317_medium_1675066609.jpg?1675066609',
                Label: '가이드 투어 ・ 부여',
                Title: '[충남/부여] 봄으로 가는 백제의 별밤 천문캠프 in 롯데리조트 부여',
                Num: '',
                Price: '385,000원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/116114/680565_medium_1663230218.jpg?1663230218',
                Label: '티켓/패스 ・ 오사카',
                Title: '[QR 교환권] 오사카 주유패스 1일권',
                Num: '16,896',
                Price: '26,080원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/53031/327124_medium_1668650056.jpg?1668650056',
                Label: '여행편의 ・ 도쿄',
                Title: '[공항유심] 일본유심 4G 무제한 Softbank,IIJ망',
                Num: '1,268',
                Price: '3,500원 / 1인'
            },
            {
                ImgSrc: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/7797/43712_medium_1525337628.jpg?1525337628',
                Label: '가이드 투어 ・ 오사카',
                Title: '#오사카에 가는 사람들',
                Num: '4',
                Price: '298,000원 / 1인'
            }]
        ]
})

</script>

<style>
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
.info-nav li {
    height: 32px;
    align-items: center;
    border: 0;
    padding: 0;
    color: #666d75;
    font-size: 14px;
    font-weight: 500;
}
.info-nav ul {
    margin-top: 10px;
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