<script setup></script>

<template>
  <div class="feature_container">
    <div class="feature_header">
      <h2 class="heading-1">FEATURE</h2>
      <h4 class="heading-3">{{ $t("feature.description") }}</h4>
    </div>
    <div class="feature_icons">
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_01.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.wifi") }}</h5>
        <p class="plain-text">
          {{ $t("feature.wifiDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_02.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.door") }}</h5>
        <p class="plain-text">{{ $t("feature.doorDes") }}</p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_03.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.sofa") }}</h5>
        <p class="plain-text">
          {{ $t("feature.sofaDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_04.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.traffic") }}</h5>
        <p class="plain-text">
          {{ $t("feature.trafficDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_05.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.screen") }}</h5>
        <p class="plain-text">
          {{ $t("feature.screenDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_06.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.pay") }}</h5>
        <p class="plain-text">
          {{ $t("feature.payDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_07.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.drink") }}</h5>
        <p class="plain-text">{{ $t("feature.drinkDes") }}</p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_08.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.item") }}</h5>
        <p class="plain-text">
          {{ $t("feature.itemDes") }}
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_09.svg"
          loading="lazy"
        />
        <h5 class="heading-5">{{ $t("feature.order") }}</h5>
        <p class="plain-text">
          {{ $t("feature.orderDes") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.feature {
  &_container {
    padding: 12rem 8rem 0;
    @media only screen and (max-width: $bp-sm) {
      padding: 12rem 5rem 0;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 12rem 2rem 0;
    }
  }
  &_header {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  &_icons {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 7vw 5vw;
    padding: 3rem;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(2, 1fr);
      padding: 3rem 0;
    }
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem 0;
      img {
        height: 80px;
        width: 80px;
      }
      .heading-5 {
        text-align: center;
      }
    }
  }
}
</style>
