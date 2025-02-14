const URL_PREFIX = "articles";

/**
 *
 * @param {Array} articles
 * @returns
 */
const ArticleList = (articles) => `
    <ul class="article-list">
        ${articles.map(convertToHtml).join("")}
    </ul>
`;

/**
 *
 * @param {{ id: str, title: str }} article
 * @returns
 */
const convertToHtml = (article) => `
    <article class="article-item">
        <a href="${URL_PREFIX}/${article.id}" class="article-link">${article.title}</a>
    </article>
`;

export default ArticleList;
export { URL_PREFIX };
