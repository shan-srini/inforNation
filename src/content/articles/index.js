// ARTICLE IMPORTS
// local articles
import testArticle from './local/test-id';
import article10 from './trending/10';
import article11 from './trending/11';
import article12 from './trending/12';
import article13 from './trending/13';
import article14 from './trending/14';

/** 
 * An indexing of id to relative path of where to access article
 * After importing the article above, place it in here to map the id
 */
export const articleIndex = {
    [testArticle.id]: testArticle,
    [article10.id]: article10,
    [article11.id]: article11,
    [article12.id]: article12,
    [article13.id]: article13,
    [article14.id]: article14
};

/**
 * Basically a mock backend service to retrieve an article given an id
 * NOTE: currently relies on article actually existing
 * @param {string} articleId 
 * @returns article
 */
export const getArticleById = async (articleId) => {
    const article = articleIndex[articleId];
    return article;
}

/**
 * Basically a mock backend service to retrieve articles based on a searchTerm for titles
 * @param {*} searchTerm 
 */
export const findArticleByTitle = async (searchTerm) => {
    return sortByOverlap(searchTerm, Object.values(articleIndex));
}

// a terrible search functionality
const sortByOverlap = (query, options) => {
    const overlap = (x, y) => {
        let count = 0;
        new Set(x).forEach(c => { if (new Set(y).has(c)) count += 1 })
        return count;
    }
    return [...options].sort((article1, article2) => overlap(article2.title, query) - overlap(article1.title, query));
}