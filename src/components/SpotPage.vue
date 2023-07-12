<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/spot/${name}.jpg`, import.meta.url).href;
}
const cards = reactive({
  data: [
    {
      img: "spot_img_1",
      title: "title1",
      star: "4.9",
      comment: 39,
      description: "des1",
      total: "13,500",
      people: 40,
      space: 126,
    },
    {
      img: "spot_img_2",
      title: "title2",
      star: "5.0",
      comment: 1,
      description: "des2",
      total: "12,500",
      people: 50,
      space: 190,
    },
    {
      img: "spot_img_3",
      title: "title3",
      star: "5.0",
      comment: 19,
      description: "des3",
      total: "5,000",
      people: 20,
      space: 66,
    },
    {
      img: "spot_img_4",
      title: "title4",
      star: "4.9",
      comment: 17,
      description: "des4",
      total: "4,500",
      people: 10,
      space: 49,
    },
    {
      img: "spot_img_5",
      title: "title5",
      star: "4.8",
      comment: 9,
      description: "des5",
      total: "4,000",
      people: 30,
      space: 93,
    },
    {
      img: "spot_img_6",
      title: "title6",
      star: "4.8",
      comment: 11,
      description: "des6",
      total: "6,500",
      people: 30,
      space: 57,
    },
  ],
});
</script>

<template>
  <div class="spot_container">
    <div class="spot_header">
      <h2 class="heading-1">SPOT</h2>
      <h4 class="heading-3">{{ $t("spot.description") }}</h4>
    </div>
    <div class="spot_cards">
      <div v-for="item in cards.data" :key="item.img" class="spot_cards_item">
        <div class="spot_cards_img">
          <img :src="getImageUrl(item.img)" />
        </div>
        <h4 class="heading-4">{{ $t(`spot.${item.title}`) }}</h4>
        <div class="spot_cards_sub">
          <p class="spot_cards_star">★★★★★{{ item.star }}</p>
          <p class="spot_cards_comment">
            <span>{{ $t("spot.comment") }}({{ item.comment }})</span>
          </p>
        </div>
        <p class="plain-text">{{ $t(`spot.${item.description}`) }}</p>
        <div class="spot_cards_footer">
          <div class="spot_cards_total">
            <h4>{{ item.total }}</h4>
            円/時間
          </div>
          <span class="spot_cards_badge">~{{ item.people }}人</span>
          <span class="spot_cards_badge">{{ item.space }}m²</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.spot {
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
  &_cards {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(6, max-content);
      grid-template-columns: 1fr;
    }

    &_item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      &:hover {
        cursor: pointer;
        img {
          transform: scale(1.15);
        }
        .heading-4::after {
          left: 0;
          width: 100%;
        }
      }
    }

    &_img {
      height: auto;
      width: 100%;
      margin-bottom: 1.5rem;
      overflow: hidden;
      img {
        display: block;
        height: auto;
        width: 100%;
        transition: 0.4s all ease-out;
      }
    }
    .heading-4 {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        display: block;
        height: 2px;
        width: 0;
        background-color: currentColor;
        transition: 0.3s all ease-out;
      }
    }

    &_sub {
      display: flex;
      align-items: center;
      padding: 1rem 0;
    }
    &_star {
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 2px;
    }
    &_comment {
      position: relative;
      padding-left: 2.5rem;
      margin-left: 1rem;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        height: 2.5rem;
        width: 2.5rem;
        background: url("/src/assets/images/icn_review.svg") no-repeat;
        background-size: 2.5rem 2.5rem;
        transform: translateY(-50%);
      }
      span {
        font-size: 1.2rem;
        font-weight: 300;
      }
    }

    &_footer {
      display: flex;
      align-items: end;
      margin-top: 1.5rem;
      width: 100%;
    }
    &_total {
      display: flex;
      align-items: baseline;
      margin-right: auto;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1;
      h4 {
        font-size: 2.6rem;
        font-weight: 600;
        margin-right: 0.25rem;
      }
    }
    .plain-text {
      flex-grow: 1;
    }
    &_badge {
      padding: 0.25rem;
      margin-left: 0.6rem;
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1px;
      background-color: #efefef;
    }
  }
}
</style>
