import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout(): JSX.Element {
	const navigate = useNavigate()
	useEffect(() => {
		navigate("/login")
	}, [])

	return (
		<main className="min-h-screen w-full">
			<Outlet />
		</main>
	)
}
