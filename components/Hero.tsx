import Image from 'next/image';

const Hero: React.FC = () => {
	return (
		<section className='bg-bgPurple-100 flex w-[95%] h-[80vh] rounded-[2.5rem] relative items-center py-[10%]'>
			<div className='w-1/2 pl-[5%]'>
				<h4 className='mb-6 2xl:text-[1.5rem] font-medium'>Ahead app</h4>
				<h2 className='text-[5rem] leading-none font-bold '>
					Master your life by mastering emotions
				</h2>
			</div>
			<div className='flex items-center justify-center w-1/2 relative'>
				<div
					className='absolute z-[1] aspect-square h-auto w-[23rem]  bg-bgPurple-200 
                rounded-full'
				/>
				<div
					className='absolute z-[1] aspect-square h-auto w-[35rem] 
                rounded-full  borderCircle '
				/>
				<Image
					height={700}
					width={700}
					src={'/phone.png'}
					alt='phone'
					className='w-1/4 z-10 ml-[10%]'
				/>
				<Image
					height={700}
					width={700}
					src={'/phone-card.png'}
					alt='phone'
					className='w-[21%] z-10 absolute top-[31%] left-[23%]'
				/>
			</div>
		</section>
	);
};
export default Hero;
