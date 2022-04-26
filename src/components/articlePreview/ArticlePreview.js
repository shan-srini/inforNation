import React, { useEffect, useState } from 'react';
import './ArticlePreview.css';
import { Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getArticleById } from '../../content/articles';
import ValidityIndicator from '../validityIndicator/ValidityIndicator';

const ArticlePreview = ({ articleId }) => {
	const navigate = useNavigate();
	const [article, setArticle] = useState();

	useEffect(() => {
		getArticleById(articleId).then((res) => {
			setArticle(res);
		});
	}, [articleId]);

	const openArticle = () => {
		navigate(`/articles/${articleId}`);
	};

	return (
		<div onClick={openArticle} className='article-preview-container'>
			{article ? (
				<>
					<img
						src={article.image}
						width={200}
						height={200}
						className='article-preview-img'
						alt='inforNation article preview'
					/>
					<Typography
						color='white'
						variant='subtitle1'
						className='article-preview-title'
					>
						{article.title}
					</Typography>
					<div className='article-preview-bottom'>
						<span style={{ fontSize: '12px', color: 'white' }}>
							<ValidityIndicator value={article.validityScore} />
							<div>Article Validity</div>
						</span>
						<span className='article-preview-date'>{article.date}</span>
					</div>
				</>
			) : (
				<CircularProgress />
			)}
		</div>
	);
};

export default ArticlePreview;
