import { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { URL_ENDPOINT } from "../api/API"
import axios from "axios"
import { WeatherDataType } from "../model/WeatherData"
import WeatherCard from "./WeatherCard"
import { FiLoader } from "react-icons/fi"

const WeatherData = () => {
	const [searchCity, setSearchCity] = useState("")
	const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const fetchUserLocation = (cityName?: string) => {
		let url = URL_ENDPOINT
		if (cityName) {
			url = url + `&q=${cityName}`
		}
		navigator.geolocation.getCurrentPosition(async (data) => {
			try {
				setIsLoading(true)
				const { latitude, longitude } = data.coords
				const res = await axios.get(`${url}&lat=${latitude}&lon=${longitude}`)
				setWeatherData(res.data)
			} catch (error) {
				console.log(error)
				setWeatherData(null)
			} finally {
				setIsLoading(false)
			}
		})
	}

	useEffect(() => {
		fetchUserLocation()
	}, [])

	return (
		<div className="py-5 w-[min(90%,500px)] mt-10 text-center shadow-md rounded-lg bg-[#ffffff7d]">
			<div>
				<form className="w-[90%] mx-auto flex justify-center items-center gap-5">
					<input
						type="text"
						placeholder="search city"
						value={searchCity}
						onChange={(e) => setSearchCity(e.target.value)}
						className="bg-transparent outline-none border text-gray-800 rounded-full border-gray-800 px-3 py-1"
					/>
					<button className="border rounded-full border-gray-800 p-2 group">
						<AiOutlineSearch className="group-hover:scale-[1.3] duration-200" />
					</button>
				</form>

				<div className="mt-5 w-full min-h-[250px] grid place-items-center px-5">
					{isLoading ? (
						<div className="grid place-items-center">
							<FiLoader className="text-3xl animate-rotate mb-2" />
							Loading...
						</div>
					) : (
						<WeatherCard data={weatherData} />
					)}
				</div>
			</div>
		</div>
	)
}

export default WeatherData
