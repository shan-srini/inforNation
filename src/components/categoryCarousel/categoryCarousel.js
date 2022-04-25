import { Tab, Tabs } from '@mui/material';
import React from 'react';
import ArticlePreview from '../articlePreview/ArticlePreview';

const CategoryCarousel = ({ category }) => {
	return (
		<>
			<h1>{category.title}</h1>
			<Tabs
				key={`category-${category}`}
				value={false}
				variant='scrollable'
				scrollButtons
				allowScrollButtonsMobile
				selectionFollowsFocus={false}
			>
				{category.articles.map((articleId, ii) => (
					<Tab
						style={{
							width: 250,
							paddingLeft: 0,
							textTransform: 'none',
						}}
						key={`${category}-${articleId}-${ii}-preview`}
						icon={<ArticlePreview articleId={articleId} style={{marginLeft: 0}}/>}
					/>
				))}
			</Tabs>
		</>
	);
};

export default CategoryCarousel;
