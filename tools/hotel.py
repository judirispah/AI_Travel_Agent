from utils.hotel import Hotel_Details
import os
from langchain.tools import tool
import requests
from dotenv import load_dotenv


class HotelTool:
    def __init__(self):
        load_dotenv()
        self.api_key=os.environ.get('RAPID_API')
        self.rapid=Hotel_Details(api_key=self.api_key)
        self.hotel_tool_list= self._setup_tools()


    def _setup_tools(self):
        """Setup all tools for the hotel expense tool"""

        @tool
        def hotel(city:str):
            """get hotel name price for one day one room"""

            url = "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination"

            querystring = {"query":city}

            headers = {
	"x-rapidapi-key": "e18f0f79a1mshfa280ca5111a252p1ea784jsnd0d436235bfd",
	"x-rapidapi-host": "booking-com15.p.rapidapi.com"
}

            response = requests.get(url, headers=headers, params=querystring)
            data = response.json()
            print(data)

            
            
            des_id=data['data'][0].get('dest_id','')
            print(des_id)
           
            hotel_data=self.rapid.Hotel_Price(des_id)
            info=[]
            for item in hotel_data['data']['hotels']:
                details=item['accessibilityLabel']
                info.append(details)
            #print(f"THE hotel names with price for one day and one room in {city} are :\n" + "\n".join(info))
            return f"THE hotel names with price for one day and one room in {city} are :\n" + "\n".join(info)
        return [hotel] 

                