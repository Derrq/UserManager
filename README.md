# UserManager
A React/Redux/Python app built to use Python-tornado's RESTful API to perform CRUD operations to manage users.


**To Run Back end:**
- cd userApp-backend
- py app.py

**To Run Front-end:**
- cd userApp-frontend/user-app
- npm start

This runs the app in the development mode. 
**NOTE:** 
Since the back-end would run on port 3000 then you would have to run the front-end on a different port so on the prompt self y/yes and Open http://localhost:3001 to view it in your browser.

**Database Set up**
The backup.sql file with the database schema can be found in the userApp-backend directory. 2 ways to resore the db:
1. Use the command below to reload the archived schema into a database named _userMgt_:
$ pg_restore -d userMgt --create backup.sql

2. Use the pgAdmin tool to 
- create DB 
- Do a restore on the new database by selecting the db, right-clicking on the database and selecting RESTORE
- Then select required options like as user, backed up file and restore options
- Finally, click on the Restore button to start restoring the database.


Working application would look like this on your browser:
![image](https://user-images.githubusercontent.com/23152855/164946205-246bc209-3f6e-4bb0-aa13-96f49a2d9033.png)
