import "./App.css"
import WeatherDetails from "./components/WeatherDetails"

const App = () => {
	return (
		<div className="w-svw h-svh flex items-center pt-20 flex-col bg-gradient-to-r from-[#c7c7eb] to-[#ccf2dd]">
			<h1 className="font-bold text-xl sm:text-3xl">Check Weather For Your City</h1>
			<WeatherDetails />
		</div>
	)
}

export default App
