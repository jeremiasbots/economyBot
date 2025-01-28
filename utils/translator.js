const fs = require("fs");
const path = require("path");

const DEFAULT_LANGUAGE = "es";

const translations = (() => {
  const localesPath = path.join(__dirname, "../locales");
  const files = fs.readdirSync(localesPath);
  const data = {};

  files.forEach((file) => {
    const lang = path.basename(file, ".json");
    data[lang] = require(path.join(localesPath, file));
  });

  return data;
})();

function getNestedKey(obj, keyPath){
  return keyPath.split(`.`).reduce((o, k) => (o ? o[k] : undefined), obj);
}

function translate(lang, key, variables = {}) {
  const test = getNestedKey(translations[lang], key) || getNestedKey(translations[DEFAULT_LANGUAGE], key) || key;

  return Object.entries(variables).reduce((str, [variable, value]) => str.replace(`{${variable}}`, value), test)
}

module.exports = { translate };
