## Sprint 2 link
Heroku link: https://cs490-project3-group9-sprint2.herokuapp.com/

# Study Dates
Study Dates is an application for creating class schedules and sharing them with your friends so you can find days and times when you're all free to study.
Project 3 for cs490 at NJIT. Made by Kyle Partyka, Maamon Sakar, Peter Tran, and Samuel Muller.

You can see the latest version (sprint 2) at the above link.


## Sprint 1 link
Heroku link: https://cs490-project3-group9.herokuapp.com/


## Pylint ignored errors:
 pylint: disable=no-member, This one is ignored because postgress queries dont work without it  
 pylint: disable=no-else-return, This is ignored because the API calls between the front end and backend require it, when theres an 400 HTTP error  
 pylint: disable=self-assigning-variable, This is ignored because I found no obvious workaround it  
 pylint: disable=invalid-name, This is an error on the cors settings for flask we previously had  
