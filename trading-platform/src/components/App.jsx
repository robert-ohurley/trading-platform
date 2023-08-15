import { Sidebar } from "./Sidebar"
import { Navbar } from "./Navbar"
import { ProfileScreen } from "./ProfileScreen"

export default function App() {

	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col w-full">
				<Navbar />
				<ProfileScreen />				
			</div>
		</div>
	)
}
