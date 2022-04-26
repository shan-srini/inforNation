import './Article.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactFlow from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';
import { getArticleById } from '../../content/articles';
import { CommentsForm, SavePost, SharePost, VizToggle } from '../../components';
import ValidityIndicator, { calculateErrorColor } from '../../components/validityIndicator/ValidityIndicator';

const Article = (props) => {
	const { id: articleId } = useParams();
	const [article, setArticle] = useState();
	const [isVizOpen, setIsVizOpen] = useState(false);

	const toggleViz = () => {
		setIsVizOpen(!isVizOpen);
	};

	useEffect(() => {
		setIsVizOpen(false);
		getArticleById(articleId)
			.then((content) => {
				setArticle(content);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [articleId]);

	return article ? (
		<Container className='article-container'>
			<Box className='article-heading'>
				<Typography
					className='article-title'
					variant='h3'
					textAlign='left'
					style={{ maxWidth: '75%' }}
				>
					{article.title}
				</Typography>
				<div>
					<button
						onClick={toggleViz}
						title='Expand datasource viz'
						className='button'
						style={{
							borderRadius: '0.375rem',
							marginLeft: '8px',
							marginRight: '32px',
						}}
					>
						<VizToggle
							isVizOpen={isVizOpen}
							height='24'
							width='24'
							stroke='white'
						/>
					</button>
					<button
						className='button'
						title='Save post'
						style={{ borderRadius: '0.5rem' }}
					>
						<SavePost height='32' width='32' stroke='white' />
					</button>
					<button
						className='button'
						title='Share post'
						style={{ borderRadius: '0.5rem' }}
					>
						<SharePost height='32' width='32' stroke='white' />
					</button>
					<button
						onClick={() => window.history.back()}
						className='button'
						title='Close page'
						style={{ borderRadius: '0.5rem', marginLeft: '32px' }}
					>
						<CloseIcon color='error' height='32' width='32' />
					</button>
				</div>

			</Box>
			{isVizOpen &&
				(article.vizData ? (
					<div>
						<span className='article-validity'>
						<Typography color={calculateErrorColor(article.validityScore)} variant='h4'>
							Article Validity:
						</Typography>
						<ValidityIndicator value={article.validityScore} />
						</span>
						<div
							className='react-flow-viz'
							style={{ height: 250, width: '100%' }}
						>
							<ReactFlow
								defaultNodes={article.vizData.nodes}
								defaultEdges={article.vizData.edges}
								defaultEdgeOptions={{
									animated: true,
									markerEnd: {
										type: 'arrowclosed',
										color: 'white',
									},
									style: {
										stroke: 'white',
									},
								}}
								fitView
								width={200}
								height={200}
							></ReactFlow>
						</div>
					</div>
				) : (
					<h3>*Visualization for article not found.</h3>
				))}
			<div className='article-img-container'>
				<img
					src={article.image}
					width={500}
					className='article-img'
					alt='inforNation article preview'
				/>
			</div>

			<Container className='article-content'>{article.content}</Container>
			<CommentsForm/>
		</Container>
	) : (
		<CircularProgress />
	);
};

export default Article;
