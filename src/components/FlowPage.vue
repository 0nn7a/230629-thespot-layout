<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/flow/${name}.svg`, import.meta.url).href;
}
const list = reactive({
  data: [
    {
      header: "index_img_flow_no_01",
      title: "title1",
      img: "index_img_flow_01",
    },
    {
      header: "index_img_flow_no_02",
      title: "title2",
      img: "index_img_flow_02",
    },
    {
      header: "index_img_flow_no_03",
      title: "title3",
      img: "index_img_flow_03",
    },
    {
      header: "index_img_flow_no_04",
      title: "title4",
      img: "index_img_flow_04",
    },
  ],
});
</script>

<template>
  <div class="flow_container">
    <div class="flow_header">
      <h2 class="heading-1">FLOW</h2>
      <h4 class="heading-3">{{ $t("flow.description") }}</h4>
      <br />
      <p class="plain-text remark-text">
        {{ $t("flow.remark") }}
      </p>
      <ul class="flow_list">
        <li v-for="item in list.data" :key="item.img" class="flow_item">
          <img
            class="flow_item_header"
            :src="getImageUrl(item.header)"
            loading="lazy"
          />
          <h5 class="heading-5">{{ $t(`flow.${item.title}`) }}</h5>
          <img
            class="flow_item_img"
            :src="getImageUrl(item.img)"
            loading="lazy"
          />
        </li>
      </ul>
      <p class="plain-text remark-text">
        {{ $t("flow.remark2") }}
      </p>
      <p class="plain-text remark-text">
        <a href="javascript:void(0)" class="link-line"> {{ $t("flow.lay") }}</a
        >{{ $t("flow.remark3") }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.flow {
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
