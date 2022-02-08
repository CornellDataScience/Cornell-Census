from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    school = db.Column(db.String(100))
    gpa = db.Column(db.String(10))
    year = db.Column(db.String(10))