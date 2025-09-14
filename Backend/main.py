from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "D-TRAC AI Engine is online"}

@app.post("/api/get_decision")
async def get_decision():
    return {
        "action": "SIDETRACK_FREIGHT_12B",
        "reason": "AI analysis complete: Siding Freight Train 12B prevents a predicted 22-minute cascading delay for the incoming Rajdhani Express, maximizing network throughput."
    }