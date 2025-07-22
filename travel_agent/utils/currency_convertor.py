import requests


class CurrencyConverter:
    """A simple currency converter using the ExchangeRate-API."""

    def __init__(self, api_key: str):
        self.base_url = f"https://v6.exchangerate-api.com/v6/{api_key}/latest"

    def convert(self, amount: float, from_currency: str, to_currency: str) -> float:
        """
        Convert an amount from one currency to another.

        Args:
            amount (float): The amount to convert.
            from_currency (str): The currency code to convert from (e.g., 'USD').
            to_currency (str): The currency code to convert to (e.g., 'INR').

        Returns:
            float: The converted amount.
        """
        url = f"{self.base_url}/{from_currency.upper()}"
        response = requests.get(url)

        if response.status_code != 200:
            raise Exception(f"API call failed with status {response.status_code}: {response.text}")

        data = response.json()
        rates = data.get("conversion_rates", {})

        if to_currency.upper() not in rates:
            raise ValueError(f"Currency '{to_currency}' not found in exchange rates.")

        return round(amount * rates[to_currency.upper()], 2)
