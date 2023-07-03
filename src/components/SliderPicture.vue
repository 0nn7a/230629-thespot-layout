<script setup></script>

<template>
  <div class="slider_container">
    <div class="slider_bg">
      <img src="/src/assets/images/index_bg_hts_01.jpg" />
      <img src="/src/assets/images/index_bg_hts_01.jpg" />
    </div>
    <div class="slider_textarea">
      <div class="slider_textarea_set">
        <img src="/src/assets/images/index_img_hts_01.svg" />
        <img src="/src/assets/images/index_img_hts_02.svg" />
      </div>
      <div class="slider_textarea_set">
        <img src="/src/assets/images/index_img_hts_01.svg" />
        <img src="/src/assets/images/index_img_hts_02.svg" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.slider {
  &_container {
    position: relative;
    display: flex;
    min-height: 45vw;
    overflow-x: hidden;
    @media only screen and (max-width: $bp-sm) {
      min-height: 90vw;
    }
  }
  &_bg {
    display: flex;
    height: 100%;
    animation: scroll-bg 60s linear infinite;
    img {
      height: 100%;
    }
  }

  &_textarea {
    position: absolute;
    top: 50%;
    left: 0;
    display: flex;
    align-items: center;
    transform: translate(0, -50%);
    animation: scroll-text 30s linear infinite;
    &_set {
      display: flex;
      gap: 0 5rem;
      padding-left: 5rem;
      img {
        height: 5vw;
        @media only screen and (max-width: $bp-sm) {
          height: 10vw;
        }
      }
    }
  }
}
@keyframes scroll-bg {
  0% {
    transform: translateX(-0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes scroll-text {
  0% {
    transform: translate(0, -50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
