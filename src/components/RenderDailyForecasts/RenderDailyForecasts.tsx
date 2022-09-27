import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './RenderDailyForecasts.css';
import moment from "moment";


export const Item = ({ Date, Temperature, index, LocalizedName, WeatherText, MobileLink }: any) => {
    const { Minimum, Metric } = Temperature
    const day = Date ? moment(Date).format('dddd').substring(0, 3) : null;
    return (
        <div key={MobileLink + index.toString()} className='item-container'>
            <h2>{LocalizedName || day}</h2>
            <h2>{`${Metric ? Metric?.Value : Minimum?.Value} ${Metric ? Metric?.Unit : Minimum?.Unit}`}</h2>
            <h3>{WeatherText}</h3>
            {LocalizedName && <Link className='link' to={`/${LocalizedName}`}>
                <p className='homePage-link'>View</p>
            </Link>}
        </div >
    )
}
const RenderDailyForecasts = ({ data }: any) => {
    const listItems = data?.map((d: any, index: number) => <Item key={index.toString()} {...d} index={index} />) || <div />;

    return (
        <div className='container'>
            {listItems}
        </div>
    )
}

export default RenderDailyForecasts;
