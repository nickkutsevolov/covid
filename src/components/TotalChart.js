import React, { useState, useEffect } from 'react';
import PeriodSort from './PeriodSort';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend  } from 'recharts';

function TotalChart () {

    const [data, setData] = useState([]);
    const [country] = useState('belarus');
    const [period, setPeriod] = useState('From day 1');
    
    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(data => data.json())
        .then(data => {
            data.forEach( el => {
                el.Date=el.Date.slice(8,10)+"."+el.Date.slice(5,7);
            });

            period==='From day 1' ? setData(data):
            period==='Last month' ? setData(data.slice(-31)):
            setData(data.slice(-10));
        })
    }, [country,period])

    return (
        <div className="container flex flex-col items-center mx-auto p-4">
            <PeriodSort sortBy={(sortValue) => setPeriod(sortValue)} />
            <ResponsiveContainer width='100%' height={400}>
                <AreaChart data={data}>
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Confirmed" stroke="dimgrey" fillOpacity={1} fill="dimgrey" />
                    <Area type="monotone" dataKey="Deaths" stackId="1" stroke="crimson" fillOpacity={1} fill="crimson" />
                    <Area type="monotone" dataKey="Recovered" stackId="1" stroke="cadetblue" fillOpacity={1} fill="cadetblue" />
                    <Legend />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TotalChart;