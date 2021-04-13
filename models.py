from app import db

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    def __repr__(self):
        return '<Person %r>' % self.username
    def __init__(self, username, email):
        self.username = username
        self.email = email
        
class Blocks(db.Model):
    classID = db.Column(db.Integer, primary_key=True)
    className = db.Column(db.String(80), unique=False, nullable=False)
    classSection = db.Column(db.String(80), unique=False, nullable=False)
    studentID = db.Column(db.Integer, db.ForeignKey('person.id'))
    def __init__(self, className, classSection, studentID):
        self.className = className
        self.classSection = classSection
        self.studentID = studentID
    def __repr__(self):
        return "<Blocks(className='%s',classSection='%s',studentID='%s')>" % (self.className, self.classSection,self.studentID)