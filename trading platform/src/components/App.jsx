import { ProfileScreen } from "../views/MyProfile/ProfileScreen"
import ForSalePage from '../views/ForSale/ForSalePage'
import TransactionHistoryPage from '../views/TransactionHistory/TransactionHistoryPage'
import { Navbar } from "./Navbar"
import { Routes, Route } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/MyProfile' element={<ProfileScreen />}></Route>
				<Route path="/ForSale" element={<ForSalePage />} />
				<Route path="/TransactionHistory" element={<TransactionHistoryPage />} />
				<Route path="/*" element={<ForSalePage />} />
			</Routes>
		</>
	)
}
