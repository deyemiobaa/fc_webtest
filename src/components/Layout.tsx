import React, { useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

export default function Layout(): JSX.Element {
	const navigate = useNavigate()
	const location = useLocation()
	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/login")
		}
	}, [])

	return (
		<main className="w-full">
			<Outlet />
		</main>
	)
}
