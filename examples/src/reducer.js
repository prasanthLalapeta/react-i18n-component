import localeData from "../../translation/locales/data.json";
// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en;

const initialState = {
  locales: {
    lang: language,
    messages: messages
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      const newLocales = {
        lang: "es",
        messages: localeData.es
      };
      return Object.assign({}, state, { locales: newLocales });
    default:
      return state;
  }
}

export default rootReducer;
