<template>
    <div>
        <header class="border-bottom mx-auto" style="max-width: 1060px;">
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
        <main>
            <section class="mx-auto" style="max-width: 1060px;">
                <div class="fs-1 fw-bold mt-5 mb-3">
                    여행이 돌아왔어요!
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="../assets/las_vegas.jpg" class="d-block w-100">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/las_vegas.jpg" class="d-block w-100">
                        </div>
                        <div class="carousel-item">
                        <img src="../assets/las_vegas.jpg" class="d-block w-100">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </main>
        <footer>
            footer
        </footer>
</div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style>

</style>