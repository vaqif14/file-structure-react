const addLocaleData = require("react-intl").addLocaleData; //eslint-disable-line
const azLocaleData = require("react-intl/locale-data/az");
const enLocaleData = require("react-intl/locale-data/en");

const azTranslationMessages = require("./translations/az.json");
const enTranslationMessages = require("./translations/en.json");

addLocaleData(enLocaleData, azLocaleData);

const DEFAULT_LOCALE = "en";

// prettier-ignore
const appLocales = [
  'az', 
  'en', 
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, azTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  az: formatTranslationMessages("az", azTranslationMessages),
  en: formatTranslationMessages("en", enTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
