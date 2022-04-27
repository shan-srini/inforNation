import React, { useEffect, useState } from 'react';
import { isPostLiked, savePost } from '../../utils/savePosts';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SavePost({ height, stroke, width, articleID }) {
	const likedSubscribe = isPostLiked(articleID);
	const [liked, setLiked] = useState(likedSubscribe);

	const handleClick = () => {
		setLiked((prev) => !prev);
		savePost(articleID);
	};
	return (
		<FavoriteIcon
			style={{ height: 32.5, width: 32.5, color: liked ? 'red' : 'white' }}
			onClick={handleClick}
		/>
	);
}
