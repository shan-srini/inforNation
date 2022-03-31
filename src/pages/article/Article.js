import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getArticleById} from '../../content/articles';

const Article = (props) => {
    const { id: articleId } = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        getArticleById(articleId)
            .then((content) => {
                setArticle(content);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [articleId]);

    return (
        article ?
            <div>
                {article.title}
            </div>
        :
            <div>article not found</div>
    )
}

export default Article;