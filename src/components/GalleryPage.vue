<script setup></script>

<template>
  <div class="gallery_container">
    <div class="gallery_header">
      <h2 class="heading-1">SPOTで集まろう!<br />SPOTでつながろう!</h2>
      <h4 class="heading-3">
        「SPOT」は貸し会議室でもコワーキングスペースでもない，必要なものは全てそろったチームで利用できる1日オフィスです。
      </h4>
      <button class="btn-plus"><span>コンセプト</span></button>
    </div>
    <div class="gallery_images">
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_01.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_02.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_03.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_04.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_05.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_06.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_07.jpg"
      />
      <img
        loading="lazy"
        src="/src/assets/images/gallery/index_img_about_08.jpg"
      />
    </div>
    <p class="plain-text">
      会議室利用やオフィス利用のお仕事後の懇親会等でご飲食いただくことやランチにケータリング等を頼んでいただくことは問題ありませんが、建物との契約上、誕生会、女子会など飲み会利用、パーティ利用、個人でのご予約はお断りさせていただいております。あらかじめご容赦ください。
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";
@import "@/assets/css/mixin";

.gallery {
  &_container {
    padding: 12rem 8rem;
    @media only screen and (max-width: $bp-sm) {
      padding: 12em 5rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 12rem 2rem;
    }
  }

  &_header {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: 1fr max-content;
    gap: 0 4rem;
    justify-items: flex-start;
    align-items: center;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(3, max-content);
      grid-template-columns: 1fr;
      gap: 1rem 0;
    }

    .heading-1 {
      font-size: 5rem;
      font-weight: 800;
      @media only screen and (max-width: $bp-sm) {
        font-size: 3.2rem;
      }
      @media only screen and (max-width: $bp-xs) {
        font-size: 2.8rem;
      }
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    .heading-3 {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    .btn-plus {
      grid-row: 2 / 3;
      grid-column: 2 / -1;
      @media only screen and (max-width: $bp-sm) {
        margin-top: 2rem;
        grid-row: 3 / 4;
        grid-column: 1 / 2;
      }
    }
  }

  &_images {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 5rem 0 3rem;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(4, max-content);
      grid-template-columns: 1fr 1fr;
    }
    img {
      width: 100%;
    }
  }
}

.plain-text {
  position: relative;
  padding-left: 1.5rem;
  &::before {
    content: "※";
    position: absolute;
    top: 0;
    left: 0;
  }
  @media only screen and (max-width: $bp-sm) {
    font-size: 1.2rem;
  }
}
</style>
