from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)

app.config.from_object('config.DevConfig')

db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow()
cors = CORS()

from app import routes
