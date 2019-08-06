import React from "react";
import "./style.scss"


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
                    Time: {passedData.dt_txt.split(" ")[1]}<br/>
                </div>
                <div className="info-view">
                    Min Temp: {this.convertTemp(passedData.main.temp_min)} °C<br/>
                    Max Temp: {this.convertTemp(passedData.main.temp_max)} °C<br/>
                    Humidity: {passedData.main.humidity} %<br/>
                    Weather Info: {passedData.weather[0].main}
                </div>
            </div>
            <hr/>            
        </div>
    }
}
