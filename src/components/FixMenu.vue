<template>
  <!-- 오른쪽 고정메뉴 -->
  <div class="fix-menu">
    <a href="#"><img :src="require('@/assets/images/fix_1.png')" alt="케이터링"></a>
    <a href="#"><img :src="require('@/assets/images/fix_2.png')" alt="창업안내"></a>
    <a href="#"><img :src="require('@/assets/images/fix_3.png')" alt="전화상담"></a>
    <a href="#"><img :src="require('@/assets/images/fix_4.png')" alt="고객상담"></a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* 고정메뉴 */
.fix-menu {
  position: fixed;
  right: 10px;
  top: 200px;
  display: block;
  z-index: 99999;
}

.fix-menu a {
  position: relative;
  display: block;
  margin-bottom: 10px;
}

@media all and (max-width:700px) {
  .fix-menu {
    display: none;
  }
}
</style>