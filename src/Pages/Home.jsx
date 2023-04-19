import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'tailwindcss/tailwind.css';
import { PostList } from '../Home/PostList'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../Store/Slices/Post/thunks';

export const Home = () => {

	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
    console.log(posts);
	}, []);
  


	return (
		<>
			<div className='grid grid-cols-4'>
				<div
					className='flex col-span-3 h-screen overflow-y-scroll justify-center pt-10'>
					<div className='w-3/5 gap-4 space-y-16'>
						{posts.map((item, key) => (
							<PostList
								key={key}
								imageURL={item.imageURL}
                profilePicture={item.profilePhoto}
                username={item.user}
							/>
						))}
					</div>
				</div>
				<div className='col-span-1 pt-10'>
				</div>
			</div>
		</>
	);
};
