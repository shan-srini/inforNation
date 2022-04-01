import { Typography, Container, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArticleById } from '../../content/articles';

const ArticlePreview = ({ articleId }) => {
    const navigate = useNavigate();
    const [article, setArticle] = useState();

    useEffect(() => {
        getArticleById(articleId)
            .then((res) => {
                setArticle(res);
            })
    }, [articleId]);

    const openArticle = () => {
        navigate(`/articles/${articleId}`);
    }

    return (
        <Container onClick={openArticle}>
            {
                article ?
                <>
                    <img src={article.image} width={200} height={200} className='article-preview-img' alt='inforNation article preview' />
                    <Typography color='white' variant="subtitle1">{article.title}</Typography>
                </>
                :
                <CircularProgress />
            }
        </Container>
    )
};

export default ArticlePreview;