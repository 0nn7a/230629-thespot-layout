<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/spot/${name}.jpg`, import.meta.url).href;
}
const cards = reactive({
  data: [
    {
      img: "spot_img_1",
      title: "SPOT 六本木ミッドタウンサイド",
      star: 4.9,
      comment: 39,
      description:
        "地下鉄六本木駅７番出口徒歩30秒。東京ミッドタウン隣接という抜群の立地。質の高いデザイナーズ家具が揃った天井高最大3m以上のレンタルスペース。オフィス・会議室利用だけでなく各種イベントにも最適。",
      total: "13,500",
      people: 40,
      space: 126,
    },
    {
      img: "spot_img_2",
      title: "SPOT 神保町ビル一棟丸ごと",
      star: 5.0,
      comment: 1,
      description:
        "東京メトロ半蔵門線、都営新宿線都営三田線「神保町駅」A5出口徒歩3分。JR総武線「水道橋駅」からも徒歩6分程度。希少な一棟丸ごとリノベーション物件。１階から５階まで丸ごと利用可能。会議室利用・オフサイトで人気。",
      total: "12,500",
      people: 50,
      space: 190,
    },
    {
      img: "spot_img_3",
      title: "SPOT 新宿マルイアネックスサイド",
      star: 5.0,
      comment: 19,
      description:
        "地下鉄新宿三丁目駅地下通路C4出口徒歩10秒。新宿駅徒歩6分（地下通路利用可能）。新宿伊勢丹・新宿三丁目繁華街など隣接という抜群の立地。会議室利用・サテライトオフィス等に最適。",
      total: "5,000",
      people: 20,
      space: 66,
    },
    {
      img: "spot_img_4",
      title: "SPOT 虎ノ門ヒルズビジネスタワーサイド",
      star: 4.9,
      comment: 17,
      description:
        "「虎ノ門ヒルズ駅」「虎ノ門駅」地下通路B4（虎ノ門ヒルズビジネスタワー）出口より徒歩1分の好立地。虎ノ門ヒルズ隣接。コンパクトながら快適なデザイナーズオフィス。定期的な会議室利用も多数。",
      total: "4,500",
      people: 10,
      space: 49,
    },
    {
      img: "spot_img_5",
      title: "SPOT 表参道駅裏の隠れ家",
      star: 4.8,
      comment: 9,
      description:
        "半蔵門線・銀座線・千代田線「表参道駅」徒歩2分という抜群のロケーション。2フロア利用可能。3階は天井高3.8メートルと圧巻。会議室やオフィス利用だけでなく撮影にも最適。",
      total: "4,000",
      people: 30,
      space: 93,
    },
    {
      img: "spot_img_6",
      title: "SPOT 渋谷ストリームサイド",
      star: 4.8,
      comment: 11,
      description:
        "各線渋谷駅C2出口隣、渋谷ストリームに隣接した圧巻の立地。12名用ワークスペース＋ソファのラグジュアリー空間。会議室利用の利便性の高い物件。",
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
      <h4 class="heading-3">施設・料金のご案内</h4>
    </div>
    <div class="spot_cards">
      <div v-for="item in cards.data" :key="item.img" class="spot_cards_item">
        <div class="spot_cards_img">
          <img :src="getImageUrl(item.img)" />
        </div>
        <h4 class="heading-4">{{ item.title }}</h4>
        <div class="spot_cards_sub">
          <p class="spot_cards_star">★★★★★{{ item.star }}</p>
          <p class="spot_cards_comment">
            <span>レビュー({{ item.comment }})</span>
          </p>
        </div>
        <p class="plain-text">{{ item.description }}</p>
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
