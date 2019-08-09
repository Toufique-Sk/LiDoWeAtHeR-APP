import React from "react";
import "./style.scss"
import Clock from "../../resource/clock.png"
import MaxMin from "../../resource/min-max.png"


export default class ThreeHourlyInfo extends React.Component
{
    constructor(props){
        super(props)
        this.state={

        };
    }

    convertTemp(temp){
        let x=parseFloat(temp)
        return (x-273.15).toFixed(2);
    }
    render(){
        const{passedData}=this.props;
        
        return <div className="cards">
            <div className="data-view">
                <div className="time-view"> 
                    <div className="time-image">
                        <img src={Clock} alt="Time" width="40" height="40"></img>
                    </div>
                    <div className="time-data">
                        {passedData.dt_txt.split(" ")[1]}<br/>
                    </div>
                </div>
                <div className="info-view">
                    <div className="humidity-view">
                        {passedData.main.humidity} %<br/>
                    </div>
                    <div className="weather-img">
                        <img src={require('../../resource/' + passedData.weather[0].main + '.png')} alt={passedData.weather[0].main} width="30" height="30"></img>
                    </div>
                    <div className="temp-img">
                        <img src={MaxMin} alt="MinMax" width="30" height="40"/>
                    </div>
                    <div className="temp-view">
                        <div className="max-temp">
                            {this.convertTemp(passedData.main.temp_max)} °C<br/>
                        </div>
                        <div className="min-temp">
                            {this.convertTemp(passedData.main.temp_min)} °C<br/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr-line"/>            
        </div>
    }
}
