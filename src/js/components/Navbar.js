import { URL_PREFIX as URL_ARTICLES } from "./ArticleList";
import { URL_PREFIX as URL_CHAT } from "./Chat";

const NavBar = () => `
    <header>
      <nav class="navbar">
        <ul class="nav-list">
          <li><a href="${URL_ARTICLES}" class="nav-link">Статьи</a></li>
          <li><a href="${URL_CHAT}" class="nav-link">Онлайн-чат</a></li>
        </ul>
      </nav>
    </header>   
`;

export default NavBar;
