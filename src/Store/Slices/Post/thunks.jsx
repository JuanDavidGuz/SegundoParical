import { setPosts, startLoading } from './PostSlice';
import axios from 'axios';

export const getPosts = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

		const responseImages = await axios.get(
			`https://jsonplaceholder.typicode.com/photos`
		);

			const response = responseImages.data.map((item, key) => ({
				id: item.id,
				albumId: item.id,
				title: item.title,
				imageURL: item.url,
			}));

		dispatch(
			setPosts({
				getPosts: response,
				page: page + 1,
			})
		);
	};
};
