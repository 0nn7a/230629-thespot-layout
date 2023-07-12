<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const language = computed({
  get() {
    return locale.value === "ja-JP" ? "中文" : "日本語";
  },
});
const changeLanguage = () => {
  if (locale.value === "ja-JP") {
    locale.value = "zh-TW";
  } else {
    locale.value = "ja-JP";
  }
};

const toTop = (num) => {
  let appDom = document.querySelector("#app");
  let containerDom = Array.from(document.querySelectorAll("#app > div"));
  let location = num ? containerDom[num].offsetTop : 0;
  appDom.scrollTo({ top: location, behavior: "smooth" });
};

const showFull = ref(false);
const toggleFull = (act) => {
  showFull.value = act;
  let appDom = document.querySelector("#app");
  if (act) {
    appDom.classList.add("remove-scroll");
  } else {
    appDom.classList.remove("remove-scroll");
  }
};

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
    <h1 v-if="!showFull" class="logo">SPOT</h1>

    <nav v-if="showBar" class="header_nav">
      <a href="#home" class="header_nav_item" @click="toTop(0)">
        {{ $t("header.top") }}
      </a>
      <a href="#spot" class="header_nav_item" @click="toTop(5)">
        {{ $t("header.facility") }}
      </a>
      <a href="#Q&A" class="header_nav_item" @click="toTop(7)">Q&A</a>
      <a href="javascript:void(0)" class="header_nav_item">
        {{ $t("header.login") }}
      </a>
      <a href="javascript:void(0)" class="header_nav_item">
        {{ $t("header.signup") }}
      </a>
      <button class="btn-dark" @click="changeLanguage">
        <div style="display: flex; align-items: center">
          {{ language }}
          <span class="btn-dark_icon-arrow" />
        </div>
      </button>
    </nav>

    <button
      v-else-if="!showFull"
      class="header_btn"
      @click="toggleFull(true)"
    ></button>
  </header>
  <transition name="opacity">
    <HeaderFull v-if="showFull" @close-full="toggleFull(false)" />
  </transition>
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
