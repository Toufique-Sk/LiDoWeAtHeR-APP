
**Description**

A web app to fetch 3-hourly weather forecast by city-name.  Weather data is fetched <br/>
from *openweathermap* api.<br/>
<br/>
**Task**

  1. Fetch data from openweather api.
  2. Disign a UI with react to display data. 
  
  
 **Json structure the api is returning**
 
  Actually it returns large data,  SO here i am just showing the structure of data I am using in this app.
  
  ```json
  {
    "list": [
          {
              "main": {
                  "temp_min": 299.211,
                  "temp_max": 301.76,
                  "humidity": 44,
              },
              "weather": [
                  {
                      "main": "Clouds",
                  }
              ],
              "dt_txt": "2019-08-09 12:00:00"
          }],
          "city": {
                    "name": "Berlin"
                  }
     }
 ```
 So we have list of object having 3-hourly weather forcast details.
     
**How to run?**

  First we need to get all the dependencies with command **npm install**

  We can run locally with command ***npm start***, This will start a local server *http://localhost:3000*
  
  
 **where I can see the demo of this app?**<br/>
 <br/>
  The app is deployed in heroku, so to see live demo goto: http://weatherlidoapp.herokuapp.com/
  
