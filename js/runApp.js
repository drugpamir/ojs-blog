import NavBar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { articles } from "./data";

/**
 * App runner
 * @param {HTMLElement} el - root html element
 */
export default function runApp(el) {
  el.innerHTML = `
  ${NavBar()}
  ${ArticleList(articles)}
  `;
}
