from pymongo import MongoClient


client = MongoClient('mongodb://todo-mongo-1:27017')
db = client['todo_db']
collection = db['todo_collection']
