import React from "react"

export default function Login(): JSX.Element {
	return (
		<section className="min-h-screen bg-[#FEF0F2] lg:grid lg:grid-cols-[43%_auto]">
			<div className="hidden bg-white py-11 px-16 md:block">
				<img
					src="/moneey_app_icon.png"
					alt="moneey app icon"
				/>
				<div className=" my-16 mt-4">
					<h1 className="text-3xl font-semibold tracking-head">
						Hi there, see what’s new
					</h1>
					<p className="mt-1 text-sm tracking-subhead text-light">
						Here’s how Foodcourt helps you manage your daily operations and
						ensure your riders are efficient
					</p>
				</div>

				<div className="flex flex-col gap-10">
					<div className="flex items-center">
						<img
							src="/icon_one.png"
							alt="icon"
						/>
						<div className="ml-5">
							<h3 className="text-sm font-medium tracking-subhead">
								Monitor your Earnings
							</h3>
							<p className="mt-1 text-xs text-lighter">
								Easily see how much your busineses are earning on each
								transaction and watch your earnings rise.
							</p>
						</div>
					</div>
					<div className="flex items-center">
						<img
							src="/icon_two.png"
							alt="icon"
						/>
						<div className="ml-5">
							<h3 className="text-sm font-medium tracking-subhead">
								Manage your Businesses
							</h3>
							<p className="mt-1 text-xs text-lighter">
								Easily see how much your businesses are earning  on each transaction and watch your earnings rise. 
							</p>
						</div>
					</div>

					<div className="flex items-center">
						<img
							src="/icon_three.png"
							alt="icon"
						/>
						<div className="ml-5">
							<h3 className="text-sm font-medium tracking-subhead">
								Delegate to Staff
							</h3>
							<p className="mt-1 text-xs text-lighter">
								Easily see how much your businesses are earning  on each transaction and watch your earnings rise. 
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto w-full max-w-[630px] px-5 py-28">
				<form className="flex w-full flex-col gap-12 rounded-xl bg-white px-4 py-10 shadow-form md:px-16">
					<div>
						<h2 className="text-lg font-semibold tracking-[-0.2px] md:text-2xl">
							Login to your dashboard
						</h2>
						<p className="mt-1 text-sm text-light">
							Provide details to login to your account
						</p>
					</div>

					<div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm">
								Email
							</label>

							<input
								type="email"
								className="w-full appearance-none rounded-md border border-dark px-5 py-2.5 text-dark focus:outline-none"
							/>
						</div>
						<div className="mb-1">
							<label
								htmlFor="email"
								className="mb-2 block text-sm">
								Password
							</label>

							<input
								type="password"
								className="w-full appearance-none rounded-md border border-dark px-5 py-2.5 text-dark focus:outline-none"
							/>
						</div>
					</div>
					<div>
						<input
							type="submit"
							value="Login"
							className="w-full cursor-pointer rounded-[40px] border bg-accent py-4 text-base text-white outline-none focus-visible:shadow-none"
						/>
					</div>
				</form>
			</div>
		</section>
	)
}
