import Image from 'next/image';

type SignsCardsProps = {};

const SignsCards: React.FC<SignsCardsProps> = () => {
	return (
		<section className='flex flex-col w-full items-start justify-start my-28 relative gap-20 '>
			<div className='flex w-[95%] px-[5%]'>
				<h3 className='text-5xl text-black font-bold'>
					Does this sound familiar...
				</h3>
				<Image
					width={70}
					height={100}
					alt='angrytoon'
					src={'/red-angry-toon.png'}
					className='-rotate-12 absolute left-[43%] -top-[5%]'
				/>
			</div>

			{/* Cards Start with Emojis.... */}
			<div className='flex w-full overflow-x-scroll min-h-fit gap-10 py-10'>
				<div className='flex flex-col p-[2%] bg-bgPurple-100 rounded-3xl gap-4 w-1/4'>
					<p className='text-6xl'>😠</p>
					<h5 className='font-semibold text-xl text-black'>
						You argue with a colleague
					</h5>
					<p className='text-base font-medium text-gray-600 max-w-sm'>
						You get angry and defensive, instead of staying open and working
						towards common ground.
					</p>
				</div>

				<div className='flex flex-col p-[2%] -rotate-6 bg-bgPurple-400 text-white rounded-3xl gap-4 w-1/4'>
					<p className='text-6xl'>😳</p>
					<h5 className='font-semibold text-xl '>You argue with a colleague</h5>
					<p className='text-base font-medium  max-w-sm'>
						You get angry and defensive, instead of staying open and working
						towards common ground.
					</p>
				</div>
				<div className='flex flex-col p-[2%] bg-bgCream-200 rounded-3xl gap-4 w-1/4'>
					<p className='text-6xl'>🤨</p>
					<h5 className='font-semibold text-xl text-black'>
						You argue with a colleague
					</h5>
					<p className='text-base font-medium text-gray-600 max-w-sm'>
						You get angry and defensive, instead of staying open and working
						towards common ground.
					</p>
				</div>
				<div className='flex flex-col p-[2%] bg-bgBlue-100 rounded-3xl gap-4 w-1/4'>
					<p className='text-6xl'>😬</p>
					<h5 className='font-semibold text-xl text-black'>
						You argue with a colleague
					</h5>
					<p className='text-base font-medium text-gray-600 max-w-sm'>
						You get angry and defensive, instead of staying open and working
						towards common ground.
					</p>
				</div>
			</div>
		</section>
	);
};
export default SignsCards;
