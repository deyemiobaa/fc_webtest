import React from "react"
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	Navigate,
} from "react-router-dom"
import Login from "../pages/Login"
import CompanyProfile from "../pages/CompanyProfile"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Navigate to="/login" />}>
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
