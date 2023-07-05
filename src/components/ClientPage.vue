<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/client/${name}.jpg`, import.meta.url).href;
}

const iconArr = ref([]);
onMounted(() => {
  for (let i = 1; i <= 45; i++) {
    iconArr.value.push(`client-icon-${i}`);
  }
});

const iconList = ref(false);
const openIconList = () => {
  iconList.value = true;
};
</script>

<template>
  <div class="client_container">
    <div class="client_header">
      <h2 class="heading-1">CLIENT</h2>
      <h4 class="heading-3">ご利用実績</h4>
      <br />
      <p class="plain-text">
        スタートアップや大企業・マスコミ関連の撮影など幅広い用途でご利用いただいています。（関連HOLDER施設の事例含む）
      </p>
    </div>
    <div class="client_icons" :class="iconList ? 'client_icons_open' : ''">
      <img
        v-for="icon in iconArr"
        :key="icon"
        :src="getImageUrl(icon)"
        loading="lazy"
      />
      <a
        v-if="!iconList"
        href="javascript:void(0)"
        class="client_btn"
        @click="openIconList"
      >
        <span>もっと見る ▾</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.client {
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
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1rem;
    height: 15vw;
    overflow: hidden;
    @media only screen and (max-width: $bp-sm) {
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 0.5rem;
      height: 28vw;
    }
    @media only screen and (max-width: $bp-xs) {
      height: 50vw;
    }
    img {
      width: 100%;
    }
  }
  &_icons_open {
    height: auto;
  }
  &_btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8rem 1rem 1rem;
    background-image: linear-gradient(
      to top,
      #fff 0%,
      rgba(#fff, 0.5) 70%,
      transparent 100%
    );
    &:hover span {
      color: var(--spot-light-text-color);
    }
    span {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--spot-base-text-color);
      transition: 0.2s all ease-out;
    }
  }
}
</style>
