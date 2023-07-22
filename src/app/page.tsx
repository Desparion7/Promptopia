import { BiHomeCircle, BiHash, BiUser } from 'react-icons/bi';
import { HiEnvelope } from 'react-icons/hi2';
import { BsBell } from 'react-icons/bs';
import { FaBookmark } from 'react-icons/fa';
import Link from 'next/link';

const NAVIGATION_ITEMS = [
	{
		title: 'Home',
		icon: BiHomeCircle,
	},
	{
		title: 'Explore',
		icon: BiHash,
	},
	{
		title: 'Notifications',
		icon: BsBell,
	},
	{
		title: 'Messages',
		icon: HiEnvelope,
	},
	{
		title: 'Bookmarks',
		icon: FaBookmark,
	},
	{
		title: 'Profile',
		icon: BiUser,
	},
];
const Home = () => {
	return (
		<div className='w-full h-full flex justify-center items-center relative'>
			<div className='max-w-screen-lg w-full h-full flex relative'>
				<section className='fixed w-72 flex flex-col'>
					{NAVIGATION_ITEMS.map((item) => (
						<Link
							className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4'
							key={item.title}
							href={`/${item.title.toLowerCase()}`}
						>
							<div>
								<item.icon />
							</div>
							<div>{item.title}</div>
						</Link>
					))}
				</section>
				<main>Home timeline</main>
				<section>right sliderbar</section>
			</div>
		</div>
	);
};

export default Home;
