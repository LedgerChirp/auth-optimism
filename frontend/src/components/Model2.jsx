import React from "react";

export default function Modal() {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setShowModal(true)}
				className="rounded-full bg-indigo-600 ml-4 mt-2 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Open Documentation
			</button>
			{showModal ? (
				<>
					<div className="justify-center p-2 items-center flex overflow-x-hidden h-fit overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="flex items-start justify-between p-5 m-2 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">optify-auth</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								<div className="px-4 sm:px-0 m-2">
									<h3 className="text-base font-semibold leading-7 text-gray-900">
										Intro to Fullstack Ethereum Development
									</h3>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										This article will help you escape writing Solidity tutorials
										in Remix and explain the tools you will need to create a
										simple full-stack dapp. The smart contract will be very
										simple itself, and that is because we're focusing on all of
										the other tools you will need.
									</p>
								</div>

								<div className="mt-6 border-t border-gray-100 h-[50vh] overflow-y-scroll mx-4">
									<h3 className="text-base font-semibold leading-7 text-gray-900">
										Installing a web wallet
									</h3>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										Before getting started make sure you have a web wallet
										installed, I recommend Metamask. It is essentially just a
										browser extension that will allow us to interact with the
										ethereum blockchain. Just follow the instructions provided
										in the{" "}
										<a href="#" className="text-indigo-600">
											link
										</a>{" "}
										to install and make sure not to use the same seed phrase for
										development for real ethereum/money.
									</p>

									<h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">
										Environment
									</h3>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										First head over to the hardhat website, we're going to be
										doing most of what is covered in the tutorial section as
										well as some of the documentation.
									</p>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										Make sure you have nodejs installed, if you don't then
										follow the setup{" "}
										<a href="#" className="text-indigo-600">
											here
										</a>
									</p>

									<h3 className="text-base font-semibold leading-7 text-gray-900 mt-4">
										Create a new project
									</h3>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										To get your project started:
									</p>
									<code className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										mkdir intro-fullstack-ethereum
										<br />
										cd intro-fullstack-ethereum
										<br />
										npm init --yes
										<br />
										npm i --save-dev hardhat
									</code>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										In the same directory where you installed Hardhat run:
									</p>
									<code className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										npx hardhat
									</code>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										A menu will appear, for this tutorial we will be selecting
										Create an empty hardhat.config.js
									</p>
									<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										Make sure these packages are installed, you may have been
										asked to install them when initializing the project.
									</p>
									<code className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										npm install --save-dev @nomicfoundation/hardhat-toolbox
									</code>

									{/* Additional sections of documentation can be added here */}
								</div>

								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<a
										href="#"
										className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									>
										Open Package
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
