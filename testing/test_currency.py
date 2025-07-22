import unittest
from unittest.mock import patch
from travel_agent.utils.currency_convertor import CurrencyConverter


class TestCurrencyConverter(unittest.TestCase):
    def setUp(self):
        self.converter = CurrencyConverter("fake-api-key")

    @patch("travel_agent.utils.currency_convertor.requests.get")
    def test_convert_successful(self, mock_get):
        # Mocked API response
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {
            "conversion_rates": {
                "INR": 83.50,
                "USD": 1.0
            }
        }

        result = self.converter.convert(100, "USD", "INR")
        self.assertEqual(result, 8350.0)

    @patch("travel_agent.utils.currency_convertor.requests.get")
    def test_convert_invalid_currency(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = {
            "conversion_rates": {
                "USD": 1.0
            }
        }

        with self.assertRaises(ValueError):
            self.converter.convert(10, "USD", "ABC")  # Invalid target currency

    @patch("travel_agent.utils.currency_convertor.requests.get")
    def test_convert_api_failure(self, mock_get):
        mock_get.return_value.status_code = 500
        mock_get.return_value.text = "Internal Server Error"

        with self.assertRaises(Exception):
            self.converter.convert(10, "USD", "INR")


if __name__ == "__main__":
    unittest.main()
