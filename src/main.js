import { loadContent, pickLang } from "./i18n.js";
import { renderApp } from "./render.js";

const state = { lang: null, content: null };

function preferredLang(c) {
  const urlLang = new URLSearchParams(location.search).get("lang");
  const navLang = navigator.language?.slice(0,2);
  return pickLang(c.langs || ["en"], urlLang || navLang, c.defaultLang || "en");
}

function setLang(lang) {
  state.lang = lang;
  history.replaceState(null, "", `?lang=${lang}${location.hash || ""}`);
  render();
}

function render() {
  const mount = document.getElementById("app");
  if (!mount || !state.content || !state.lang) return;
  renderApp({ mount, content: state.content, lang: state.lang, onLangChange: setLang });
}

(async function init() {
  state.content = await loadContent();
  state.lang = preferredLang(state.content);
  render();
  document.querySelectorAll("img[loading!='lazy']").forEach(img => img.setAttribute("loading","lazy"));
})();