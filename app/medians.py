import csv

path = 'data/cornellmedians.csv'
course_name = []
course_enrollment = []
with open(path) as file:
    reader = csv.reader(file)
    for row in reader:
        if row[4] != 'No Data' and row[4] != '' and row[0] != '' and len(row[0]) < 9:
            course_name.append(row[0])
            course_enrollment.append(row[4])

for p in course_name:
    print(p)

for r in course_enrollment:
    print(r)
