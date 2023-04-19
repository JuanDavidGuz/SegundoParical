import React from 'react';

export const PostItem = () => {
	return (
		<>
			<div className='h-1/2 bg-gray-200 rounded-b-md space-y-2'>
				<div className='flex items-center justify-between py-2 px-6'>
					<div className='flex items-center'>
						<button className='flex items-center text-gray-700 mr-6 space-x-2'>
						
							<span className='font-semibold'>1,234</span>
						</button>
						<button className='flex items-center text-gray-700 space-x-2'>
						
							<span className='font-semibold'>Comentar</span>
						</button>
					</div>
					<button className='flex items-center text-gray-700 space-x-2'>
                        <span className='font-semibold'>Guardar</span>
                    </button>
				</div>
			</div>
		</>
	);
};
