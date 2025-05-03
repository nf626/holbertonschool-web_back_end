#!/usr/bin/env python3
'''
Write a Python function that lists all documents in a collection:
Prototype: def list_all(mongo_collection):
Return an empty list if no document in the collection
'''


def list_all(mongo_collection):
    ''' Return an empty list if no document in the collection '''
    if "school" in mongo_collection:
        return mongo_collection
    else:
        return []
