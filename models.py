from app import db

class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

class Blocks(db.Model):
    classID = db.Column(db.Integer, primary_key=True)
    className = db.Column(db.String(80), unique=False, nullable=False)
    classSection = db.Column(db.String(80), unique=False, nullable=False)
    studentID = db.Column(db.Integer, db.ForeignKey('person.id'),nullable=False)
    
    def __repr__(self):
        return '<Person %r>' % self.username,  