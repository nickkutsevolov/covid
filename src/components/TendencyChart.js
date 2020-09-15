import React, { useState, useEffect } from 'react';
import SpanSort from './SpanSort';
import Select from 'react-select';
import useDayOne from './useDayOne';
import useSummary from './useSummary';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ReferenceLine  } from 'recharts';

function TendencyChart () {
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
        <div className="flex flex-col items-center mx-auto p-12 w-2/3 rounded-lg bg-white">
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
                <BarChart data={data} stackOffset="sign">
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="NewConfirmed" stackId="1" fill="#718096" />
                    <Bar dataKey="NewRecovered" stackId="1" fill="#319795" />
                    <Bar dataKey="NewDeaths" stackId="1" fill="#e53e3e" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TendencyChart;