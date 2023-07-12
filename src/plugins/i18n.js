import { createI18n } from "vue-i18n";
import zh from "../languages/zh-TW.json";
import ja from "../languages/ja-JP.json";

const i18n = createI18n({
  allowComposition: true, //允許用在 Vue 3 組件
  locale: "ja-JP", //當前語系
  globalInjection: true,
  messages: {
    "zh-TW": zh,
    "ja-JP": ja,
  },
});

export default i18n;
