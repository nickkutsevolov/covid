import React, { useState, useEffect } from 'react';
import useSummary from './useSummary';
import Row from './Row';

function Table() {
    const api = useSummary();
    const [data, setData] = useState([]);
    const [sort, setSort] = useState('');
    const [reverseSort, setReverseSort] = useState(false);

    useEffect(() => {
        setData(api.sort((a, b) => a.Country.localeCompare(b.Country)))        
    }, [api])

    if (sort) {
    sort === 'Country'   ? setData(api.sort((a, b) => a.Country.localeCompare(b.Country))) :
    sort === 'Confirmed' ? setData(api.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)) :
    sort === 'Deaths'    ? setData(api.sort((a, b) => b.TotalDeaths - a.TotalDeaths)) :
    sort === 'Recovered' ? setData(api.sort((a, b) => b.TotalRecovered - a.TotalRecovered)) :
    sort === 'Lethality' ? setData(api.sort((a, b) => b.Lethality - a.Lethality)) :
                           setData(api.sort((a, b) => b.InfectionRate - a.InfectionRate));
    setSort('');
    }

    if (reverseSort) {
        setData(data.reverse());
        setReverseSort(false);
    }

    function sortHandler (e) {
        if(e.target.innerHTML.includes('↓')) {
            setReverseSort(true);
            e.target.innerHTML = e.target.innerHTML.replace('↓', '↑')
        }
        else if(e.target.innerHTML.includes('↑')) {
            setReverseSort(true);
            e.target.innerHTML = e.target.innerHTML.replace('↑', '↓')
        }
        else {
            e.target.parentNode.querySelectorAll('th').forEach(el => {if(el.innerHTML.match(/↓|↑/g)) el.innerHTML = el.innerHTML.match(/[A-Za-z]*/)[0]});
            e.target.innerHTML = e.target.innerHTML+' ↓';
            setSort(e.target.innerHTML.match(/[A-Za-z]*/)[0])
        }
    }

    return (
        <div className="container mx-auto p-4">
            <table className="table-auto mx-auto">
                <thead>
                    <tr className="text-xl cursor-pointer" onClick={sortHandler}>
                        <th className="px-4 py-2">Country ↓</th>
                        <th className="text-right px-4 py-2 bg-gray-200">Confirmed</th>
                        <th className="text-right px-4 py-2">Deaths</th>
                        <th className="text-right px-4 py-2 bg-gray-200">Recovered</th>
                        <th className="text-right px-4 py-2">Lethality</th>
                        <th className="text-right px-4 py-2 bg-gray-200">InfectionRate</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.map((el, index) => <Row data={el} key={el.CountryCode + index} />) : <></>}
                </tbody>
            </table>
        </div>
    );
}

export default Table;