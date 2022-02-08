from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

db = SQLAlchemy()
DB_NAME = "data.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'jjnnbjdbbed'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    #app.config['SQLALCHEMY_DATABASE_URI'] = DB_NAME
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    from .models import User
    from .cornellcensus import cornellcensus

    app.register_blueprint(cornellcensus, url_prefix='/')

    create_database(app)

    return app

def create_database(app):
    if not path.exists('web/' + DB_NAME): #'web/' + 
        db.create_all(app=app)
        print('Created Database!')

