
/*A. 
*    Global Variables 
*/


/*B. URLS
    apiUrl to connect 
    local host port 49190
    to openweather api

*/


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';


const apiUrl = "http://localhost:49190/";


/*1. 
Personal API Key for OpenWeatherMap API
*/

/*1.1
    A-P-I K-e-y 
    Retrieved from 
    openweathermap
    added parameters
    units=metric
    language=english

*/

const apiKey = '&appid=e567a58a8c8cdff9cdd1aa5b020aff9b&units=metric&lang=en';


/*1.2 
    Date ,Temperature, Content, Feelings  Zip & Code Elements
*/

const dateElm = document.getElementById('date');

const tempElm = document.getElementById('temp');

const contentElm = document.getElementById('content');

//Entries

const zipCodeElm = document.getElementById('zip');

const feelingsElm = document.getElementById('feelings');

// button for event listener 
const genButtonElm = document.getElementById('generate');


/*1.3
    Value of
    Entry 
    Elements for ZipCode & Feelings
*/


const zipcodeElmValue = document.getElementById('zip').value;


const feelingsElmValue = document.getElementById('feelings').value;


const contentElmValue = document.getElementById('content').value;

/* 1.4

    In Case of Errors 
    ------------------------------  
    A const has been added
    that has an arrow function error 
    which console.logerrors 
    when finding errors

   
*/


function getError(error) {
    console.error('An Error Has Been Found:', error);
    return alert(error);
}


/*1.5 
    Create a new date instance dynamically with JS
*/
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


/*2.
    Adding an event listener 
    to an existing 
    HTML button 
    from DOM using Vanilla JS
*/


genButtonElm.addEventListener('click', whenGenerating);


/*3. 
*   Function 'whenGenerating()'assigned 
*   to be called by event listener 
*   Which holds zipcodeElm & feelingselm.
*/


function whenGenerating() {
    debugger
    //zcd stands for zipcode content & date 
    let zcdinfo = {
        zipCode: zipCodeElm.value,
        content: contentElm.value,
        date: new Date()
    };


/* Posting the Data to the Api and retrieve the Zipcode Information*/

fetchZCDinfo(zcdinfo.zipCode).then(() => {
    //Retrieve and show alert if city is not found
    debugger
    if (zcdinfo.zipCode != 200)
        return alert(zcdinfo.zipCode);
        /*Currently 
        Post the Data to 
        the server for saving 
        and Displaying in Holder Section
        */
        zcdinfo.temp = main.temp;
        zcdinfo.date = new date();
        zcdinfo.content = main.content;

    }).catch(getError).then(
        UpdUi())




/* Notes
    Link for Api fetch used later on
       * Reference*
         https://openweathermap.org/current#zip
    
        *Example*
     api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
    
*/


/*4.
    
     Function to GET Web API Data
    
*/

async function fetchZCDinfo(zipCode) {
        return await (fetch(`${baseUrl}${zipCode}${apiKey}`)).then(
            (jSONdata) => { return jSONdata.json(); }
        ).then(
            (data) => {
                const maintemp = data.main.temp;
                alert(data.main.temp);
                const date = new Date();
                console.log(maintemp);
                console.log(date);                
                console.log(feelingsElmValue);

               postDateonSrvr(data);
               UpdUi(data);
                




            });


/*5. 
    Function to 
    POST data 
    Post Data 
    to server for saving
        
*/


        async function postDateonSrvr(data) {
            let response = await fetch(`${apiUrl}postalldata`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                temp:  data.main.temp,
                date:  new Date(),
                content: data.main.content
            })  
            });
            try {
                response.json().then((postinfo) => {
                    if (response.ok)
                        UpdUi();
                    else
                        alert('The process has not completed successfuly');
                }).catch(getError);

            } catch (error) {
                getError(error);
            }
        }

    };


/*6.    Update the User Interface
        With an UpdatingSeverUI
         Function to GET
         Project Data
        
        
*/



async function UpdUi(updatedata) {
        let response = await fetch(`${apiUrl}alldata`)
        try {
            response.json().then((updatedata) => {{     
                contentElm.innerHTML = `My Current feelings are: ${feelingsElm.value}`;
                dateElm.innerHTML = `The Date is: ${new Date()}`;
                tempElm.innerHTML = `The Temperature is: ${updatedata.main.temp}`;
            };          
            }).catch(getError);
        } catch (error) {
            getError(error);
        }
    }


};












/*7.
    Set timeout function 
    For 5 minutes 1000ms 
    = 1 seconds
    
W3Schools(2021),https://www.w3schools.com/jsref/met_win_settimeout.asp    
*/


const setTimeOut5min = setTimeout(function(){
    alert("You Have Been Idle For 5 Minutes");
},300000);


const setTimeOut10min = setTimeout(function(){
    alert("You Have Been Idle For 10 Minutes");
},600000);


const setTimeOut15min = setTimeout(function(){
    alert("You Have Been Idle For 15 Minutes");
},900000);