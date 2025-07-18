from model import model_loader
from tools.activity import PlaceTool
from tools.arithmatic import multiply,add
from tools.currency_conversion import CurrencyConverterTool
from tools.hotel import HotelTool
from tools.total_expense import CalculatorTool
from tools.weather import WeatherInfoTool
from prompt_engineering.custom_prompt import SYSTEM_PROMPT

from langgraph.graph import StateGraph, MessagesState, END, START
from langgraph.prebuilt import ToolNode, tools_condition

from langgraph.checkpoint.memory import MemorySaver

import os

model="deepseek-r1-distill-llama-70b"

class GraphBuilder():
    def __init__(self,model_provider: str):
        self.model_provider=model_provider
        self.model_loader = model_loader(api_key=os.environ.get("GROQ_API"))
        self.llm = self.model_loader.config(self.model_provider)
        self.tools = []

        self.weather_tools = WeatherInfoTool()
        self.place_search_tools = PlaceTool()
        self.calculator_tools = CalculatorTool()
        self.currency_converter_tools = CurrencyConverterTool()
        self.hotel_tool=HotelTool()

        self.tools.extend([* self.weather_tools.weather_tool_list, 
                           * self.place_search_tools.place_search_tool_list,
                           * self.calculator_tools.calculator_tool_list,
                           * self.currency_converter_tools.currency_converter_tool_list,
                           * self.hotel_tool.hotel_tool_list])
        
        self.llm_with_tools = self.llm.bind_tools(tools=self.tools)
        self.system_prompt = SYSTEM_PROMPT

    def agent_function(self,state: MessagesState):
            """Main agent function"""
            user_question = state["messages"]
            input_question = [self.system_prompt] + user_question
            response = self.llm_with_tools.invoke(input_question)
            return {"messages": [response]}
        
    def build_graph(self):
            memory=MemorySaver()
            graph_builder=StateGraph(MessagesState)
            graph_builder.add_node("agent", self.agent_function)
            graph_builder.add_node("tools", ToolNode(tools=self.tools))
            graph_builder.add_edge(START,"agent")
            graph_builder.add_conditional_edges("agent",tools_condition)
            graph_builder.add_edge("tools","agent")
            graph_builder.add_edge("agent",END)
            self.graph = graph_builder.compile(checkpointer=memory)
            return self.graph

#config={"configurable": {"thread_id": "1"}}