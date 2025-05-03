#!/usr/bin/env python3
'''
Write a Python function that lists all documents in a collection:
Prototype: def list_all(mongo_collection):
Return an empty list if no document in the collection
'''
import pymongo


def list_all(mongo_collection):
    ''' Return an empty list if no document in the collection '''
    if not mongo_collection:
        return []
    else:
        my_db.mongo_collection.find()
