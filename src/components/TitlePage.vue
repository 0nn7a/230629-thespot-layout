<script setup></script>

<template>
  <div class="title_container">
    <img
      src="/src/assets/images/title_image.svg"
      class="title_img"
      loading="lazy"
    />
    <h1 class="title_text" v-html="$t('title.title')"></h1>
    <div class="title_soon">
      <h5 class="heading_badge">COMING SOON</h5>
      <p class="plain-text">
        {{ $t("title.comingSoon") }}
      </p>
    </div>
    <div class="title_company">
      <h5 class="heading_badge">{{ $t("title.badge") }}</h5>
      <div class="title_company_logos">
        <img
          src="/src/assets/images/company/index_img_case_basecorp.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_shiseido.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_cyberagent.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_dentsu.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_honda.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_tvasahi.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_yahoo.jpg"
          loading="lazy"
        />
        <img
          src="/src/assets/images/company/index_img_case_recruit.jpg"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";
@import "@/assets/css/mixin";

.title {
  &_container {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-template-columns: minmax(30%, 490px) minmax(50%, 1fr);
    align-items: center;
    gap: 0 10%;
    padding: 5rem 8rem;

    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(4, max-content);
      grid-template-columns: 1fr;
      padding: 5rem 5rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 4rem 2rem;
    }

    @media only screen and (min-width: $bp-lg) {
      padding: 6rem 10rem;
    }
  }

  &_img {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    width: 100%;
    margin-bottom: 6rem;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }
  }
  &_text {
    grid-column: 2 / 3;
    width: 100%;
    font-size: 3.4vw;
    font-weight: 800;
    margin-bottom: 6rem;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 1 / 2;
      grid-column: 1 / -1;
      font-size: 6.4vw;
    }
    @media only screen and (max-width: $bp-xs) {
      font-size: 7vw;
    }
  }

  &_soon {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6rem;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 3 / 4;
      grid-column: 1 / -1;
    }
  }
  &_company {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    justify-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 4 / 5;
      grid-column: 1 / -1;
    }
    &_logos {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 2rem;
      width: 100%;
      @media only screen and (max-width: $bp-sm) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
      }
      @media only screen and (max-width: $bp-xs) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(2, 1fr);
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
