import React from "react"
import Header from "../components/Header"

export default function CompanyProfile(): JSX.Element {
	return (
		<section className="min-h-screen pb-9">
			<Header />
			<div className="mt-4 flex flex-col gap-10 px-5 md:px-14 lg:grid lg:grid-cols-[64%_auto]">
				<div className="rounded-lg border border-[#DDE1E3] px-8 py-14 md:px-28">
					<div className="flex items-center gap-6">
						<div className="h-12 w-12 rounded-full border border-red-300 p-[1.5px] md:h-16 md:w-16">
							<span className="flex h-full grow items-center justify-center rounded-full bg-red-200 font-medium text-accent md:text-2xl">
								CN
							</span>
						</div>
						<h1 className="text-lg font-semibold uppercase md:text-2xl">
							Company name
						</h1>
					</div>

					<div className="mt-12 mb-6">
						<span className="mb-1 block text-sm text-light">CEO</span>
						<span>CEO</span>
					</div>

					<div>
						<span className="mb-1 block text-sm text-light">CEO</span>
						<span>CEO</span>
					</div>
				</div>
				<div className="rounded-xl bg-[#F7F7F7] px-6 py-20">
					<span className="mb-14 flex w-max gap-2 rounded-[30px] bg-[#FEEBEE] py-[6px] px-4 text-red-600">
						<img
							src="/timer.png"
							alt="timer"
						/>
						<span className="text-sm">Coming soon</span>
					</span>

					<div>
						<div className="flex flex-col gap-4 rounded-[10px] border-[0.8px] border-[#EBEBEB] bg-white py-5 px-6">
							<div className="flex items-center">
								<span className="rounded-md bg-[#F4F5F5] p-2">🎉</span>
								<div className="ml-4 grow">
									<span className="block h-[14px] w-full rounded bg-[#F5F5F5]" />
									<span className="mt-1 block h-[14px] w-8/12 rounded bg-[#F5F5F5]" />
								</div>
							</div>

							<div className="flex items-center">
								<span className="rounded-md bg-[#F4F5F5] p-2">✨</span>
								<div className="ml-4 grow">
									<span className="block h-[14px] w-full rounded bg-[#F5F5F5]" />
									<span className="mt-1 block h-[14px] w-8/12 rounded bg-[#F5F5F5]" />
								</div>
							</div>

							<div className="flex items-center">
								<span className="rounded-md bg-[#F4F5F5] p-2">💥</span>
								<div className="ml-4 grow">
									<span className="block h-[14px] w-full rounded bg-[#F5F5F5]" />
									<span className="mt-1 block h-[14px] w-8/12 rounded bg-[#F5F5F5]" />
								</div>
							</div>
						</div>
						<div className="mt-6 text-center">
							<h3 className="text-2xl font-semibold tracking-[-0.2px]">
								📫 Notifications
							</h3>
							<p className="mt-2 text-sm text-light">
								Receive notifcations about your rider performance, efficiency
								reviews and a lot more
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
