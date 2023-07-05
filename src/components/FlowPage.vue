<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/flow/${name}.svg`, import.meta.url).href;
}
const list = reactive({
  data: [
    {
      header: "index_img_flow_no_01",
      title: "Webからご予約",
      img: "index_img_flow_01",
    },
    {
      header: "index_img_flow_no_02",
      title: "入館方法を確認",
      img: "index_img_flow_02",
    },
    {
      header: "index_img_flow_no_03",
      title: "SPOTご利用",
      img: "index_img_flow_03",
    },
    {
      header: "index_img_flow_no_04",
      title: "お支払い",
      img: "index_img_flow_04",
    },
  ],
});
</script>

<template>
  <div class="flow_container">
    <div class="flow_header">
      <h2 class="heading-1">FLOW</h2>
      <h4 class="heading-3">ご利用の流れ</h4>
      <br />
      <p class="plain-text remark-text">
        ご利用の流れは、以下の流れです。会議室利用やオフィス利用の法人向けに後払い可能なので安心です。
      </p>
      <ul class="flow_list">
        <li v-for="item in list.data" :key="item.img" class="flow_item">
          <img
            class="flow_item_header"
            :src="getImageUrl(item.header)"
            loading="lazy"
          />
          <h5 class="heading-5">{{ item.title }}</h5>
          <img
            class="flow_item_img"
            :src="getImageUrl(item.img)"
            loading="lazy"
          />
        </li>
      </ul>
      <p class="plain-text remark-text">
        キャンセルはご利用の4日前まで受け付けています。ご利用4日前までのキャンセル費用はかかりません。
      </p>
      <p class="plain-text remark-text">
        <a href="javascript:void(0)" class="link-line">利用規約</a
        >に同意の上、ご予約をお願いします。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.flow {
  &_container {
    padding: 0 8rem 12rem;
    @media only screen and (max-width: $bp-sm) {
      padding: 0 5rem 12rem;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 0 2rem 12rem;
    }
  }
  &_header {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }

  &_list {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    padding: 8rem 0 2rem;
    margin-bottom: 3rem;
    @media only screen and ((max-width: $bp-sm) or (min-width: $bp-lg)) {
      overflow-x: auto;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, minmax(20rem, 1fr));
    }
  }
  &_item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 6rem 3rem 5rem;
    border: 3px solid var(--spot-base-text-color);
    @media only screen and (max-width: $bp-sm) {
      padding: 6rem 1.5rem 5rem;
    }
    &_header {
      position: absolute;
      top: 0;
      left: 50%;
      padding: 0 1.5rem;
      background-color: var(--spot-base-background-color);
      transform: translate(-50%, -50%);
    }
    &_img {
      height: 7.2rem;
    }
  }
}
</style>
