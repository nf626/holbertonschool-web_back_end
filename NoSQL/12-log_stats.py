#!/usr/bin/env python3
'''
Write a Python script that provides some stats about Nginx logs stored in MongoDB:

Database: logs
Collection: nginx
Display (same as the example):
first line: x logs where x is the number of documents in this collection
second line: Methods:
5 lines with the number of documents with the method = ["GET", "POST", "PUT", "PATCH", "DELETE"] in this order (see example below - warning: it’s a tabulation before each line)
one line with the number of documents with:
method=GET
path=/status
'''
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    mydb = client['logs']
    myCollection = mydb['nginx']

    # Count documents in collection
    total_collections = myCollection.count_documents({})

    # Count logs in methods
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    count_method = { method: myCollection.count_documents({ 'method': method }) for method in methods }

    # Count GET method and path
    count_method_path = myCollection.count_documents({ 'method': 'GET'}, { 'path': '/status' })

    print(f'{total_collections} logs')
    print('Methods:')
    print()
