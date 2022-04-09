import React, { useEffect, useState } from 'react';
import './ArticlePreview.css';
import { Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getArticleById } from '../../content/articles';

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
							<CircularProgressWithLabel value={article.validityScore} />
							<div>Articile Validity</div>
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

function CircularProgressWithLabel(props) {
	const calculateColor = () => {
		if (props.value < 30) {
			return 'error';
		} else if (props.value < 50) {
			return 'warning';
		} else {
			return 'success';
		}
	};
	return (
		<Box
			sx={{ position: 'relative', display: 'inline-flex' }}
			aria-label='validity'
		>
			<CircularProgress
				variant='determinate'
				{...props}
				color={calculateColor()}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant='caption' component='div' color={'white'}>
					{props.value}
				</Typography>
			</Box>
		</Box>
	);
}

export default ArticlePreview;
