# Rose---Weather App Project
                                                                                 
##  Steps Done


### 1.Package Requirements & Installed
-----------------------------------

1. Node.js

2. Cors npm package

3. Express npm package

4. body-parser npm package




#### 2. Styles Added to CSS3 stylesheet to be more responsive
-------------------------------------

1. Back-ground Changed to linear gradients

2. Font-size changed to vw to be more responsive 

3. Buttons and content of page width adjusted
with width = 100% , max and min width aswell.

4. Forum Elements made responsive W3Schools(2021)

5. Hover animations have been added as well as when inputing text the background of input & text changes with an animation.


##### 3. server.js 
-------------------------------------
1.  Setup empty JS object to act as endpoint for all routes

2. Require Express to run server and routes

3. Start up an instance of app

4. Port Setup Port assigned to a dynamic port(49190) due to issues in port 8080.

5. Dependencies

6. Middleware Installed body-parser

7. Cors for cross origin allowance

8. Initializing the main project folder

9. Setting up a node.js server

10. Spinning up the server

11. Callback to debug with console.log message 

12. Initializing /allData route with a callback function

13. Assigning a Callback function to complete GET '/allData' Get All Data by 
        URL: http://localhost:49190/allData

14. Post Route Data by
URL: http://localhost:49190/postallData


###### 4. app.js
-------------------------------------

1. Global Variables 

2. URLS apiUrl to connect local host port 49190 to openweather api

3. Personal API Key for OpenWeatherMap API

4. Date ,Temperature, Content, Feelings  Zip & Code Elements & Page Entries

5. Button genButtonElm 

6.  Value of Entry  Elements for ZipCode & Feelings

7. In Case of Errors a function getError has been added to console.error errors found in the page.
   

8. Created a NeW Date instance dynamically with js

9. Added an event listener to an existing HTML button from DOM using Vanilla JS

10. Function 'whenGenerating()'assigned to be called by event listener Which holds zipcodeElm & feelingselm.

11. Posting the Data to the Api and retrieve the Zipcode Information

12. Function fetchZCDinfo to GET Web API Data

13. Function PostDataonserver to POST data & PostDataonserver for saving

14. Update the User InterfaceWith an UpdatingSeverUI Function to GET Project Data

15. Set timeout function For 5,10 & 15minutes 
1000ms = 1 seconds        

###### 5. References
-------------------------------------
1. W3Schools(2021) How TO - Responsive Form
https://www.w3schools.com/howto/howto_css_responsive_form.asp


2.W3Schools(2021)Window setTimeout() Method- https://www.w3schools.com/jsref/met_win_settimeout.asp
