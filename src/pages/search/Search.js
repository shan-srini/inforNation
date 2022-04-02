import React, { useEffect, useState } from 'react';
import './Search.css';
import { useSearchParams } from 'react-router-dom';
import ArticlePreview from '../../components/articlePreview/ArticlePreview';
import { findArticleByTitle } from '../../content/articles';


const Search = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        findArticleByTitle(q)
            .then((res) => setArticles(res));
    }, [q]);

    return (
        <div id='search-page'>
            {
                articles.map(a => 
                <div style={{paddingBottom: '6px'}}>
                    <ArticlePreview articleId={a.id} />
                </div>
                )
            }
        </div>
    )
};

export default Search;