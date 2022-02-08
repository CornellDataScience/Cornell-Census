from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, StringField, SelectField, FloatField
from wtforms.validators import DataRequired, AnyOf
from django.core.validators import MaxValueValidator, MinValueValidator


class form(FlaskForm):
    """
    creates the form for user input
    """
    colleges = ['College of Engineering', 'College of Arts and Sciences', 'SC Johnson School of Business', 'College of Agriculture and Life Sciences', 'College of Human Ecology']
    majorsCOE = ['Computer Science', 'Electrical and Computer Engineering', 'Mechanical Engineering', 'Chemical Engineering']
    years = ['Freshman', 'Sophomore', 'Junior', 'Senior']

    cField = SelectField('Select Your College', choices=colleges)
    mField = SelectField('Select Your Major', choices=majorsCOE)
    yField = SelectField('Select Your Year', choices=years)
    gField = FloatField('GPA', validators=[DataRequired(), MaxValueValidator(4.3, "GPA cannot be greater than 4.3."), MinValueValidator(1.0, "GPA cannot be less than 1.0.")])
    sField = SubmitField('Submit Data')

