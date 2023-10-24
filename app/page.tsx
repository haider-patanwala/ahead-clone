import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen w-full relative flex-col items-center justify-start'>
			<Hero />
		</main>
	);
}
