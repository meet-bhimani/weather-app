import "./App.css"
import WeatherData from "./components/WeatherData"

const App = () => {
	return (
		<div className="w-svw h-svh flex items-center pt-20 flex-col bg-gradient-to-r from-[#c7c7eb] to-[#ccf2dd]">
			<h1 className="font-bold text-3xl">Check Weather For Your City</h1>
			<WeatherData />
		</div>
	)
}

export default App
