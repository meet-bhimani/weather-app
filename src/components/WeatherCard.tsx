import { WeatherDataType } from "../model/WeatherData"

type weatherCardProps = {
	data: WeatherDataType | null
}

const WeatherCard = ({ data }: weatherCardProps) => {
	return (
		<>
			{data === null ? (
				<p>Something went wrong. Please try again</p>
			) : (
				<>
					<div className="w-[80%] mx-auto text-center sm:text-start">
						<div className="flex flex-col sm:flex-row w-full justify-between mb-5">
							<div>
								<h1 className="text-lg xsm:text-xl">
									{data.name}, {data.sys.country}
								</h1>
								<h2 className="text-xl xsm:text-3xl font-bold">{data.main.temp} &deg;C</h2>
								<h3 className="text-base xsm:text-lg">{data.weather[0].main}</h3>
							</div>
							<div className="grid place-items-center mt-5 sm:-mt-4">
								<img
									src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
									alt={data.weather[0].description}
								/>
								<h3 className="text-base -mt-2 sm:-mt-6">{data.weather[0].description}</h3>
							</div>
						</div>
						<div>
							<h3 className="text-sm">Feels Like: {data.main.feels_like} &deg;C</h3>
							<h3 className="text-sm">Humidity: {data.main.humidity} %</h3>
							<h3 className="text-sm">Pressure: {data.main.pressure} hPa</h3>
							<h3 className="text-sm">Wind: {data.wind.speed} km/h</h3>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default WeatherCard
