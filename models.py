from app import DB as db

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
    timeStart = db.Column(db.Time, nullable = False)
    timeEnd = db.Column(db.Time, nullable = False)
    day_of_week = db.Column(db.Integer, nullable=False)
    studentID = db.Column(db.Integer, db.ForeignKey('person.id'))
    def __init__(self, className, classSection,timeStart, timeEnd, day_of_week,studentID):
        self.className = className
        self.classSection = classSection
        self.studentID = studentID
        self.timeStart = timeStart
        self.timeEnd = timeEnd
        self.day_of_week = day_of_week
    def __repr__(self):
        return "<Blocks(className='%s',classSection='%s',timeStart='%s',timeEnd='%s',day_of_week = '%s', studentID='%s')>" % (self.className, self.classSection,self.timeStart, self.timeEnd, self.day_of_week, self.studentID)