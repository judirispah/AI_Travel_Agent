from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from workflow import GraphBuilder  # your existing class

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to "http://localhost:3000"
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load LangGraph
graph = GraphBuilder("deepseek-r1-distill-llama-70b").build_graph()

@app.post("/plan-itinerary")
async def plan_itinerary(request: Request):
    data = await request.json()
    user_input = data.get("user_input")
    

    result = graph.invoke(
        {"messages": [{"role": "user", "content": user_input}]},
        
    )
    return {"reply": result["messages"][1].content}
