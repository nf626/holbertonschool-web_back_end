#!/usr/bin/env python3
'''
Write a Python function that changes all topics of a school document based on the name:

Prototype: def update_topics(mongo_collection, name, topics):
mongo_collection will be the pymongo collection object
name (string) will be the school name to update
topics (list of strings) will be the list of topics approached in the school
'''


def update_topics(mongo_collection, name, topics):
    ''' return changed topics (list of strings) '''
    if mongo_collection is not None:
        query = { "name": name }
        new_Values = { "$set": { "topics": topics } }
        change_topic = mongo_collection.update_one(query, new_Values)

        if change_topic.modified_count > 0:
            return topics
        else:
            return None
