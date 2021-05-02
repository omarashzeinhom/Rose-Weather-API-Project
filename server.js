/*1.
*    Setup empty JS object 
*    to act as endpoint for all routes
*
*/
projectData = {};

/*2. 
    Require Express to run server and routes
*/


const cors = require('cors');


const express = require('express');


const bodyParser = require('body-parser');




/*3. 
    Start up an instance of app
*/


const app = express();


/*4. 
    Port Setup
*/

/*4.1 
    Server Variables
*/ 

const port = 49190; 

const servermessage = `\n*************************************************************
\nThis Server is Currently Running on the Local Host utilizing port:${port}.`;

const serverURLS = `\nURL: http://localhost:49190\n
URL: http://127.0.0.1:49190\n
*************************************************************`;


/*5.
    Dependencies 
*/


/*6.
    Middleware
*/


/*6.1
    Here we are configuring express to use body-parser as middle-ware.
*/


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/*7. 
    Cors for cross origin allowance
*/

app.use(cors());


/*8. 
    Initialize the main project folder
*/


app.use(express.static('website'));



/*9. 
    Setting up the node server.js &
    10. Spinning up the server    
*/


/* 
^    A Listen function 
^    with callback message 
^    To debug . 
^    has been initalized 
^    with an arrow function
^    to console.log 'servermessage'
^    & 'serverURLS'
*/

app.listen(port,()=>{
    //11.Call back to debugs servermessage and URLS For User to click on urls when server starts
    console.log(servermessage);
    console.log(serverURLS);
   
});



    //12. Initialize all route with a callback function
    //13. Callback function to complete GET '/all'

/*12.  
        Get All Data by 
        URL: http://localhost:49190/alldata
    
*/

    app.get('/alldata', (request, response)=>{
        response.send(projectData).status(200).end();
    });
    









    
    
/*14.
        Post Route Data by 
        URL: http://localhost:49190//postalldata
    
*/
    
       
app.post('/postalldata',(request, response) => {
     let projectData = {
            temp:request.body.temp,            
            date: new Date(),
            content: request.body.content
        };
        response.send(projectData).status(200).end();
        console.log(projectData);
    });








