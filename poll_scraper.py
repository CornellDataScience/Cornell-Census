import praw
import pandas as pd
import datetime as dt
from bs4 import BeautifulSoup
import requests
import time
import urllib

reddit = praw.Reddit(client_id='ydDRvlPP0pf-jrWRCjNcEA', \
                     client_secret='0pzMAau5EvP9rl7r7QOvTKKS7SGBVg', \
                     user_agent='cu_poll2', \
                     username='cu_poll', \
                     password='cornellcensus')

subreddit = reddit.subreddit('Cornell')
top_subreddit = subreddit.new(limit=2000)

topics_dict = { "title":[], 
                "score":[], 
                "id":[], "url":[], 
                "comms_num": [],
                "created": [],
                "total_vote" : [], "author": [], "opts": [], "val": []}

for submission in top_subreddit:
  if "poll_data" in dir(submission) and "Experiment" not in str(submission.title):
    print(submission.url)
    html_doc = urllib.request.urlopen(submission.url).read()
    time.sleep(3)
    soup = BeautifulSoup(html_doc, features="lxml")
    post_div = soup.find("div", {"id": "t3_"+submission.id})
    if "Voting closed" in str(post_div):
      all_tt = []
      for tt in post_div.findChildren(): 
        if tt.get("title") != None:
          all_tt.append(tt.get("title"))
      print(all_tt)
      topics_dict["title"].append(submission.title)
      topics_dict["score"].append(submission.score)
      topics_dict["id"].append(submission.id)
      topics_dict["url"].append(submission.url)
      topics_dict["comms_num"].append(submission.num_comments)
      topics_dict["created"].append(submission.created)
      topics_dict["total_vote"].append(submission.poll_data.total_vote_count)
      topics_dict["author"].append(submission.author.name)
      topics_dict["opts"].append([i.text for i in submission.poll_data.options])
      topics_dict["val"].append(all_tt)
    

topics_data = pd.DataFrame(topics_dict)

def get_date(created):
    return dt.datetime.fromtimestamp(created)

_timestamp = topics_data["created"].apply(get_date)
topics_data = topics_data.assign(timestamp = _timestamp)

topics_data.to_csv("polls.csv")



