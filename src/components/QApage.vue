<script setup>
const question = reactive({
  data: [
    {
      id: "01",
      title: "事前に荷物のお預かりは可能でしょうか？",
      description:
        "申し訳ありません。スペースの問題及び管理上、荷物のお預かりは行っておりません。",
    },
    {
      id: "02",
      title: "大学生のサークルの懇親会での利用は可能でしょうか？",
      description:
        "申し訳ありません。法人向けのご予約に限定させていただいております。また、建物オーナーとの契約上、飲み会やパーティ利用は禁止事項に入っているケースもありますため、原則受けしておりません。",
    },
    {
      id: "03",
      title: "テレビ番組や動画撮影は可能でしょうか？",
      description:
        "機材搬入や騒音等の制限がある場合がありますので、事前に内容をご相談ください。施設によってはお断りさせていただく場合があります。",
    },
    {
      id: "04",
      title: "飲食の持ち込みは可能でしょうか？",
      description:
        "少量（１０名程度のお弁当程度）であれば問題ありません。ケータリングを頼まれる、アルコールを伴う懇親会などを実施されるなど際には特別ごみ処理清掃費用を必須とさせていただいております。",
    },
    {
      id: "05",
      title: "事前の下見は可能でしょうか？",
      description:
        "施設によって対応可能な場合もありますので、お問合せください。",
    },
    {
      id: "06",
      title: "当日予約は可能でしょうか？",
      description:
        "申し訳ありません。前日までのご予約とさせていただいております。",
    },
  ],
});
</script>

<template>
  <div class="qa_container">
    <div class="qa_header">
      <h2 class="heading-1">Q&A</h2>
      <h4 class="heading-3">よくあるご質問</h4>
    </div>
    <ul class="qa_list">
      <li class="qa_item" v-for="item in question.data" :key="item.id">
        <input type="checkbox" :id="item.id" :name="item.id" />
        <label class="qa_label" :for="item.id">
          <h6 class="heading-4">{{ item.id }}</h6>
          <p class="heading-5">{{ item.title }}</p>
          <span class="qa_btn"></span>
          <p class="plain-text">{{ item.description }}</p>
        </label>
      </li>
      <a href="javascript:void(0)" class="link-line">QA一覧を見る</a>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/variable";

.qa {
  &_container {
    display: flex;
    gap: 5rem;
    padding: 12rem 8rem;
    @media only screen and (max-width: $bp-sm) {
      padding: 12rem 5rem;
      flex-direction: column;
    }
    @media only screen and (max-width: $bp-xs) {
      padding: 12rem 2rem;
    }
  }
  &_header {
    display: flex;
    flex-direction: column;
  }

  &_list {
    display: flex;
    flex-direction: column;
  }
  &_item {
    input[type="checkbox"] {
      display: none;
      &:checked + .qa_label .qa_btn::after {
        transform: translate(-50%, -80%) rotate(-180deg);
      }
      &:checked + .qa_label {
        grid-template-rows: max-content 1fr;
        gap: 3rem;
        @media only screen and (max-width: $bp-sm) {
          gap: 2rem;
        }
      }
    }
    border-top: 3px solid var(--spot-icon-color);
    &:last-of-type {
      border-bottom: 3px solid var(--spot-icon-color);
    }
  }
  &_label {
    display: grid;
    grid-template-rows: max-content 0fr;
    grid-template-columns: max-content 1fr max-content;
    gap: 0 3rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s ease-out;
    @media only screen and (max-width: $bp-sm) {
      gap: 0 2rem;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }
    &:hover {
      .qa_btn::before {
        height: 100%;
        width: 100%;
        background-color: var(--spot-icon-color);
      }
      .qa_btn::after {
        border-color: var(--spot-base-background-color) transparent transparent
          transparent;

        color: var(--spot-base-background-color);
      }
    }
    .heading-4 {
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      line-height: 3.4rem;
    }
    .heading-5 {
      grid-row: 1 / span 1;
      grid-column: 2 / span 1;
      line-height: 3.4rem;
    }
    .qa_btn {
      grid-row: 1 / span 1;
      grid-column: 3 / span 1;
      position: relative;
      height: 3.4rem;
      width: 3.4rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        height: 1rem;
        width: 1rem;
        color: var(--spot-base-background-color);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.25s ease-out;
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border: 0.5rem solid;
        border-color: var(--spot-icon-color) transparent transparent transparent;
        transform: translate(-50%, -20%);
        transition: color 0.25s ease-out, transform 0.25s ease-out 0.3s;
      }
    }
    .plain-text {
      grid-row: 2 / span 1;
      grid-column: 2 / -1;

      min-height: 0;
    }
  }
}

.link-line {
  margin-top: 3rem;
  font-size: 1.6rem;
}
</style>
