import React, { useState, useEffect } from 'react';
import PeriodSort from './PeriodSort';
import useDayOne from './useDayOne';
import { ComposedChart, Line, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ReferenceLine  } from 'recharts';

function TendencyChart () {
    const api = useDayOne();
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState('From day 1');
    
    useEffect(() => {
        period==='From day 1' ? setData(api):
        period==='Last month' ? setData(api.slice(-31)):
        setData(api.slice(-10));
    }, [api, period])

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