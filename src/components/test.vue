<template>
  <!-- items -->
  <section class="items">
    <div class="inner clearfix">
      <div class="items-box">
        <img :src="require('@/assets/images/mb01_img.png')" alt="">

        <span class="bar"></span>

        <a href="#">
          <h3>브랜드 스토리</h3>
          <p>
            마시그래이는 표준어로 '마셔라' 라는 <br>
            사투리의 표현을 가져온 것으로 브랜드네임에서부터 <br>
            고객에게 친밀하게 다가가고자 하는 마음을 담았습니다.
          </p>
        </a>
      </div>
      <div class="items-box">

        <!-- item 슬라이드 -->

        <Swiper class="sw-items" :modules="modules" :autoplay="{
                        delay: 1000,
                        disableOnInteraction: false,
                    }" :loop="true" :Navigation="{
                        prevEl: '.sw-items-prev',
                        nextEl: '.sw-items-next'
                    }" :Pagination="{
                        el: '.sw-items-pg'
                    }">

          <SwiperSlide>
            <a href="#" class="items-1"></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" class="items-2"></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" class="items-3"></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" class="items-4"></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="#" class="items-5"></a>
          </SwiperSlide>


          <!-- 이동버튼 -->
          <button class="sw-items-prev"></button>
          <button class="sw-items-next"></button>

          <!-- 콘트롤 -->
          <div class="sw-items-control">
            <!-- Pagination -->
            <div class="sw-items-pg"></div>
          </div>

        </Swiper>

      </div>
      <div class="items-box">
        <a href="#">
          <h3>창업절차</h3>
          <p>체계적인 마시그래이의 <br>
            창업시스템에 대해 알아보세요.
          </p>
        </a>
        <a href="#">
          <h3>창업문의</h3>
          <p>차별화된 Take-out 브랜드<br>
            마시그래이에 대해 알아보세요.
          </p>
        </a>
      </div>
      <div class="items-box">

        <div class="search-left">
        </div>

        <div class="search">

          <h2>
            STORE
          </h2>

          <h3>
            매장
          </h3>

          <p>
            가까운 마시그래이 매장을 <br>
            찾아보세요
          </p>

          <form action="" id="search-form" class="search-form">
            <label for="shop">지점명</label>
            <input type="text" name="shop" id="shop" class="shop">
            <input type="submit" class="search-bt">
          </form>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import {
    Autoplay,
    Navigation,
    Pagination
  } from 'swiper';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Autoplay, Navigation, Pagination]
      }
    }
  }
</script>

<style>
  /* items */
  .items {
    position: relative;
    display: block;
    padding: 100px 0;
  }

  .items-box {
    position: relative;
    display: block;
    width: 50%;
    height: 323px;
    float: left;
    overflow: hidden;
  }

  .items-box:nth-child(1) {
    background: url('@/assets/images/mb01_bg.jpg') no-repeat center;
    background-size: cover;
    text-align: center;
  }

  .items-box:nth-child(1) img {
    margin-top: 65px;
    margin-bottom: 25px;
  }

  .items-box:nth-child(1) span {
    position: relative;
    display: block;
    width: 58px;
    height: 1px;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 35px;
  }

  .items-box:nth-child(1) a {
    position: relative;
    display: block
  }

  .items-box:nth-child(1) a h3 {
    position: relative;
    display: block;
    font-size: 25px;
    color: #fff;
  }

  .items-box:nth-child(1) a p {
    position: relative;
    display: block;
    font-size: 16px;
    color: #fff;
    line-height: 1.3;
  }

  /* 슬라이드 넣기 */

  .sw-items {
    width: 100%;
    height: 100%;
  }

  .sw-items .swiper-slide a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .items-1 {
    background: url('@/assets/images/mb02_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items-2 {
    background: url('@/assets/images/mb03_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items-3 {
    background: url('@/assets/images/mb04_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items-4 {
    background: url('@/assets/images/mb05_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .items-5 {
    background: url('@/assets/images/mb06_bg.jpg') no-repeat center;
    background-size: cover;
  }

  .sw-items-prev {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 14px;
    height: 23px;
    background: url('@/assets/images/btn_arrow2.png') no-repeat 0 0;
    z-index: 9;
    border: 0;
    cursor: pointer;
  }

  .sw-items-next {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 14px;
    height: 23px;
    background: url('@/assets/images/btn_arrow2.png') no-repeat right top;
    z-index: 9;
    border: 0;
    cursor: pointer;
  }

  .sw-items-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: block;
    z-index: 9;
  }

  .sw-items-pg .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 0.5;
    margin: 5px;
    border-radius: 5px;

    transition: all 0.5s;
  }

  .sw-items-pg .swiper-pagination-bullet-active {
    width: 30px;
    background-color: hotpink;
    opacity: 1;
  }


  /* 링크 */

  .items-box:nth-child(3) a {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
  }

  .items-box:nth-child(3) a:first-child {
    background: #f3f3f3 url('@/assets/images/franchise_ico01.png') no-repeat center 60px;
  }

  .items-box:nth-child(3) a:last-child {
    background: #fff url('@/assets/images/franchise_ico02.png') no-repeat center 60px;
  }

  .items-box:nth-child(3) a h3 {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 25px;
    color: #000;

    margin-top: 190px;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
  }


  .items-box:nth-child(3) a p {
    position: relative;
    display: block;
    text-align: center;
    font-size: 16px;
    color: #888;
  }

  .search-left {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    float: left;
    background: url('@/assets/images/store01.jpg') no-repeat left center;
    background-size: cover;
  }

  .search {
    position: relative;
    display: block;
    width: 50%;
    height: 100%;
    background-color: #292929;
    float: right;
    text-align: center;
    padding: 0 35px;
  }


  .search h2 {
    position: relative;
    display: block;
    font-size: 25px;
    color: #ba9b65;
    font-weight: 500;
    margin-top: 60px;
  }

  .search h3 {
    position: relative;
    display: inline-block;
    font-size: 25px;
    color: #ba9b65;
    font-weight: 400;

    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #6a6a6a;
  }

  .search p {
    position: relative;
    display: block;
    font-size: 16px;
    color: #ba9b65;
    font-weight: 400;
    line-height: 20px;

    margin-bottom: 25px;
  }

  .search-form {
    position: relative;
    display: block;
    width: 100%;
    height: 39px;
    background-color: #3e3e3e;
    padding-right: 39px;
  }

  .search-form label {
    display: none;
  }

  .shop {
    position: relative;
    display: block;
    width: 100%;
    line-height: 39px;
    color: #fff;
    background-color: transparent;
    border: 0;

    padding: 0 10px;
  }

  .search-bt {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 39px;
    height: 39px;
    background: url('@/assets/images/btn_store.gif') no-repeat center;
    border: 0;
    font-size: 0;
  }

  /* items PC 영역 */
  /* items 반응형 영역 */
  @media all and (max-width: 1000px) {
    .items {
      padding: 10vw 0;
    }
  }

  @media all and (max-width: 800px) {
    .items-box:nth-child(3) a p {
      font-size: 14px;
    }
  }

  @media all and (max-width: 640px) {
    .items-box {
      width: 100%;
    }

    .items-box:nth-child(3) a p {
      font-size: 16px;
    }
  }
</style>