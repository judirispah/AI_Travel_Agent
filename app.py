import streamlit as st
from workflow import GraphBuilder

# Main heading
st.title("🌍 AI Travel Agent & Expense Planner")

# Subheading / Tagline
st.subheader("Plan your trip with real-time data, personalized itinerary, and total expense breakdown.")

# Text input
name = st.text_input("Plan a trip")
config={"configurable": {"thread_id": "1"}}

graph=GraphBuilder(model_provider="deepseek-r1-distill-llama-70b")
#llm=graph.agent_function(state=name)
built=graph.build_graph()
events=built.stream(
    {"messages":[name]},config=config,stream_mode="values"
    )

st.markdown(events)
