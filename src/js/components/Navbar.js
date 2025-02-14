import { URL_PREFIX } from "./ArticleList";

const NavBar = () => `
    <header>
      <nav class="navbar">
        <ul class="nav-list">
          <li><a href="${URL_PREFIX}" class="nav-link">Статьи</a></li>
          <li><a href="chat" class="nav-link">Онлайн-чат</a></li>
        </ul>
      </nav>
    </header>   
`;

export default NavBar;
