import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"

const WeatherData = () => {
	const [searchCity, setSearchCity] = useState("")

	return (
		<div className="py-5 w-[min(90%,500px)] mt-10 text-center shadow rounded-md bg-[#ffffff7d]">
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
			</div>
		</div>
	)
}

export default WeatherData
