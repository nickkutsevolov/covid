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

    if(reverseSort) {
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
            e.target.parentNode.querySelectorAll('div').forEach(el => {if(el.innerHTML.match(/↓|↑/g)) el.innerHTML = el.innerHTML.match(/[A-Za-z]*/)[0]});
            e.target.innerHTML = e.target.innerHTML+' ↓';
            setSort(e.target.innerHTML.match(/[A-Za-z]*/)[0])
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="table w-full">
                <div className="table-row text-xl cursor-pointer" onClick={sortHandler}>
                    <div className="table-cell p-1">Country ↓</div>
                    <div className="table-cell text-right p-1 bg-gray-200">Confirmed</div>
                    <div className="table-cell text-right p-1">Deaths</div>
                    <div className="table-cell text-right p-1 bg-gray-200">Recovered</div>
                    <div className="table-cell text-right p-1">Lethality</div>
                    <div className="table-cell text-right p-1 bg-gray-200">InfectionRate</div>
                </div>
                {data.length ? data.map((el, index) => <Row data={el} key={el.CountryCode + index} />) : <></>}
            </div>
        </div>
    );
}

export default Table;