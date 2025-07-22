import requests


class WeatherForecastTool:
    """
    Tool for retrieving current weather and weather forecast using OpenWeatherMap API.
    """

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.openweathermap.org/data/2.5"

    def get_current_weather(self, place: str) -> dict:
        """
        Fetch current weather data for the given place.

        Args:
            place (str): Name of the city/place.

        Returns:
            dict: JSON response with current weather data or empty dict if failed.
        """
        try:
            url = f"{self.base_url}/weather"
            params = {
                "q": place,
                "appid": self.api_key,
                "units": "metric"
            }
            response = requests.get(url, params=params)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching current weather: {e}")
            return {}

    def get_forecast_weather(self, place: str, count: int = 10) -> dict:
        """
        Fetch forecast weather data for the given place.

        Args:
            place (str): Name of the city/place.
            count (int): Number of forecast entries to return.

        Returns:
            dict: JSON response with forecast data or empty dict if failed.
        """
        try:
            url = f"{self.base_url}/forecast"
            params = {
                "q": place,
                "appid": self.api_key,
                "cnt": count,
                "units": "metric"
            }
            response = requests.get(url, params=params)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching forecast weather: {e}")
            return {}
