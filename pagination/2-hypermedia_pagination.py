#!/usr/bin/env python3
'''
Implement a get_hyper method that takes the same arguments
(and defaults) as get_page and returns a dictionary
'''
import csv
import math
from typing import List
from typing import Dict
index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        ''' return assert, index_range,
        dataset out of range return empty '''

        assert isinstance(page, int)
        assert isinstance(page_size, int)
        assert page > 0
        assert page_size > 0

        data = self.dataset()
        page_start, page_end = index_range(page, page_size)

        if page_start >= len(data):
            return []
        else:
            return data[page_start:page_end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[]:
