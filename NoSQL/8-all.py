#!/usr/bin/env python3
'''
Write a Python function that lists all documents in a collection:
Prototype: def list_all(mongo_collection):
Return an empty list if no document in the collection
'''
import pymongo

def list_all(mongo_collection):
    ''' Return an empty list if no document in the collection '''
    find = mongo_collection.find()

    if mongo_collection is not None:
        for item in find:
            return item
    else:
        return []
