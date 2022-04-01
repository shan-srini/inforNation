import { CircularProgress, Typography, Container } from '@mui/material';
import './Article.css';
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
        <Container className='article-container'>
            <Typography variant='h3' textAlign='center'>{article.title}</Typography>
            <Container className='article-content'>
                {article.content}
            </Container>
        </Container>
        :
        <CircularProgress />
    )
}

export default Article;