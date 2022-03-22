"""
main file for cornell census
instantiates a flask app and controls route pathing
makes use of Google API (google sheet and drive), flask environment, and passing
information to html file to visualize user-submitted data. Graphs are dynamic and
reflect real-time changes to a database
"""

from flask import Flask, jsonify
import csv, json

app = Flask(__name__)

prof_file = "./data/professor_list.csv"
def readproffromCSV(csv_file):
    try:
        with open(csv_file) as f:
            lst = []
            csv_reader = csv.DictReader(f)
            for prof in csv_reader:
                lst.append(dict(prof))
            return {'professor_list' : lst}
    except IOError:
        print("I/O error")

prof_list = readproffromCSV(prof_file)['professor_list']

@app.route('/sorted_prof', methods=['GET'])
def SortByRating():
    lst =  sorted(prof_list, key = lambda i: i['overall_rating'],reverse=True)
    for i in range(len(lst)):
        prof = lst[i]
        if(prof['overall_rating'] == 'N/A'):
            lst.append(prof)
            del lst[i]
    return {'sorted_prof' : lst}

# @app.route('/filter_subjects', methods=['GET'])
# def FilterBySubject(subject):
#     tempList = []
#     for teacher in prof_list:
#         if teacher['tDept'] == subject:
#             tempList.append(teacher)
#     return tempList

@app.route('/all_subjects', methods=['GET'])
def GetAllSubjects():
    subjectList = []
    for teacher in prof_list:
        if teacher['tDept'] not in subjectList:
            subjectList.append(teacher['tDept'])
    return {'all_subjects' : subjectList}


