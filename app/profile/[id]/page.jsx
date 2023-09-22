'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Profile from '@components/Profile';

const UserProfile = ({ params }) => {
	const searchParam = useSearchParams();
	const userName = searchParam.get('name');

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${params?.id}/posts`);
			const data = await response.json();
			setPosts(data);
		};
		if (params?.id) fetchPosts();
	}, [params]);

	return (
		<Profile
			name={userName}
			desc={`Welcome to ${userName} personalized profile page. Explore ${userName} exceptional prompts and be inspired by the power of their imagination`}
			data={posts}
		/>
	);
};

export default UserProfile;
