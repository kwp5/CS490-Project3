# CS490-Project3
Heroku link: https://cs490-project3-group9.herokuapp.com/


# Pylint ignored errors:
 pylint: disable=no-member, This one is ignored because postgress queries dont work without it  
 pylint: disable=no-else-return, This is ignored because the API calls between the front end and backend require it, when theres an 400 HTTP error  
 pylint: disable=self-assigning-variable, This is ignored because I found no obvious workaround it  
 pylint: disable=invalid-name, This is an error on the cors settings for flask we previously had  
