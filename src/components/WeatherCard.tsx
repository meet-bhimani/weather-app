import { WeatherDataType } from "../model/WeatherData"

type weatherCardProps = {
	data: WeatherDataType | null
}

const WeatherCard = ({ data }: weatherCardProps) => {
	return <div>{data === null ? <>Something went wrong</> : <h1>{data.name}</h1>}</div>
}

export default WeatherCard
