import React, { useState, useEffect } from 'react';
import PeriodSort from './PeriodSort';
import Select from 'react-select';
import useDayOne from './useDayOne';
import useSummary from './useSummary';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend  } from 'recharts';

function TotalChart () {
    const [country, setCountry] = useState(''); 
    const api = useDayOne(country);
    const selectList = useSummary(true);
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState('From day 1');
    
    useEffect(() => {
        period==='From day 1' ? setData(api):
        period==='Last month' ? setData(api.slice(-31)):
        setData(api.slice(-10));
    }, [api, period])

    return (
        <div className="container flex flex-col items-center mx-auto p-4">
            <Select className="w-64"
                placeholder="Select country..."
                options={selectList.map(el => {
                    return {value:el.Slug, label:el.Country}
                    })} 
                onChange={option => {if (option) setCountry(option.value)}}
                isClearable={true}
            />
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