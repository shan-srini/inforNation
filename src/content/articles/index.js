// ARTICLE IMPORTS
// local articles
import article1 from './local/1';
import article2 from './local/2';
import article3 from './local/3';
// sports articles
import article6 from './sports/6';
import article7 from './sports/7';
import article8 from './sports/8';
// trending articles
import testArticle from './local/test-id';
import article10 from './trending/10';
import article11 from './trending/11';
import article12 from './trending/12';
import article13 from './trending/13';
import article14 from './trending/14';
// recommended articles
import article15 from './recommended/15';
import article16 from './recommended/16';
import article17 from './recommended/17';
import article18 from './recommended/18';
import article19 from './recommended/19';

/** 
 * An indexing of id to relative path of where to access article
 * After importing the article above, place it in here to map the id
 */
export const articleIndex = {
    [testArticle.id]: testArticle,
    [article1.id]: article1,
    [article2.id]: article2,
    [article3.id]: article3,
    [article6.id]: article6,
    [article7.id]: article7,
    [article8.id]: article8,
    [article10.id]: article10,
    [article11.id]: article11,
    [article12.id]: article12,
    [article13.id]: article13,
    [article14.id]: article14,
    [article15.id]: article15,
    [article16.id]: article16,
    [article17.id]: article17,
    [article18.id]: article18,
    [article19.id]: article19,
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