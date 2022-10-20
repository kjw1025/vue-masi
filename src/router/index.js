import { createRouter, createWebHistory} from 'vue-router'

// router 는 링크 기능이다. 
// 모든 vue 에서 사용하기 위해서 export 하겠다.
// router 라는 객체에다가 기능을 담겠다.
const router = createRouter({
  
  // 웹브라우저 주소창의 내용을 깨끗하게 (# 없게 보이도록)
  history: createWebHistory(),
  // {path:'/home', name: 'Home', component: HomeView }
  // {path:'/good', name: 'Good', component: GoodView }
  routes: []

});

// 외부로 내보내서 사용하도록 하겠다.
export default router;