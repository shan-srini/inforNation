import './SavedPosts.css';
import React from 'react';
import { Box, Typography, Container, Tab } from '@mui/material';
import ArticlePreview from '../../components/articlePreview/ArticlePreview';

export default function SavedPosts() {
	const savedPosts = JSON.parse(localStorage.getItem('SAVED_POSTS')) || [];

	return (
		<Container className='saved-posts-page-container'>
			<Box className='section-heading'>
				<Typography variant='h3' textAlign='left'>
					{'Saved posts'}
				</Typography>
			</Box>
			<Container className='section-body'>
				{savedPosts &&
					savedPosts.map((articleId) => (
						<Tab
							style={{
								width: 250,
								height: 400,
								paddingLeft: 0,
								textTransform: 'none',
								opacity: 100,
							}}
							key={`${articleId}-saved-preview`}
							icon={
								<ArticlePreview
									articleId={articleId}
									style={{ marginLeft: 0 }}
								/>
							}
						/>
					))}
			</Container>
		</Container>
	);
}
