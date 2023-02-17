import React from "react"
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom"
import Login from "../pages/Login"
import CompanyProfile from "../pages/CompanyProfile"
import Layout from "../components/Layout"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				path="/login"
				element={<Login />}
      />
      <Route
        path="/profile"
        element={<CompanyProfile />}
      />
		</Route>
	)
)

export default router
