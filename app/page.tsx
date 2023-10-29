import EQ from '@/components/EQ';
import Hero from '@/components/Hero';
import MeetApp from '@/components/MeetApp';
import SignsCards from '@/components/SignsCards';

export default function Home() {
	return (
		<main className='flex min-h-screen w-full relative flex-col items-center justify-start'>
			<Hero />
			<EQ />
			<SignsCards />
			<MeetApp />
		</main>
	);
}
