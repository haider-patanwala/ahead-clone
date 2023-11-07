import Image from 'next/image';
import React from 'react';

type MeetAppProps = {};

const MeetApp: React.FC<MeetAppProps> = () => {
	return (
		<section className='bg-bgNude-100 flex w-[95%] h-[80vh] rounded-[2.5rem] relative items-center py-[10%] overflow-hidden'>
			<div className='w-1/2 pl-[5%] relative'>
				<h4 className='mb-6 2xl:text-[1.5rem] font-medium'>
					Built out of frustration
				</h4>
				<h2 className='2xl:text-[4rem] leading-none font-bold '>
					Meet the ahead app
				</h2>
				<div className='flex justify-start w-full pl-[15%] pt-[10%] relative'>
					<div className='bg-white flex p-[7%] rounded-full w-[45%] border-[1.5rem] border-gray-50 z-10 relative overflow-visible'>
						<Image
							width={500}
							height={500}
							alt='purple'
							src={'/purple-toon.png'}
							className='aspect-square object-contain z-10'
						/>
						<div className='flex justify-center items-center text-xl text-white aspect-square bg-[url("/badge.png")] bg-no-repeat z-20 float  w-full'>
							<span className='text-[1.5rem] font-bold'>1</span>
						</div>
					</div>
					<div className='flex absolute top-[30%] -left-[30%] aspect-square bg-bgNude-200 rounded-full w-[50%] z-[1]' />
				</div>
			</div>
		</section>
	);
};
export default MeetApp;
