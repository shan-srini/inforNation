import { Typography, Container } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticlePreview = ({article}) => {
    const navigate = useNavigate();

    const openArticle = () => {
        navigate(`articles/${article.id}`);
    }

    return (
        <Container onClick={openArticle}>
            <Typography variant="h6">{article.title}</Typography>
        </Container>
    )
}

export default ArticlePreview;