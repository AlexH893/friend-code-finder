import time
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 5)

    # Tasks with (number) designate priority or weight, will be called more often when
    # Locust randomly chooses tasks to run. This task will be 3x more likely to be run
    # over a task without a decorator
    @task(3)
    def getCodes(self):
        self.client.get("http://localhost:3000/api/codes")

    @task(1)
    def postCode(self):
        self.client.post("http://localhost:3000/api/codes")
        time.sleep(3)

