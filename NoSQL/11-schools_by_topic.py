#!/usr/bin/env python3
'''
Write a Python function that returns the list of school having a specific topic:

Prototype: def schools_by_topic(mongo_collection, topic):
mongo_collection will be the pymongo collection object
topic (string) will be topic searched
'''


def schools_by_topic(mongo_collection, topic):
    ''' returns the list of school having a specific topic '''
    if mongo_collection is not None:
        return mongo_collection.find( { "topics": { "$in": [topic] } } )
