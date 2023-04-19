import React from 'react';
import { PostBar } from './PostBar';
import { PostItem } from './PostItem';

export const PostList = ({ imageURL, profilePicture, username }) => {
    //console.log(profilePicture);
	return (
		<>
			<div className='bg-gray-100 rounded-md shadow-md'>
				<PostBar profilePicture={profilePicture} username={username}/>
				<img
					src={imageURL}
					alt={`fsdfds`}
					className='w-full object-cover'
				/>
				<PostItem />
			</div>
		</>
	);
};
