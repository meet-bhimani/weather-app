export type WeatherDataType = {
	name: string
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
	}
	sys: {
		country: string
	}
	weather: {
		main: string
		description: string
		icon: string
	}[]
	wind: {
		speed: number
	}
}
