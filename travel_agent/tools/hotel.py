import os
import requests

from dotenv import load_dotenv
from langchain.tools import tool

from travel_agent.utils.hotel import HotelDetails


class HotelTool:
    def __init__(self):
        load_dotenv()
        self.api_key = os.environ.get('RAPID_API')
        self.rapid = HotelDetails(api_key=self.api_key)
        self.hotel_tool_list = self._setup_tools()

    def _setup_tools(self):
        """Setup all tools for the hotel expense tool."""

        @tool
        def hotel(city: str) -> str:
            """
            Get hotel name and price for one day and one room in the given city.
            """
            try:
                # Step 1: Get destination ID
                url = "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination"
                querystring = {"query": city}
                headers = {
                    "x-rapidapi-key": self.api_key,
                    "x-rapidapi-host": "booking-com15.p.rapidapi.com"
                }

                response = requests.get(url, headers=headers, params=querystring)
                response.raise_for_status()
                data = response.json()

                dest_id = data['data'][0].get('dest_id', '')
                if not dest_id:
                    return f"No destination ID found for city: {city}"

                # Step 2: Get hotel prices using dest_id
                hotel_data = self.rapid.Hotel_Price(dest_id)
                hotels = hotel_data.get('data', {}).get('hotels', [])
                if not hotels:
                    return f"No hotels found for destination ID: {dest_id}"

                info = [item['accessibilityLabel'] for item in hotels if 'accessibilityLabel' in item]

                return f"The hotel names with price for one day and one room in {city} are:\n" + "\n".join(info)

            except Exception as e:
                return f"Failed to retrieve hotel data for {city}. Error: {e}"

        return [hotel]
