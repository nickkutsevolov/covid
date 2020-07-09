import React, { useState, useEffect } from 'react';
import PeriodSort from './PeriodSort';
import { ComposedChart, Line, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ReferenceLine  } from 'recharts';

function TendencyChart () {
    
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('belarus');
    const [period, setPeriod] = useState('From day 1');

    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(data => data.json())
        .then(data => {
            data.forEach((el, index) => {
                el.ActiveCases = el.Confirmed - el.Recovered - el.Deaths;
                if(index>0) {
                    el.NewConfirmed = data[index-1].Confirmed - el.Confirmed;
                    el.NewDeaths = el.Deaths - data[index-1].Deaths;
                    el.NewRecovered = el.Recovered > data[index-1].Recovered ? el.Recovered - data[index-1].Recovered : 0;
                    el.Tendency = el.NewConfirmed + el.NewDeaths + el.NewRecovered;
                }
                el.Date=el.Date.slice(8,10)+"."+el.Date.slice(5,7);
            });

            period==='From day 1' ? setData(data):
            period==='Last month' ? setData(data.slice(-31)):
            setData(data.slice(-10));
        })
    }, [period])

    return (
        <div className="container flex flex-col items-center mx-auto p-4">
            <PeriodSort sortBy={(sortValue) => setPeriod(sortValue)} />
            <ResponsiveContainer width='100%' height={400}>
                <ComposedChart data={data}>
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="NewConfirmed" stackId="1" fill="dimgrey" />
                    <Bar dataKey="NewRecovered" stackId="1" fill="cadetblue" />
                    <Bar dataKey="NewDeaths" stackId="1" fill="crimson" />
                    <Line dataKey="Tendency" stroke="black" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TendencyChart;