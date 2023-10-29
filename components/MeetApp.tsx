import Image from 'next/image';
import React from 'react';

type MeetAppProps = {};

const MeetApp: React.FC<MeetAppProps> = () => {
	return (
		<section className='bg-bgNude-100 flex w-[95%] h-[80vh] rounded-[2.5rem] relative items-center py-[10%]'>
			<div className='w-1/2 pl-[5%] relative'>
				<h4 className='mb-6 2xl:text-[1.5rem] font-medium'>
					Built out of frustration
				</h4>
				<h2 className='2xl:text-[4rem] leading-none font-bold '>
					Meet the ahead app
				</h2>
				<div className='flex justify-center w-full'>
					<div className='bg-white flex p-[3%] rounded-full w-1/3 border-[5rem] border-gray-300'>
						<Image
							width={500}
							height={500}
							alt='purple'
							src={'/purple-toon.png'}
							className='aspect-square object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default MeetApp;
