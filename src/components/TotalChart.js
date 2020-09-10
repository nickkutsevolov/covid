import React, { useState, useEffect } from 'react';
import SpanSort from './SpanSort';
import Select from 'react-select';
import useDayOne from './useDayOne';
import useSummary from './useSummary';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend  } from 'recharts';

function TotalChart () {
    const [country, setCountry] = useState('belarus'); 
    const api = useDayOne(country);
    const selectList = useSummary(true);
    const [data, setData] = useState([]);
    const [span, setSpan] = useState('From day 1');
    
    useEffect(() => {
        span==='From day 1' ? setData(api):
        span==='Last month' ? setData(api.slice(-31)):
        setData(api.slice(-10));
    }, [api, span])

    return (
        <div className="container flex flex-col items-center mx-auto p-12 w-2/3 rounded-lg bg-white">
            <div className="flex flex-row justify-between w-full pl-16 pr-1 mb-6">
                <Select className="w-64"
                    placeholder={country==="belarus" ? "Belarus" : "Select country..."}
                    options={selectList.map(el => ({value:el.Slug, label:el.Country}))}
                    onChange={option => {if (option) setCountry(option.value)}}
                    isClearable={true}
                />
                <SpanSort sortBy={(sortValue) => setSpan(sortValue)} />
            </div>
            <ResponsiveContainer width='100%' height={400}>
                <AreaChart data={data}>
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Confirmed" stroke="#718096" fillOpacity={1} fill="#718096" />
                    <Area type="monotone" dataKey="Deaths" stackId="1" stroke="#e53e3e" fillOpacity={1} fill="#e53e3e" />
                    <Area type="monotone" dataKey="Recovered" stackId="1" stroke="#319795" fillOpacity={1} fill="#319795" />
                    <Legend />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TotalChart;