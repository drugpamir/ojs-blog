import NavBar from "./navbar";

/**
 *
 * @param {Element} el
 */
export default function runApp(el) {
  el.innerHTML = `
  ${NavBar()}`;
}
