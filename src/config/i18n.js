//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguage } from './common/utils';
import zh_CNCommon from './locales/zh_CN/common';
import zh_CNMenu from './locales/zh_CN/menu';
import zh_CNProfile from './locales/zh_CN/profile';

import zh_TWCommon from './locales/zh_TW/common';
import zh_TWMenu from './locales/zh_TW/menu';
import zh_TWProfile from './locales/zh_TW/profile';

const resources = {
  zh_CN: {
    common: {// 这是namespace的名称
      ...zh_CNCommon, // 公共部分
      ...zh_CNProfile, // 注册登录
    },
    menu: {// 这是namespace的名称
      ...zh_CNMenu, // 左侧菜单
    },
  },
  zh_TW: {
    common: {// 这是namespace的名称
      ...zh_TWCommon, // 公共部分
      ...zh_TWProfile, // 注册登录
    },
    menu: {// 这是namespace的名称
       ...zh_TWMenu, // 左侧菜单
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;