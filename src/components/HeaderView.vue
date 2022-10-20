<template>
   <!-- header -->
    <header class="header">
      <div class="inner">

        <div class="header-top clearfix">
          <ul class="h-sns-list">
            <li><a href="#" class="icon-bg">blog</a></li>
            <li><a href="#" class="icon-is">instagram</a></li>
            <li><a href="#" class="icon-fb">facebook</a></li>
          </ul>
        </div>

        <div class="header-main clearfix">
          <a href="index.html" class="logo">마시그래이</a>

          <div class="gnb">

            <ul class="menu">
              <li v-for="(item, index) in menudata" :key="index">
                <a v-bind:href="item.mainlink">{{item.mainstr}}</a>               

                <ul class="submenu">
                  <li v-for="(subitem, subindex) in item.sub" :key="subindex">
                    <a :href="subitem.sublink">{{subitem.substr}}</a>
                  </li>
                </ul>

              </li>
            </ul>

          </div>
        </div>
      </div>
    </header>
</template>

<script>
import $ from 'jquery';
import { computed, onUpdated } from 'vue';

import { useStore } from 'vuex'
export default {
  
  setup(){
    // vuex 의 모든 기능을 쓰려고 생성
    const store = useStore();
    // vuex 의 state 변화 감시
    const menudata = computed( () => store.getters.getMenuData );

    onUpdated(() => {
      // 메인 메뉴 기능
      let header = $('.header');
      let header_top = $('.header-top');

      let header_main = $('.header-main');
      let gnb = $('.gnb');
      gnb.mouseenter(function () {
        header_main.addClass('header-main-show');
      });
      gnb.mouseleave(function () {
        header_main.removeClass('header-main-show');
      });

      // 스크롤시 기능
      $(window).scroll(function () {
        // 스크롤바의 위치를 파악한다.
        let temp = $(window).scrollTop();
        // .header-top 숨기기
        if (temp > 0) {
          header.addClass('header-fix');
          header_top.addClass('header-top-close');
        } else {
          header.removeClass('header-fix');
          header_top.removeClass('header-top-close');
        }

      });

    });    
    
    return {    
      menudata  
    }
  }
}
</script>

<style scoped>

/* header */
.header {
  position: relative;
  display: block;
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-fix {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}

.header .inner {
  max-width: 1200px;
  background-color: #fff;
}

.header .inner::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: block;

  width: 100vw;
  height: 100%;
  background-color: #fff;

}


.header-top {
  position: relative;
  display: block;
  padding-top: 20px;
}

.header-top-close {
  display: none;
}


.h-sns-list {
  position: relative;
  display: block;
  float: right;

  overflow: hidden;
}

.h-sns-list li {
  position: relative;
  display: block;
  float: left;
  margin-left: 8px;
}

.h-sns-list li:first-child {
  margin-left: 0;
}

.h-sns-list li a {
  position: relative;
  display: block;
  width: 23px;
  height: 23px;
  font-size: 0;
}

.icon-bg {
  background: url('@/assets/images/sns_blog.png') no-repeat center;
  background-size: cover;
}

.icon-is {
  background: url('@/assets/images/sns_insta.png') no-repeat center;
  background-size: cover;
}

.icon-fb {
  background: url('@/assets/images/sns_facebook.png') no-repeat center;
  background-size: cover;
}

.header-main {
  position: relative;
  display: block;
  padding: 20px 0;

  height: 87px;
  overflow: hidden;
  transition: height 0.5s;
}

.header-main-show {
  height: 258px;
}

.logo {
  position: relative;
  display: block;
  width: 200px;
  height: 47px;
  background: url('@/assets/images/logo.png') no-repeat center;
  background-size: contain;
  font-size: 0;
  float: left;
}

.gnb {
  position: relative;
  display: block;
  float: right;
}

.menu {
  position: relative;
  display: block;

  font-size: 0;
  text-align: center;
}

.menu>li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 0 40px;
}

.menu>li:last-child {
  padding-right: 0;
}

.menu>li>a {
  position: relative;
  display: block;
  font-size: 18px;
  color: #333;

  line-height: 47px;
}

.submenu {
  position: relative;
  display: block;
  padding: 20px 0;

}

.submenu li {
  position: relative;
  display: block;

  line-height: 30px;
}

.submenu li a {
  position: relative;
  display: block;
  font-size: 14px;
  color: #999;
}

@media all and (max-width:1080px) {
  .menu>li {
    padding: 0 30px;
  }
}

@media all and (max-width: 960px) {
  .menu>li {
    padding: 0 20px;
  }
}

@media all and (max-width: 850px) {
  .logo {
    width: 140px;
  }

  .menu>li>a {
    font-size: 16px;
  }

  .submenu li a {
    font-size: 13px;
  }
}

@media all and (max-width: 760px) {
  .menu>li {
    padding: 0 15px;
  }

  .mb-dim {
    display: none;
  }

}

@media all and (max-width: 700px) {
  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .header-top {
    display: none;
  }

  .header-main {
    height: 81px;
  }

  .gnb {
    display: none;
  }

}

</style>