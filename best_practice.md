
#  Project Architecture Overview

This document describes the architecture of the **AI Travel Agent** project, highlighting the purpose of each major component and folder.

---

## 📁 Directory Structure

```

AI_Travel_Agent/
│
├── app.py                        # Streamlit app for AI module alone
├── workflow.py                   # LangGraph workflow builder for tool orchestration
│
├── frontend/                 # React frontend application
│   ├──public/
│   │ ├── index.html         # Main HTML template for the React app
│   │ ├── favicon.ico        # Site icon
│   │ ├── manifest.json      # Web app manifest for PWA support
│   │     
│   │  
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── index.js           # Entry point for React app
│   │   ├── components/        # Reusable React components (e.g., NavBar)
│   │   │     ├── Navbar.jsx 
│   │   │ 
│   │   ├── pages/             # Page-level components (e.g., Home, Hotels, Weather)
│   │   
│   │   
│   ├── app2.py                       # FastAPI backend (frontend & LLM config)│   
│   │
│   ├── package.json           # NPM dependencies and scripts
│   ├── package-lock.json      # Locked NPM dependencies for reproducible builds
│   ├── README.md              # Frontend-specific documentation
│   ├── node_modules/         # Installed npm packages (ignored in git)   
│                   
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
│   │   └── custom_prompt.py        # System prompt templates for LLM
│   │
│   ├── exception/                  # Custom error handling
│   │   └── __init__.py             # Package initializer
│   │
│   ├── logger/                     # Logging configuration
│   │   └── __init__.py             # Package initializer
│   │
│   ├── experiment/                 # Prototyping and testing (Jupyter notebooks)
│   │   └── demo.ipynb
│
├── logs/                          # Runtime logs (auto-created)
│
├── testing/                       # Unit testing modules
│   ├── __init__.py
│   ├── activity.py
│   ├── hotel.py
│   ├── currency_conversion_tool.py
│   ├── arithmatic.py
│   ├── total_expense.py
│   └── weather.py
│
├── output.png                     # Picture of LangGraph workflow
├── setup.py                       # Build script for packaging
├── .env                           # Secret API keys and environment variables
├── requirements.txt               # Python dependencies
├── README.md                      # Project overview and instructions
└── best_practice.md               # Coding 


```


## 🧩Component Roles for AI Module

- **app.py**: Standalone Streamlit app for AI features.
- **app2.py**: FastAPI backend for React and LLM configuration.
- **frontend/**: Contains React code for the user interface.
- **tools/**: modular Python scripts for travel-related tasks from ' utils/ '.
- **utils/**: Provides helper modules for API calls and data processing.
- **requirements.txt**: Lists required Python packages.


---
## 🧩 Component Roles for Frontend

- **public/index.html**: Main HTML template loaded by React.
- **public/manifest.json**: Metadata for Progressive Web App (PWA) features.
- **public/favicon.ico**: Site icon for browser tabs.
- **src/App.js**: Main React application component.
- **src/index.js**: Entry point for rendering the React app.
- **src/components/**: Reusable UI components (e.g., NavBar).
- **src/pages/**: Page-level components (e.g., Home, Flights ,AI ,Contact us).
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
 - `FastAPI` - backend server for handling API requests from the frontend.
 - `Uvicorn`- is the ASGI server used to run FastAPI applications in production. 

- **React/Frontend:**  
  - `package.json`: Lists all npm dependencies for the React frontend.
        - `axios`: For making HTTP requests to the FastAPI backend.
        - `jspdf`: For generating downloadable PDF travel plans.
        - `emailjs-com`: For sending emails directly from the frontend.
        - `react-leaflet` and `leaflet`: For interactive maps.
        - `react-bootstrap`: For UI components.
        - `react-markdown`: For rendering markdown content.
        - `@react-google-maps/api`: For Google Maps integration.

  - `package-lock.json`: Automatically generated by npm to lock exact dependency versions for reproducible builds.
  - `node_modules/`:  
    - Directory automatically created by npm to store all installed frontend dependencies.
    - **Do not commit to version control**; always add to `.gitignore`.

---

## 💡Local Packages

- Uses `setup.py` to manage  Python project as a package.
- pip install -r requirments.txt installs this package installs the local package in editable mode by including the line -e . in requirements.txt.



---

## 🧱 Modularity & Reusability of API tools

- Break code into small, focused functions and classes automating the API response and info extraction.
- Avoid hardcoding values  use config files or .env file.


---

## 🧪 Testing

- All core modules have corresponding test files in the `testing/` folder.
- Uses  `unittest` for writing and running tests.

---

## 🧩 LLM Prompt Engineering

- Store reusable prompt templates in prompt_engineering/custom_prompt.py.
- Keep system prompts clean, documented, and versioned.


---

## ✍️ Type Hinting & Docstring Guidelines

- Improves code readability and IDE auto-completion.
- Helps with static analysis, unit testing, and team collaboration.






