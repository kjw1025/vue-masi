// html, css, js 로딩완료
$(document).ready(function () {
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

  // 모바일 메뉴 기능
  // 1. 펼침메뉴 기능
  let mb_menu_li = $('.mb-menu > li');
  let mb_mainmenu = $('.mb-menu > li > a');
  let mb_submenu = $('.mb-submenu');

  $.each(mb_mainmenu, function(index){
    $(this).click(function(event){
      // href 를 막아준다.
      event.preventDefault();
     
      // 클릭하면 현재 포커스 클래스가 있는지 검토
      let temp = $(this).hasClass('mb-menu-focus');

      if(temp) {
        // 포커스 색상 적용해제
        $(this).removeClass('mb-menu-focus');
        // 아이콘 모션 해제
        $(this).removeClass('mb-icon-rot');

        // 펼쳐진 해당 서브메뉴를 닫아준다.
        mb_submenu.eq(index).hide();
      }else{
        
        // 일단 모두 숨겨라
        mb_submenu.hide();
        
        // 일단 모든 포커스 색상을 해제한다.
        mb_mainmenu.removeClass('mb-menu-focus');

        // 일단 아이콘을 원래대로 돌려라
        mb_mainmenu.removeClass('mb-icon-rot');

        // 포커스 색상 적용하기
        $(this).addClass('mb-menu-focus');          
        // 아이콘을 돌리자.    
        $(this).addClass('mb-icon-rot');

        // 클릭된 번호만 보여라
        mb_submenu.eq(index).show();
      }

    });
  });

  // 모바일 메뉴 보이기 기능
  let mb_dim = $('.mb-dim'); // 가림막
  let mb_bt = $('.mb-bt'); // 햄버거
  mb_bt.click(function(event){
    // a 태그의 href 를 막는다.
    event.preventDefault();
    // 배경 보여주기
    mb_dim.show();
    // 메뉴 보여지는 과정
    mb_wrap.addClass('mb-wrap-open')
  });

  // 모바일 메뉴 숨기기 기능
  let mb_close = $('.mb-close');
  let mb_wrap = $('.mb-wrap');
  mb_close.click(function(event){
    // a 태그의 href 막아준다.
    event.preventDefault();
    
    // 배경을 숨김다.
    mb_dim.hide();

    // 주메뉴 색상을 제거한다.
    mb_mainmenu.removeClass('mb-menu-focus');
    // 서브메뉴 모두 닫는다.
    mb_submenu.hide();
    // 사라지는 모션 실행
    mb_wrap.removeClass('mb-wrap-open');
  });

  // 반응형 처리
  $(window).resize(function(){
    // 화면의 너비
    let temp = $(window).width();
    if(temp > 760) {
      mb_dim.hide();
      mb_wrap.removeClass('mb-wrap-open');
      mb_mainmenu.removeClass('mb-menu-focus');
      mb_mainmenu.removeClass('mb-icon-rot');
      mb_submenu.hide();
    }
  });

  // 위로가기 기능
  let go_top = $('.gotop');
  go_top.click(function(){
    $('html').animate({scrollTop:0}, 1000);
  });

});

// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });

  // items 슬라이드
  new Swiper('.sw-items', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },

    pagination: {
      el: '.sw-items-pg'
    }

  });

  // Bevarage 슬라이드
  new Swiper('.sw-bevarage', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-bevarage-prev',
      nextEl: '.sw-bevarage-next'
    },

    pagination: {
      el: '.sw-bevarage-pg',
      type: 'fraction'
    }
  });

  // 대리점 정보를 생성하는 객체생성함수
  let storeData = [
    {
      link: '#',
      title: '합천점',
      pic: 'shop1.jpg'
    },
    {
      link: '#',
      title: '신천점',
      pic: 'shop2.jpg'
    },
    {
      link: '#',
      title: '복현푸르지오점',
      pic: 'shop3.jpg'
    },
    {
      link: '#',
      title: '대곡점',
      pic: 'shop4.jpg'
    }
  ];

  function StoreMake(_link, _title, _pic) {
    this.link = _link;
    this.title = _title;
    this.pic = _pic;
  }

  let storeArr = [
    new StoreMake(storeData[0].link, storeData[0].title, storeData[0].pic),
    new StoreMake(storeData[1].link, storeData[1].title, storeData[1].pic),
    new StoreMake(storeData[2].link, storeData[2].title, storeData[2].pic),
    new StoreMake(storeData[3].link, storeData[3].title, storeData[3].pic)
  ];

  // 화면에 출력함수
  function storeShow(_tag, _obj) { 
    let html = `
      <a href="${_obj.link}">
        <img src="images/${_obj.pic}">
        <span>${_obj.title}</span>
      </a>
    `;   
    $(_tag).html(html);
  }
  storeShow('#store-1', storeArr[0]);
  storeShow('#store-2', storeArr[1]);
  storeShow('#store-3', storeArr[2]);
  storeShow('#store-4', storeArr[3]);


}