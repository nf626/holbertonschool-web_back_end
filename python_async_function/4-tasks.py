#!/usr/bin/env python3
'''
Take the code from wait_n and alter it into a
new function task_wait_n. The code is nearly
identical to wait_n except task_wait_random is being
called.
'''
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    ''' return the list of all the delays (float values).
    The list of the delays should be in ascending
    order '''

    tasks = await asyncio.gather(*[task_wait_random(max_delay) for _ in range(n)])

    for i in range(1, len(tasks)):
        current = tasks[i]
        j = i - 1
        while j >= 0 and current < tasks[j]:
            tasks[j + 1] = tasks[j]
            j -= 1
        tasks[j + 1] = current
    
    return tasks
