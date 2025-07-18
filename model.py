from dotenv import load_dotenv
load_dotenv()
from langchain_groq import ChatGroq

import os



class model_loader:
    def __init__(self,api_key:str):
        self.api_key=os.getenv("GROQ_API")


    def config(self,model:str):
        llm=ChatGroq( model_name=model,api_key=self.api_key )
        return llm
