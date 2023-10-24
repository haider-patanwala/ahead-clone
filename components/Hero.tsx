import Image from 'next/image';

const Hero: React.FC = () => {
	return (
		<section className='bg-purple-100 flex w-[95%] rounded-2xl relative items-center py-[10%]'>
			<div className='w-1/2 pl-[10%]'>
				<h4 className='mb-6'>Ahead app</h4>
				<h2 className='text-[5rem] leading-none font-bold '>
					Master your life by mastering emotions
				</h2>
			</div>
			<div className='flex items-center justify-center w-1/2 relative'>
				<div
					className='absolute z-[1] aspect-square h-auto w-[19rem]  bg-purple-200 
                rounded-full'
				/>
				<div
					className='absolute z-[1] aspect-square h-auto w-[30rem] 
                rounded-full  borderCircle '
				/>
				<Image
					height={700}
					width={700}
					src={'/phone.png'}
					alt='phone'
					className='w-1/5 z-10 ml-[10%]'
				/>
				<Image
					height={700}
					width={700}
					src={'/phone-card.png'}
					alt='phone'
					className='w-[17%] z-10 absolute top-[31%] left-[29%]'
				/>
			</div>
		</section>
	);
};
export default Hero;
