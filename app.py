"""Flask backend for Calender  App"""
import os
from flask import Flask, send_from_directory, json, request, Response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



APP = Flask(__name__, static_folder='./build/static')
APP.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('HEROKU_POSTGRESQL_BRONZE_URL')
APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
DB = SQLAlchemy(APP)

cors = CORS(APP, resources={r"/*": {"origins": "*"}})   # pylint: disable=invalid-name


@APP.route('/', defaults={"filename": "index.html"})
@APP.route('/<path:filename>')
def index(filename):
    """runs flask"""
    return send_from_directory('./build', filename)

#api call for the POST request, just adds users into DB so far,
@APP.route('/login', methods=['POST'])
def login():
    """USERS WHO LOG IN USING API ARE ADDED TO THE DB HERE"""
    user = request.get_json()['user']['name']
    email = request.get_json()['email']['email']
    print(str(email))
    print(str(user))
    is_in_database = bool(
        DB.session.query(models.Person).filter_by(username=user).first()) # pylint: disable=no-member
    if not is_in_database:
        user_and_email_added = models.Person(username=user, email=email)
        DB.session.add(user_and_email_added) # pylint: disable=no-member
        DB.session.commit() # pylint: disable=no-member
        print("user added to DB")
    else:
        print("return user")
    return user
def block_pull():
    """ not a clue -- I think peter did this"""
    user = request.get_json()['user']['name']
    user_data = DB.session.query(models.Person).filter_by(username=user).first() # pylint: disable=no-member
    print(str(user_data))
def class_info(user):
    """ currently not in use, is the logic behind users class will be added in Sprint2"""
    user = user    # pylint: disable=self-assigning-variable
    user_data = DB.session.query(models.Person).filter_by(username=user).first() # pylint: disable=no-member
    user_id = user_data.id
    user_class_info = DB.session.query(models.Blocks).filter_by(studentID=user_id).first() # pylint: disable=no-member
    print(user_class_info)
    print("----------\n")
    print(str(user_class_info.className))
    print(str(user_class_info.classSection))

@APP.route('/invite', methods=['POST'])
def invite():
    """ EDIT THIS FUNCTION TO RUN A QUERY FOR ALL STUDNETS CLASSES in the future as well"""
    if 'email' in request.args:  # pylint: disable=no-else-return
        new_email = request.args['email']
        class1 = {
<<<<<<< HEAD
        "class": "CS490",
        "section":"004",
        "start time": "12:30 pm",
        "end time": "1:50pm",
        "day": "Tuesday"
    }
=======
            "class": "CS490",
            "section":"004",
            "start time": "12:30 pm",
            "end time": "1:50pm",
            "day": "Tuesday"
        }
>>>>>>> main
        return mock_class(class1)
    else:  # pylint: disable=no-else-return
        return Response("Error: No Email Provided", status=400)

    is_in_database = bool(
        DB.session.query(models.Person).filter_by(email=new_email).first()) # pylint: disable=no-member
    if not is_in_database:
        return Response("Error: No User With The Email Provided", status=400)
    user_data = DB.session.query(models.Person).filter_by(email=new_email).first() # pylint: disable=no-member
    user_id = user_data.id
    user_class_info = DB.session.query(models.Blocks).filter_by(studentID=user_id) # pylint: disable=no-member
    return Response(user_class_info, status=200)

def mock_class(class1):
    """ Mocked data for scheduled classes"""
    class1 = {
        "class": "CS490",
        "section":"004",
        "start time": "12:30 pm",
        "end time": "1:50pm",
        "day": "Tuesday"
    }
    mock_class = json.dumps(class1)
    return mock_class


if __name__ == '__main__':
    import models
    DB.create_all()
    APP.run(
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
    )
