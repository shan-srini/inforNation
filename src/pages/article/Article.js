import { Box, CircularProgress, Typography, Container } from '@mui/material';
import './Article.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../content/articles';
import { SavePost, SharePost, VizToggle } from '../../components'

const Article = (props) => {
    const { id: articleId } = useParams();
    const [article, setArticle] = useState();
    const [isVizOpen, setIsVizOpen] = useState(false)

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
                <Box className='article-heading'>
                    <Typography className='article-title' variant='h3' textAlign='left' style={{ maxWidth: '75%', }}>
                        {article.title}
                    </Typography>
                    <button className='button' style={{ borderRadius: '0.375rem', marginLeft: '8px', marginRight: '32px' }}>
                        <VizToggle isVizOpen={isVizOpen} height='24' width='24' stroke='white'/>
                    </button>
                    <button className='button' style={{ borderRadius: '0.5rem',}}>
                        <SavePost height='32' width='32' stroke='white'/>
                    </button>
                    <button className='button' style={{ borderRadius: '0.5rem',}}>
                        <SharePost height='32' width='32' stroke='white'/>
                    </button>
                </Box>
                <Container className='article-content'>
                    {article.content}
                </Container>
            </Container>
            :
            <CircularProgress />
    )
}

export default Article;