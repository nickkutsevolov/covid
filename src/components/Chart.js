import React, { useState, useEffect } from 'react';
import { ComposedChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend  } from 'recharts';

function Chart () {

    const [data, setData] = useState([{Date: '', Confirmed: 0, Deaths: 0, Recovered: 0}]);
    const [country, setCountry] = useState('belarus');

    
    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
        .then(data => data.json())
        .then(data => {
            data.forEach((el, index) => {
                el.Date=el.Date.slice(8,10)+"."+el.Date.slice(5,7);
                if(el.Date === '23.06') data.splice(index+1,1);
            });
            setData(data);
        })
    }, [country])

    return (
        <div className="container flex justify-center mx-auto p-4">
            <ResponsiveContainer width='50%' height={400}>
                <ComposedChart data={data}>
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Confirmed" stroke="dimgrey" fillOpacity={1} fill="dimgrey" />
                    <Area type="monotone" dataKey="Deaths" stackId="1" stroke="crimson" fillOpacity={1} fill="crimson" />
                    <Area type="monotone" dataKey="Recovered" stackId="1" stroke="cadetblue" fillOpacity={1} fill="cadetblue" />
                    <Legend />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;