import requests


class Hotel_Details():

    def __init__(self,api_key):
        
        self.api_key=api_key
        self.url="https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels"



    def Hotel_Price(self,city:str): 
        """
        
        Hotel location with price for one day and one room for the given city
        """
        
        querystring = {"dest_id":city,"search_type":"CITY","arrival_date":"2025-07-18","departure_date":"2025-07-19"}

        headers = {
	"x-rapidapi-key": self.api_key,
	"x-rapidapi-host": "booking-com15.p.rapidapi.com"
}

        response = requests.get(self.url, headers=headers, params=querystring)

        return response.json()
