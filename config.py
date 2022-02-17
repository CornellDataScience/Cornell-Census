from os import environ, path


class Config:
    """Base config."""
    WTF_CSRF_ENABLED = True,
    SECRET_KEY = 'absalkfjadslk',
    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BASE_DIR = path.abspath(path.dirname(__file__))  
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + path.join(BASE_DIR, 'app/data.db')
    DATABASE_CONNECT_OPTIONS = {}
    THREADS_PER_PAGE = 2


class ProdConfig(Config):
    FLASK_ENV = 'production'
    DEBUG = False
    TESTING = False
    DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')
    


class DevConfig(Config):
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = True
    DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')