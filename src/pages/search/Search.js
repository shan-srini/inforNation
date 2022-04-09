import React, { useEffect, useState } from 'react';
import './Search.css';
import { useSearchParams } from 'react-router-dom';
import ArticlePreview from '../../components/articlePreview/ArticlePreview';
import { findArticleByTitle } from '../../content/articles';


const Search = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');
    const minimumValidity = searchParams.get('v');
    const startDate = searchParams.get('sd');
    const endDate = searchParams.get('ed');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        findArticleByTitle(q)
            .then((res) => {
                if (minimumValidity) {
                    res = res.filter(x => x.validityScore && x.validityScore >= minimumValidity);
                }
                if (!!startDate) {
                    res = res.filter(x => x.date && new Date(x.date) >= new Date(startDate));
                    console.log(startDate);
                    console.log(res);
                }
                if (endDate) {
                    console.log(typeof endDate)
                    res = res.filter(x => x.date && new Date(x.date) >= new Date(endDate));
                    console.log(endDate)
                    console.log(res)
                }
                setArticles(res);
            });
    }, [q, minimumValidity, startDate, endDate]);

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