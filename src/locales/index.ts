import { createI18n } from "vue-i18n";
import zh from "@/locales/zh.json";
import en from "@/locales/en.json";

export default createI18n({
	legacy: false,
	locale: localStorage.getItem("language") || "en-US",
	messages: {
		"zh-CN": zh,
		"en-US": en,
	},
});
