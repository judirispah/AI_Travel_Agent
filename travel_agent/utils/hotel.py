import requests


class HotelDetails:
    """Fetches hotel details including price for a given city."""

    def __init__(self, api_key: str):
        self.api_key = api_key
        self.url = "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels"
        self.headers = {
            "x-rapidapi-key": self.api_key,
            "x-rapidapi-host": "booking-com15.p.rapidapi.com"
        }

    def get_hotel_price(self, city: str, arrival_date="2025-07-18", departure_date="2025-07-19") -> dict:
        """
        Returns hotel data including prices for one room and one day in the given city.

        Args:
            city (str): City or destination ID to search.
            arrival_date (str): Date of arrival (format: YYYY-MM-DD).
            departure_date (str): Date of departure (format: YYYY-MM-DD).

        Returns:
            dict: JSON response with hotel listings.
        """
        querystring = {
            "dest_id": city,
            "search_type": "CITY",
            "arrival_date": arrival_date,
            "departure_date": departure_date
        }

        response = requests.get(self.url, headers=self.headers, params=querystring)

        if response.status_code != 200:
            raise Exception(f"Hotel API call failed ({response.status_code}): {response.text}")

        return response.json()
