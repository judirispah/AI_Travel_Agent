#  Project Architecture Overview

This document describes the architecture of the **AI Travel Agent** project, highlighting the purpose of each major component and folder.

---

## 📁 Directory Structure

AI_Travel_Agent/
│
├── app.py                        # Streamlit app for AI module alone
├── app2.py                       # FastAPI backend  (frontend & LLM config)
├── workflow.py                   # LangGraph workflow builder for tool orchestration
│
├── frontend/                     # React frontend application
│
├── travel_agent/
│   ├── tools/                    # Modular tools for LLM interactions
│   │   ├── __init__.py                 # Package initializer
│   │   ├── activity.py                 # Finds attractions, restaurants, activities
│   │   ├── hotel.py                    # HotelTool: gets hotel names and prices
│   │   ├── currency_conversion_tool.py # Currency conversion utility
│   │   ├── arithmatic.py               # Basic math operations
│   │   ├── total_expense.py            # Calculates total expenses for stays
│   │   └── weather.py                  # Fetches weather data
│   │
│   ├── utils/                    # Helper services for API integration
│   │   ├── __init__.py             # Package initializer
│   │   ├── place_search.py         # Google/Tavily API integration
│   │   ├── currency_convertor.py   # CurrencyConverter API integration
│   │   ├── weather_search.py       # Weather API integration
│   │   ├── hotel.py                # HotelDetails: hotel API integration
│   │   └── hotel_expense.py        # Hotel expense calculation
│   │
│   ├── prompt_engineering/
│   │   ├── custom_prompt.py      # System prompt templates for LLM
│   │
│   ├── exception/                # Custom error handling
│   │   └── __init__.py           # Package initializer
│   │
│   ├── logger/                   # Logging configuration
│   │   └── __init__.py           # Package initializer
│   │
│   ├── experiment/                # Prototyping and testing (Jupyter notebooks)
│       └── demo.ipynb
├── logs/                         # Runtime logs (auto-created)
│
├── testing/                    # perform unittest in python
│      ├──                             # Package initializer
│      ├── activity.py                 # Finds attractions, restaurants, activities
│      ├── hotel.py                    # HotelTool: gets hotel names and prices
│      ├── currency_conversion_tool.py # Currency conversion utility
│      ├── arithmatic.py               # Basic math operations
│      ├── total_expense.py            # Calculates total expenses for stays
│      └── weather.py                  # Fetches weather data
│ 
│
│── output.png                    # picture of langgraph workflow
│  
├── setup.py                      # creates 
├── .env                          # Secret API keys and environment variables
├── requirements.txt              # Python dependencies
├── README.md                     # Project overview and instructions
└── best_practice.md              # Coding standards and best practices
---

## 🧩 Component Roles for AI Module

- **app.py**: Standalone Streamlit app for AI features.
- **app2.py**: FastAPI backend for React and LLM configuration.
- **frontend/**: Contains React code for the user interface.
- **tools/**: modular Python scripts for travel-related tasks from ' utils/ '.
- **utils/**: Provides helper modules for API calls and data processing.
- **requirements.txt**: Lists required Python packages.



---
## 🧩 Component Roles for React Module


---

## 🏗️ Error Handling & Logging

- Use custom exceptions for predictable error management.
- Log errors using the custom logger module in runtime created log files.

---

## 🔒 Security

- Store secrets and API keys in `.env` (never hardcode).
- Add `.env` and sensitive files to `.gitignore`.

---

## 🐍 Conda Environment Setup & Best Practices

- Using a Conda environment ensures consistent dependencies across machines and team members.

---

## 🧑‍💻 Coding Standards

- All Python code follows the **PEP8** formatting guidelines for consistency and readability.

---

## 📦 Dependencies
- **Python:** 
- `python-dotenv` – Manage environment variables securely.
- `langgraph` – Build graph-based LLM workflows.
- `streamlit` – Build interactive data apps and dashboards.
- `ipykernel` – Kernel interface for Jupyter and IDE support.
- `langchain-tavily` – Tavily search tool for LangChain.
- `langchain-google-community` – Google Places integration for LangChain.
- `langchain-groq` – Groq LLM integration with LangChain.
- `googlemaps` – Official Python client for Google Maps API. 

- **React/Frontend:**  
  - `package.json`: Lists all npm dependencies for the React frontend.
  - `package-lock.json`: Automatically generated by npm to lock exact dependency versions for reproducible builds.

---

## 💡 Local Packages

- Uses `setup.py` to manage  Python project as a package.
- pip install -r requirments.txt installs this package installs the local package in editable mode by including the line -e . in requirements.txt.


## 🧱 Modularity & Reusability of API tools

- Break code into small, focused functions and classes automating the API response and info extraction.
- Avoid hardcoding values  use config files or .env file.


## 🧪 Testing

- All core modules have corresponding test files in the `testing/` folder.
- Uses  `unittest` for writing and running tests.





