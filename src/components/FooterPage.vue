<script setup></script>

<template>
  <footer class="footer_container">
    <h1 class="logo">SPOT</h1>
    <section class="contents_container">
      <h3 class="heading-5">CONTENTS</h3>
      <ul class="contents_list">
        <li class="heading-6">特徴・設備</li>
        <li class="heading-6">ご利用実績</li>
        <li class="heading-6">施設・料金</li>
        <li class="heading-6">ご利用の流れ</li>
      </ul>
      <ul class="contents_list">
        <li class="heading-6">よくあるご質問</li>
        <li class="heading-6">運営会社情報</li>
        <li class="heading-6">プライバシーポリシー</li>
        <li class="heading-6">お問い合わせ</li>
      </ul>
    </section>
    <section class="spot_container">
      <h3 class="heading-5">SPOT</h3>
      <ul class="spot_list">
        <li class="spot_item">
          <h5 class="heading-6">SPOT 虎ノ門ヒルズビジネスタワーサイド</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">SPOT 新宿マルイアネックスサイド</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">SPOT 神保町ビル一棟丸ごと</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">SPOT 六本木ミッドタウンサイド</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">SPOT 表参道駅裏の隠れ家</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">SPOT 渋谷ストリームサイド</h5>
        </li>
        <li class="spot_item">
          <h5 class="heading-6">
            SPOT 六本木ミッドタウンサイド <br />
            ANNEX COMING SOON
          </h5>
        </li>
      </ul>
    </section>
    <div class="copyright">
      <img src="/src/assets/images/btn_instagram_01.svg" alt="ig" />
      <p class="plain-text">© HOLDER Co., Ltd.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.footer {
  &_container {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr max-content;
    grid-template-columns: minmax(max-content, 1fr) minmax(max-content, 1fr) 2fr;
    justify-items: flex-start;
    align-items: flex-start;
    padding: 12rem 8rem;
    gap: 0 5%;
    background-color: var(--spot-sub-background-color);
    @media only screen and (max-width: $bp-sm) {
      grid-template-rows: repeat(5, max-content);
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 10rem 5rem;
      flex-direction: column;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 8rem 2rem;
    }
  }
}

.contents {
  &_container {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: max-content 1fr;
    gap: 3.5rem;
    margin: 0 auto;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 2 / span 1;
      grid-column: 1 / 2;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      margin-top: 5rem;
    }
  }
  &_list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem 0;
    @media only screen and (max-width: $bp-sm) {
      &:first-of-type {
        justify-self: flex-end;
      }
      &:last-of-type {
        justify-self: flex-start;
      }
    }
  }
}

.spot {
  &_container {
    grid-row: 1 / -1;
    grid-column: 3 / -1;
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 3.5rem;
    margin: 0 auto;
    @media only screen and (max-width: $bp-sm) {
      grid-row: 3 / span 1;
      grid-column: 1 / 2;
      justify-items: center;
      margin-top: 5rem;
    }
  }
  &_list {
    display: flex;
    flex-direction: column;
    gap: 3rem 0;
    @media only screen and (max-width: $bp-sm) {
      margin: 0 auto;
    }
  }
  &_item {
    position: relative;
    padding-left: 3rem;
    &::before {
      content: "";
      position: absolute;
      top: -3px;
      left: 0;
      height: 3.2rem;
      width: 2.2rem;
      background-image: url("/src/assets/images/logo_sm.svg");
      background-repeat: no-repeat;
      background-size: 2.2rem 3.2rem;
    }
  }
}

.copyright {
  grid-row: 2 / -1;
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: $bp-sm) {
    grid-row: 4 / span 1;
    grid-column: 1 / 2;
    justify-self: center;
    align-items: center;
    margin-top: 5rem;
  }
  img {
    display: inline-block;
    height: 5rem;
    width: 5rem;
    margin-bottom: 0.5rem;
  }
}

.heading-5 {
  grid-column: 1 / -1;
  font-weight: 600;
}
.heading-6,
.spot_item,
.copyright img {
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
}
</style>
