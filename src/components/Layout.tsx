import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export default function Layout(): JSX.Element {
	const navigate = useNavigate()
	useEffect(() => {
		navigate("/login")
	}, [])

	return (
		<main className="w-full">
			<Outlet />
		</main>
	)
}
