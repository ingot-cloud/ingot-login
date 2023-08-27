import type { LoginConfig } from "../types";

/**
 * 全局配置
 */
export const useLoginStore = defineStore("app.login", () => {
  const login = reactive<LoginConfig>({
    copyright: import.meta.env.VITE_APP_COPYRIGHT,
    loginBanner: import.meta.env.VITE_APP_LOGIN_BANNER,
    title: import.meta.env.VITE_APP_LOGIN_TITLE,
    qrcodeTitle: import.meta.env.VITE_APP_LOGIN_QRCODE_TITLE,
    desc: import.meta.env.VITE_APP_LOGIN_DESC,
  });

  return {
    login,
  };
});
