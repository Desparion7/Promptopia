import { BsDot } from 'react-icons/bs';

const MainComponent = () => {
	return (
		<main className='flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
			<h1 className='text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>
				Home
			</h1>
			<div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative'>
				<form
					// action={handleSubmitTweet}
					className='flex flex-col w-full h-full'
				>
					<input
						type='text'
						name='tweet'
						className='w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none'
						placeholder="What's happening?"
					/>
					<div className='w-full justify-between items-center flex'>
						<div></div>
						<div className='w-full max-w-[100px]'>
							<button
								type='submit'
								className='rounded-full bg-twitterColor px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'
							>
								Tweet
							</button>
							<button
								// ref={resetRef}
								className='invisible'
								type='reset'
							></button>
						</div>
					</div>
				</form>
			</div>
			{/* <div className='w-11 h-11 bg-slate-400 rounded-full flex-none'></div> */}
			<div className='flex flex-col'>
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={i}
						className='border-t-[0.5px] px-4 flex space-x-4'
					>
						<div>
							<div className='w-10 h-10 bg-twitterColor rounded-full ' />
						</div>
						<div className='flex flex-col space-y-4'>
							<div className='flex items-center space-x-1'>
								<div>Club of Coders</div>
								<div>@clubofcoderscom</div>
								<div>
									<BsDot />
								</div>
								<div>1 hour ago</div>
							</div>
							<div className='text-white text-sm'>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Voluptas ipsum accusamus
								minima repellendus quis tempore amet illo velit
								iure? Error ad minus nemo. Nulla ut, ea vel
								beatae dolorem tenetur!
							</div>
							<div className='bg-slate-400 aspect-square w-full h-96 rounded-xl'></div>
							<div className='flex items-center space-x-2 w-full'>
								<div>C</div>
								<div>R</div>
								<div>L</div>
								<div>S</div>
								<div>SH</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default MainComponent;
