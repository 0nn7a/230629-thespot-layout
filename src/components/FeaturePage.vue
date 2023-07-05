<script setup></script>

<template>
  <div class="feature_container">
    <div class="feature_header">
      <h2 class="heading-1">FEATURE</h2>
      <h4 class="heading-3">特徴・設備について</h4>
    </div>
    <div class="feature_icons">
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_01.svg"
          loading="lazy"
        />
        <h5 class="heading-5">高速Wi-Fi</h5>
        <p class="plain-text">
          高速インターネット（ソニーNURO等）を完備しています。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_02.svg"
          loading="lazy"
        />
        <h5 class="heading-5">スマートキー入館</h5>
        <p class="plain-text">スマートキーでセキュリティ管理をしています。</p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_03.svg"
          loading="lazy"
        />
        <h5 class="heading-5">こだわりの家具</h5>
        <p class="plain-text">
          チェアは全てアーロンチェア。ソファやテーブルなど居心地の良い空間になってます。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_04.svg"
          loading="lazy"
        />
        <h5 class="heading-5">好アクセス</h5>
        <p class="plain-text">
          SPOTは駅から近く、アクセスしやすい場所にあります。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_05.svg"
          loading="lazy"
        />
        <h5 class="heading-5">スクリーンやモニター</h5>
        <p class="plain-text">
          100インチスクリーン（プロジェクタ設置）あるいは50インチモニターをご用意しています。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_06.svg"
          loading="lazy"
        />
        <h5 class="heading-5">後払い可</h5>
        <p class="plain-text">
          お支払いはクレジットカードの他、請求書払いもOK。ビジネス利用に適しています。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_07.svg"
          loading="lazy"
        />
        <h5 class="heading-5">フリードリンク</h5>
        <p class="plain-text">ウォーターサーバーをご用意しております。</p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_08.svg"
          loading="lazy"
        />
        <h5 class="heading-5">豊富な備品</h5>
        <p class="plain-text">
          iPhone用充電器ケーブル、HDMIケーブルや文房具類などを取り揃えております。
        </p>
      </div>
      <div class="feature_icons_item">
        <img
          src="/src/assets/images/feature/index_img_feature_09.svg"
          loading="lazy"
        />
        <h5 class="heading-5">登記</h5>
        <p class="plain-text">
          法人登記も可能です。詳しくはお問い合わせください。
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
