from tkinter import E
import requests
import json
import math
import html
import csv

class RateMyProfScraper:
        def __init__(self,schoolid):
            self.UniversityId = schoolid
            self.professorlist = self.createprofessorlist()
            self.indexnumber = False

        # can you filter on course subject, or around courses?, around difficulty rating, etc?
        # Filters seem like a more front-end deal, could just make the helper functions in this class though. \

# THINGS TO DO: save data to txt file so it doesn't take 20 goddamn minutes to run. fix sort function, test filter function. Get data from excel sheet.
# Get rating of the chosen review, get course that review references to. 
# Time graph for cornell althetics gym.
    #Heroku to be live

        def readproffromCSV(self):
            csv_file = "professor_list.csv"
            try:
                with open(csv_file, 'w') as f:
                    lst = []
                    csv_reader = csv.DictReader(f)
                    for prof in csv_reader:
                        lst.append(prof)
                    self.professorlist = lst
                    return lst
            except IOError:
                print("I/O error")

        def addproftoCSV(self, proflist):
            csv_file = "professor_list.csv"
            try:
                with open(csv_file, 'w') as f:
                    writer = csv.writer(f)
                    writer.writerow(proflist[0].keys())
                    for prof in proflist:
                        writer.writerow(list(prof.values()))
            except IOError:
                print("I/O error")

        def createprofessorlist(self):#creates List object that include basic information on all Professors from the IDed University
            tempprofessorlist = []
            num_of_prof = self.GetNumOfProfessors(self.UniversityId)
            num_of_pages = math.ceil(num_of_prof / 20)
            i = 1
            while (i <= num_of_pages):# the loop insert all professor into list
                page = requests.get("http://www.ratemyprofessors.com/filter/professor/?&page=" + str(
                    i) + "&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=" + str(
                    self.UniversityId))
                temp_jsonpage = json.loads(page.content)
                temp_list = temp_jsonpage['professors']
                
                tempprofessorlist.extend(temp_list)
                i += 1
            for teacher in tempprofessorlist:
                tSid = teacher['tid']
                page = requests.get(
                    "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=" + str(
                        tSid))
                s = str(page.content)
                key = 'Comments__StyledComments-dzzyvm-0 gRjWel'
                idx = s.find(key)
                if(idx != -1):
                    end_idx = s.find('</div>', idx, len(page.content)-1)
                    teacher['Review'] = html.unescape(s[idx+len(key)+2:end_idx])
                else:
                    teacher['Review'] = ''
                # print(teacher)
            self.addproftoCSV(tempprofessorlist)
            return tempprofessorlist

        def SortByRating(self, isDec):
            if(isDec):
                return sorted(self.professorlist, key = lambda i: i['overall_rating'],reverse=True)
            else:
                return sorted(self.professorlist, key = lambda i: i['overall_rating'])

        def FilterBySubject(self, subject):
            tempList = []
            for teacher in self.professorlist:
                if teacher['tDept'] == subject:
                    tempList.append(teacher)
            return tempList

        def GetAllSubject(self):
            subjectList = []
            for teacher in self.professorlist:
                if teacher['tDept'] in subjectList:
                    subjectList.append(teacher['tDept'])
            return subjectList


        def GetNumOfProfessors(self,id):  # function returns the number of professors in the university of the given ID.
            page = requests.get(
                "http://www.ratemyprofessors.com/filter/professor/?&page=1&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=" + str(
                    id))  # get request for page
            temp_jsonpage = json.loads(page.content)
            num_of_prof = temp_jsonpage[
                              'remaining'] + 20  # get the number of professors at William Paterson University
            return num_of_prof

        def SearchProfessor(self, ProfessorName):
            self.indexnumber = self.GetProfessorIndex(ProfessorName)
            self.PrintProfessorInfo()
            return self.indexnumber

        def GetProfessorIndex(self,ProfessorName):  # function searches for professor in list
            for i in range(0, len(self.professorlist)):
                if (ProfessorName == (self.professorlist[i]['tFname'] + " " + self.professorlist[i]['tLname'])):
                    return i
            return False  # Return False is not found

        def PrintProfessorInfo(self):  # print search professor's name and RMP score
            if self.indexnumber == False:
                print("error")
            else:
                print(self.professorlist[self.indexnumber])

        def PrintProfessorDetail(self,key):  # print search professor's name and RMP score
            if self.indexnumber == False:
                print("error")
                return "error"
            else:
                print(self.professorlist[self.indexnumber][key])
                return self.professorlist[self.indexnumber][key]

# Once a database is created, we can load the info into a database and read from there, so that it doesn't take 20 minutes to run.
Cornell = RateMyProfScraper(298)

