<script setup>
const showBar = ref(true);
const pageWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", function () {
    pageWidth.value = window.innerWidth;
  });
});
watchEffect(() => {
  if (pageWidth.value <= 768) {
    showBar.value = false;
  } else {
    showBar.value = true;
  }
});
</script>

<template>
  <header class="header">
    <h1 class="header_logo">SPOT</h1>
    <nav v-if="showBar" class="header_nav">
      <a href="javascript:void(0)" class="header_nav_item">トップ</a>
      <a href="javascript:void(0)" class="header_nav_item">施設一覧</a>
      <a href="javascript:void(0)" class="header_nav_item">Q&A</a>
      <a href="javascript:void(0)" class="header_nav_item">ログイン</a>
      <a href="javascript:void(0)" class="header_nav_item">新規登録</a>
      <button class="btn-dark">
        <div style="display: flex; align-items: center">
          for OWNER
          <span class="btn-dark_icon-arrow" />
        </div>
      </button>
    </nav>
    <button v-else class="header_btn"></button>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";
@import "@/assets/css/mixin";

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5rem;
  @media only screen and (max-width: $bp-sm) {
    padding: 5rem 4rem;
  }
  @media only screen and (max-width: $bp-xs) {
    padding: 5rem 2.5rem;
  }
  @media only screen and (min-width: $bp-lg) {
    padding: 6rem;
  }
  &_logo {
    @include chatBox;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 1px;
    box-shadow: -0.5rem -0.5rem 0 var(--spot-title-subtext-color);
    transform: rotate(-10deg) skewx(-10deg);
  }

  &_nav {
    display: flex;
    align-items: center;
    gap: 3rem;

    &_item {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--spot-base-text-color);
      transition: 0.3s all ease-in;
      &:hover {
        color: var(--spot-light-text-color);
        text-shadow: 0 0 1.2rem var(--spot-base-shadow-color);
        transform: translateY(-1px);
      }
    }
  }

  &_btn {
    display: block;
    width: 83px;
    height: 40px;
    background: url("/src/assets/images/btn_spmenu_top_01.svg") no-repeat 0 0;
    background-size: contain;
    border: none;
    cursor: pointer;
    transition: 0.2s opacity ease;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
