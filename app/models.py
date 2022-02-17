from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    school = db.Column(db.String(100))
    gpa = db.Column(db.String(10))
    year = db.Column(db.String(10))