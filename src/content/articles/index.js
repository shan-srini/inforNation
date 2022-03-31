// ARTICLE IMPORTS
// local articles
import testArticle from './local/test-id';

/** 
 * An indexing of id to relative path of where to access article
 * After importing the article above, place it in here to map the id
 */
export const articleIndex = {
    [testArticle.id]: testArticle
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
