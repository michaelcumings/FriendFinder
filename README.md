# FriendFinder

This mimics the functionality of a dating app using express, and the
server is hosted on heroku.

There are two html pages, home.html and survey.html, both having a
link which returns a json object containing the information for all
of the "friends" who have already completed the survey.  Any path but
/survey or /api/friends leads to home.html, which contains a
blurb inviting the user to go to the survey.  At the survey page, the
user is prompted to supply a name and a picture URL, along with
answers to 10 survey prompts (the answers are all numbers from 1 to 5).
Once the survey is submitted, the app compares the user's answer to
every other friend in the array, (calculating how far off each answer
was), and returns the name and picture of the friend whose answers
were closest to the user's answers.

This project uses the express module.