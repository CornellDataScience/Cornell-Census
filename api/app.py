"""
main file for cornell census
instantiates a flask app and controls route pathing
makes use of Google API (google sheet and drive), flask environment, and passing
information to html file to visualize user-submitted data. Graphs are dynamic and
reflect real-time changes to a database
"""

from flask import Flask, jsonify, request
import csv, json

app = Flask(__name__)

prof_file = "./data/professor_list.csv"
course_abbrev = "./data/courses.csv"
course_medians = "./data/coursemedians.csv"

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

def readcoursefromCSV(csv_file):
    try: 
        with open(csv_file, mode='r', encoding='utf-8-sig') as f:
            lst = []
            csv_reader = csv.DictReader(f)
            for course in csv_reader:
                lst.append(dict(course))
            return {'course_list' : lst}
    except IOError:
        print("I/O error")

course_list = readcoursefromCSV(course_abbrev)['course_list']

def readmediansfromCSV(csv_file):
    try: 
        with open(csv_file, mode='r', encoding='utf-8-sig') as f:
            lst = []
            csv_reader = csv.DictReader(f)
            for course in csv_reader:
                lst.append(dict(course))
            return {'medians_list' : lst}
    except IOError:
        print("I/O error")

medians_list = readmediansfromCSV(course_medians)['medians_list']

@app.route('/get_median_info', methods=['GET'])
def medianInfo():
    courseAbbrev = request.args.get('cA')
    allInfo = []
    for mI in medians_list:
        if courseAbbrev in mI['Dept']:
            allInfo.append([mI['Dept'], mI['Professor'], mI['Median Grade'], mI['Semester'], mI['# of Students']])
    return {'allInfo' : allInfo}


@app.route('/get_abbrev', methods=['GET'])
def abbrev():
    course = request.args.get('c')
    for dC in course_list:
        if dC['Course'] == course:
            return {'abb' : dC['Abbrev']}


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
    for course in course_list:
        if course['Course'] not in subjectList:
            subjectList.append(course['Course'])
    return {'all_subjects' : subjectList}

@app.route('/all_professors2', methods=['GET'])
def GetAllProfessors2():
    profList = []
    for prof in prof_list:
        n = prof['tFname'] + ' ' + prof['tLname']
        rev = prof['review']
        rat = prof['overall_rating']
        if n not in profList and rev != "" and rat != "" and rat != "N/A" and n[0] != "." and n[1] != ".":
            profList.append([prof['overall_rating'],n, prof['review']])
    return {'all_professors2' : profList}

@app.route('/get50best', methods=['GET'])
def get50best():
    profList = []
    for prof in prof_list:
        n = prof['tFname'] + ' ' + prof['tLname']
        rev = prof['review']
        rat = prof['overall_rating']
        if n not in profList and rev != "" and rat != "" and rat != "N/A" and n[0] != "." and n[1] != "." and float(rat) >= 4.5:
            profList.append([prof['overall_rating'],n, prof['review']])
    if len(profList) >= 51:
        profList2 = profList[0:50]
    else:
        profList2 = profList
    return {'get50best' : profList2}

@app.route('/get50worst', methods=['GET'])
def get50worst():
    profList = []
    for prof in prof_list:
        n = prof['tFname'] + ' ' + prof['tLname']
        rev = prof['review']
        rat = prof['overall_rating']
        if n not in profList and rev != "" and rat != "" and rat != "N/A" and n[0] != "." and n[1] != "." and float(rat) <= 1.5:
            profList.append([prof['overall_rating'],n, prof['review']])
    if len(profList) >= 51:
        profList2 = profList[0:50]
    else:
        profList2 = profList
    return {'get50worst' : profList2}

@app.route('/all_professors', methods=['GET'])
def GetAllProfessors():
    profList = []
    for prof in prof_list:
        n = prof['tFname'] + ' ' + prof['tLname']
        rev = prof['review']
        rat = prof['overall_rating']
        if n not in profList and rev != "" and rat != "" and rat != "N/A" and n[0] != "." and n[1] != ".":
            profList.append([n, prof['overall_rating'], prof['review']])
    return {'all_professors' : profList}


@app.route('/pull_rating', methods=['GET'])
def pullRating():
    prof = request.args.get('c')
    for p in prof_list:
        n = p['tFname'] + ' ' + p['tLname']
        rev = p['review']
        rat = p['overall_rating']
        if n == prof and rev != "" and rat != "" and rat != "N/A" and n[0] != "." and n[1] != ".":
            return {'rating' : p['overall_rating'], 'review': p['review']}


