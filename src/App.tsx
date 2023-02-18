import React, {useState} from "react"
import router from "./routes/routes"
import { RouterProvider } from "react-router-dom"
import LoginContext from "./context/user"

export default function App(): JSX.Element {
  const [email, setEmail] = useState("moneeyapp@admin.com")
  const [password, setPassword] = useState("password")

  const values = {
    email,
    password,
    setEmail,
    setPassword,
  }
	return (
		<LoginContext.Provider value={values}>
			<RouterProvider router={router} />
		</LoginContext.Provider>
	)
}
