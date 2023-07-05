<script setup>
const emit = defineEmits(["closeFull"]);
const sendClose = () => {
  emit("closeFull");
};

const toTop = (num) => {
  sendClose();
  let appDom = document.querySelector("#app");
  let containerDom = Array.from(document.querySelectorAll("#app > div"));
  let location = num ? containerDom[num].offsetTop : 0;
  appDom.scrollTo({ top: location, behavior: "smooth" });
};
</script>

<template>
  <nav class="full_nav">
    <button class="btn-exit" @click="sendClose"></button>

    <a href="#home" class="full_nav_item" @click="toTop(0)">トップ</a>
    <a href="#spot" class="full_nav_item" @click="toTop(5)">施設一覧</a>
    <a href="javascript:void(0)" class="full_nav_item">Q&A</a>
    <a href="javascript:void(0)" class="full_nav_item">ログイン</a>
    <a href="javascript:void(0)" class="full_nav_item">新規登録</a>
    <button class="btn-dark">
      <div style="display: flex; align-items: center">
        for OWNER
        <span class="btn-dark_icon-arrow" />
      </div>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";
@import "@/assets/css/mixin";

.full {
  &_nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10rem 6rem;
    background-color: var(--spot-base-background-color);
    &_item {
      position: relative;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--spot-icon-color);
      padding: 2rem 0;
      border-bottom: 1px solid #e6e6e6;
      transition: 0.3s all ease-in;
      &:hover {
        color: var(--spot-light-text-color);
        text-shadow: 0 0 1.2rem var(--spot-base-shadow-color);
      }
      &::after {
        content: "▶";
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 0.8rem;
        transform: translate(-50%, -50%);
      }
    }
  }
}
.btn-dark {
  align-self: flex-start;
  margin-top: 3rem;
}
.btn-exit {
  position: absolute;
  top: 3.5rem;
  right: 4.5rem;
  height: 5rem;
  width: 5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    border-top: 0.35rem solid var(--spot-base-text-color);
    transition: all 0.3s ease-out;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover::before,
  &:hover::after {
    border-color: var(--spot-light-text-color);
  }
}
</style>
