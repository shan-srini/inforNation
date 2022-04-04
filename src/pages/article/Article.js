import { CircularProgress, Typography, Container } from '@mui/material';
import './Article.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../content/articles';

const Article = (props) => {
    const { id: articleId } = useParams();
    const [article, setArticle] = useState();
    const [isVizOpen, setIsVizOpen] = useState(false)

    const VizToggle = ({ isVizOpen }) => {
        return isVizOpen ?
            (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1={5} y1={12} x2={19} y2={12}></line>
                </svg>
            )
            :
            (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1={12} y1={5} x2={12} y2={19}></line>
                    <line x1={5} y1={12} x2={19} y2={12}></line>
                </svg>
            )
    }

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
                <Typography className='article-title' variant='h3' textAlign='left'>{article.title}</Typography>

                <Container className='article-content'>
                    {article.content}
                </Container>
            </Container>
            :
            <CircularProgress />
    )
}

export default Article;