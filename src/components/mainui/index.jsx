import React from "react";
import "./style.scss"
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ThreeHourlyInfo from "../hourlyInfo";


const API_KEY= "f9eb6cea9d5a292706b1bb65ba45e432";

export default class MainUi extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            today:[{dt_txt:"NA", weather:{0:{main:"NA"}}, main:{ temp_max:"NA", temp_min:"NA" , humidity:"NA"}}],
            tomorrow:[{dt_txt:"NA", weather:{0:{main:"NA"}}, main:{ temp_max:"NA", temp_min:"NA" , humidity:"NA"}}],
            //after:[{dt_txt:"NA", weather:{0:{main:"NA"}}, main:{ temp_max:"NA", temp_min:"NA" , humidity:"NA"}}],
            hideData:false
        };
       
    }

    handleChange = event => {
        this.setState({ cityName: event.target.value});

      };

    getWeather()
    {
        const date= new Date();
        const year = date.getFullYear()
        const month = `${date.getMonth() + 1}`.padStart(2, 0)
        const day = `${date.getDate()}`.padStart(2, 0)
        const nextDay = `${date.getDate()+1}`.padStart(2, 0)
        const todaysDate = [year,month,day].join("-")
        const tomorrowsDate=[year,month,nextDay].join("-")



        const URL=`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&appid=${API_KEY}`
        axios.get(URL).then(res=>{
            return(res.data);
        }).then(data=>{
            this.setState({hideData:true})
            var tod=[],tom=[];

            for(let i in data.list)
            {
                if(data.list[i].dt_txt.split(" ")[0]===todaysDate){
                    tod.push(data.list[i]);
                }
                else if(data.list[i].dt_txt.split(" ")[0]===tomorrowsDate)
                {
                    tom.push(data.list[i]);
                }
                /*else{
                    ten.push(data.list[i]);
                }*/
                
            }
            this.setState({today:tod});
            this.setState({tomorrow:tom});
            //this.setState({after:ten});
            //console.log(tod);
            //console.log(tom);
            //console.log(ten);
        }).catch(err=>{
            console.log(err);
        })
       
        
    }

    render(){
        return <div className="view-container">
                <div className="title"><h2>LiDoWeAtHeR</h2></div>
                <div className="search-section">
                    <div className="search-box">
                        <input type="text"  value={this.cityName} onChange={this.handleChange.bind(this)} id="input1" placeholder="Enter a city name"></input>
                        <label for="input1">City</label>
                    </div>
                    <div className="button-view">
                        <button className="button-get" onClick={this.getWeather.bind(this)}>Get Weather</button>
                    </div>
                </div>
                {
                    this.state.hideData?
                    <div className="two-days">
                        <Tabs>
                        <TabList className="list">
                            <Tab>Today</Tab>
                            <Tab>Tomorrow</Tab>
                        </TabList>
                    
                        <TabPanel>
                            {this.state.today.map((info)=>{
                                    return <ThreeHourlyInfo passedData={info}/>
                            })}
                        </TabPanel>
                        <TabPanel>
                            {this.state.tomorrow.map((info)=>{
                                    return <ThreeHourlyInfo passedData={info}/>
                            })}
                        </TabPanel>
                        </Tabs>
                    </div>
                    :null
                }
      </div>
    }
}