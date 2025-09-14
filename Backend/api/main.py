from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="D-TRAC AI Engine")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Status"])
async def root():
    return {"status": "D-TRAC AI Engine is online"}

@app.post("/api/get_decision", tags=["AI Controller"])
async def get_decision():
    # In a real scenario, this would call the DRL agent
    # For the demo, we return a hardcoded, perfect response
    return {
        "action": "SIDETRACK_FREIGHT_12B",
        "reason": "AI analysis complete: Siding Freight Train 12B prevents a predicted 22-minute cascading delay for the incoming Rajdhani Express, maximizing network throughput."
    }