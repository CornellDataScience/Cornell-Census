"""
main file for cornell census
instantiates a flask app and controls route pathing
makes use of Google API (google sheet and drive), flask environment, and passing
information to html file to visualize user-submitted data. Graphs are dynamic and
reflect real-time changes to a database
"""

from flask import Flask, render_template, flash, request
from app import forms, models, db, app
import sqlite3
import csv
import json

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/hello')
def say_hello_world():
    return {'result': "test test test this is from flask"}

@app.route('/courses', methods=['GET'])
def courses():
    path = 'app/data/cornellmedians.csv'
    course_name = []
    course_enrollment = []
    course_median = []
    with open(path) as file:
        reader = csv.reader(file)
        for row in reader:
            if (row[4] != 'No Data' and row[4] != '' and row[0] != '' and len(row[0]) < 9):
                course_name.append(row[0])
                course_enrollment.append(row[4])
                course_median.append(row[2])

    return render_template('course.html', names=json.dumps(course_name), enrollment=course_enrollment, median=course_median)


@app.route('/graphs', methods=['GET', 'POST'])
def graphs():
    """
    renders the graphs.html file
    """
    labels = ["Engineering", "CALS", "CAS"]
    values = [600, 50, 200, 550, 320]
    return render_template('graphs.html', labels=labels, values=values)

@app.route('/form', methods=['GET', 'POST'])
def form():
    """
    validates form input and passes arguments to an html file
    """
    q = forms.form()
    if request.method == 'POST':
        school = q.cField.data
        year = q.yField.data
        major = q.mField.data
        gpa = q.gField.data

        user = models.User.query.filter_by(school=school).first()

        new_user = models.User(school=school, gpa=gpa, year=year)
        db.session.add(new_user)
        db.session.commit()

        conn = sqlite3.connect('app/data.db')
        posts = conn.execute('SELECT * FROM user').fetchall()
        conn.close()

        engGPA = 0.0
        engCount = 0

        calsGPA = 0.0
        calsCount = 0

        casGPA = 0.0
        casCount = 0

        ecoGPA = 0.0
        ecoCount = 0

        busGPA = 0.0
        busCount = 0

        fCount = 0
        sCount = 0
        jCount = 0
        seCount = 0

        for p in posts:
            if p[1] == 'College of Engineering':
                engCount = engCount + 1
                engGPA = engGPA + float(p[2])
            elif p[1] == 'College of Agriculture and Life Sciences':
                calsCount = calsCount + 1
                calsGPA = calsGPA + float(p[2])
            elif p[1] == 'College of Arts and Sciences':
                casCount = casCount + 1
                casGPA = casGPA + float(p[2])
            elif p[1] == 'College of Human Ecology':
                ecoCount = ecoCount + 1
                ecoGPA = ecoGPA + float(p[2])
            elif p[1] == 'SC Johnson School of Business':
                busCount = busCount + 1
                busGPA = busGPA + float(p[2])
            if p[3] == 'Freshman':
                fCount = fCount + 1
            elif p[3] == 'Sophomore':
                sCount = sCount + 1
            elif p[3] == 'Junior':
                jCount = jCount + 1
            elif p[3] == 'Senior':
                seCount = seCount + 1
        
        if engCount != 0:
            engGPA = engGPA / engCount
        if calsCount != 0:
            calsGPA = calsGPA / calsCount
        if casCount != 0:
            casGPA = casGPA / casCount
        if ecoCount != 0:
            ecoGPA = ecoGPA / ecoCount
        if busCount != 0:
            busGPA = busGPA / busCount

        gpas = [engGPA, calsGPA, casGPA, ecoGPA, busGPA]
        counts = [engCount, calsCount, casCount, ecoCount, busCount]
        years = [fCount, sCount, jCount, seCount]
          
       
        flash('data saved', 'success')
        return render_template('graphs.html', posts=posts, gpas=gpas, counts=counts, years=years)

    return render_template('forms.html', form=q)


