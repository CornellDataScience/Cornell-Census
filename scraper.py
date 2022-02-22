from tkinter import E
import requests
import json
import math
import html

class RateMyProfScraper:
        def __init__(self,schoolid):
            self.UniversityId = schoolid
            self.professorlist = self.createprofessorlist()
            self.indexnumber = False

        # can you filter on course subject, or around courses?, around difficulty rating, etc?
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
            # print(tempprofessorlist)
            return tempprofessorlist

        def getReviews(self):
            
            for teacher in self.professorlist:
                tSid = teacher['tid']
                # print(tSid)
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
                # print(teacher['Review'])
            return self.professorlist

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


Cornell = RateMyProfScraper(298)
Cornell.getReviews()

# MassInstTech = RateMyProfScraper(580)
# MassInstTech.SearchProfessor("Robert Berwick")
# MassInstTech.PrintProfessorDetail("overall_rating")