import React, { useState, useEffect } from 'react';
import PeriodSort from './PeriodSort';
import Select from 'react-select';
import useDayOne from './useDayOne';
import useSummary from './useSummary';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, ReferenceLine  } from 'recharts';

function TendencyChart () {
    const [country, setCountry] = useState('belarus'); 
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
        <div className="container flex flex-col items-center mx-auto p-12 w-2/3 rounded-lg bg-white">
            <div className="flex flex-row justify-between w-full pl-16 pr-1">
                <Select className="w-64"
                    placeholder="Select country..."
                    options={selectList.map(el => ({value:el.Slug, label:el.Country}))}
                    onChange={option => {if (option) setCountry(option.value)}}
                    isClearable={true}
                />
                <PeriodSort sortBy={(sortValue) => setPeriod(sortValue)} />
            </div>
            <ResponsiveContainer width='100%' height={400}>
                <BarChart data={data} stackOffset="sign">
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="NewConfirmed" stackId="1" fill="dimgrey" />
                    <Bar dataKey="NewRecovered" stackId="1" fill="cadetblue" />
                    <Bar dataKey="NewDeaths" stackId="1" fill="crimson" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TendencyChart;