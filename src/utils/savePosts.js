export const getSavedPosts = () => {
    return JSON.parse(localStorage.getItem('SAVED_POSTS')) || [];
}

export const isPostLiked = (id) => {
	const savedIndex = getSavedPosts().findIndex((x) => x === id);
    return savedIndex !== -1;
};

export const savePost = (id) => {
	const savedPosts = getSavedPosts();
	if (isPostLiked(id)) {
		localStorage.setItem(
			'SAVED_POSTS',
			JSON.stringify(savedPosts.filter((x) => x !== id))
		);
	} else {
		localStorage.setItem('SAVED_POSTS', JSON.stringify([...savedPosts, id]));
	}
};
