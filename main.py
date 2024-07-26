from typing import Union
from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get_home():
    return {"data": "Welcome to the homepage"}

@app.get("/about")
def get_home():
    return {"data": "Welcome to the about page"}

@app.get("/contact")
def get_home():
    return {"data": "Welcome to the contact page"}


@app.get("/books/")
# http://127.0.0.1:8000/books/?skip=0&limit=6
# skip and limit are optional
def get_books(skip: int = 0, limit: int = 6):
    with open('books.json') as f:
        d = json.load(f)
        return {"data": d[skip : skip + limit]}