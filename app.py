"""Flask backend for Calender  App"""
import os
from flask import Flask, send_from_directory, json, request, Response
from flask_socketio import SocketIO
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import time
import json

app = Flask(__name__, static_folder='./build/static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

cors = CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(
    app,
    cors_allowed_origins="*",
    json=json,
    manage_session=False
)

@app.route('/', defaults={"filename": "index.html"})
@app.route('/<path:filename>')
def index(filename):
    return send_from_directory('./build', filename)

#api call for the POST request, just adds users into db so far,
@app.route('/login', methods=['POST'])
def login():
    """USERS WHO LOG IN USING API ARE ADDED TO THE DB HERE"""
    user = request.get_json()['user']['name']
    email = request.get_json()['email']['email']
    print(str(email))
    print(str(user))
    is_in_database = bool(
        db.session.query(models.Person).filter_by(username=user).first())
    if not is_in_database:
        user_and_email_added = models.Person(username=user, email=email)
        db.session.add(user_and_email_added)
        db.session.commit()
        print("user added to db")
    else:
        print("return user")
    return user
def blockPull():
    """ not a clue -- I think peter did this"""
    user = request.get_json()['user']['name']
    userData = db.session.query(models.Person).filter_by(username=user).first()
    print(str(userData))
def classInfo(user):
    """ currently not in use, is the logic behind users class will be added in Sprint2"""
    user = user
    userData = db.session.query(models.Person).filter_by(username=user).first()
    userID = userData.id
    classInfo = db.session.query(models.Blocks).filter_by(studentID=userID).first()
    print(classInfo)
    print("----------\n")
    print(str(classInfo.className))
    print(str(classInfo.classSection))

@app.route('/invite', methods=['POST'])
def invite():
    """ EDIT THIS FUNCTION TO RUN A QUERY FOR ALL STUDNETS CLASSES in the future as well"""
    if 'email' in request.args:
        new_email = request.args['email']
        class1 = {"class": "CS490"}
        return mock_class(class1)
    else:
        return Response("Error: No Email Provided", status=400)

    is_in_database = bool(
        db.session.query(models.Person).filter_by(email=new_email).first())
    if not is_in_database:
        return Response("Error: No User With The Email Provided", status=400)
    user_data = db.session.query(models.Person).filter_by(email=new_email).first()
    user_id = user_data.id
    class_info = db.session.query(models.Blocks).filter_by(studentID=user_id)
    return Response(class_info, status=200)

def mock_class(class1):
    """ Mocked data for scheduled classes"""
    class1 = {"class": "CS490"}
    mock_class = json.dumps(class1)
    return mock_class


if __name__ == '__main__':
    import models
    db.create_all()
    app.run(
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
    )
    