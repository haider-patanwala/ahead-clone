import Image from 'next/image';
import Link from 'next/link';

const navItems = [
	{ name: 'Emotions', path: '#emotions' },
	{ name: 'Manifesto', path: '#manifesto' },
	{ name: 'Self-awareness test', path: '#test' },
	{ name: 'Work With Us', path: '#work' },
];

const Header: React.FC = () => {
	return (
		<header className='flexBetween px-[10%] w-full relative py-5'>
			<div className='w-[20%] '>
				<Image
					width={150}
					height={150}
					src={'/logo.png'}
					alt='logo'
					className='w-14'
				/>
			</div>
			<nav className='w-[60%] '>
				<ul className='flexCenter flex-row gap-10'>
					{navItems.map((item) => (
						<li key={item.name}>
							<Link href={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className='w-[20%] flex justify-end'>
				<button className='bg-black  text-white rounded-full px-6 py-4'>
					Download app
				</button>
			</div>
		</header>
	);
};
export default Header;
