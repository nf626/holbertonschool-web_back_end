#!/usr/bin/env python3
'''
Write a Python function that lists all documents in a collection:
Prototype: def list_all(mongo_collection):
Return an empty list if no document in the collection
'''
import pymongo


def list_all(mongo_collection):
    ''' Return an empty list if no document in the collection '''
    cursor = mongo_collection

    if mongo_collection is not None:
        for item in cursor.find():
            return item
    else:
        return []
