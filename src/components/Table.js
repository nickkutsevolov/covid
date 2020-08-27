import React, { useState, useEffect } from 'react';
import useSummary from './useSummary';
import Row from './Row';
import Pagination from './Pagination';

function Table() {
    const api = useSummary(false);
    const [data, setData] = useState([]);
    const [sort, setSort] = useState('');
    const [reverseSort, setReverseSort] = useState(false);
    const [range, setRange] = useState([0,9]);

    useEffect(() => {
        setData(api.sort((a, b) => a.Country.localeCompare(b.Country)).map((el,index) => ({...el,Position:index+1})))
    }, [api])
    
    if (sort) {
        sort === 'Country'   ? setData(api.sort((a, b) => a.Country.localeCompare(b.Country)).map((el,index) => ({...el,Position:index+1}))) :
        sort === 'Confirmed' ? setData(api.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).map((el,index) => ({...el,Position:index+1}))) :
        sort === 'Deaths'    ? setData(api.sort((a, b) => b.TotalDeaths - a.TotalDeaths).map((el,index) => ({...el,Position:index+1}))) :
        sort === 'Recovered' ? setData(api.sort((a, b) => b.TotalRecovered - a.TotalRecovered).map((el,index) => ({...el,Position:index+1}))) :
        sort === 'Lethality' ? setData(api.sort((a, b) => b.Lethality - a.Lethality).map((el,index) => ({...el,Position:index+1}))) :
                               setData(api.sort((a, b) => b.InfectionRate - a.InfectionRate).map((el,index) => ({...el,Position:index+1})));
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
    console.log(data)
    return (
        <div className="container mx-auto">
            <Pagination lines={data.length}  getRange={range => setRange(range)}/>
            <table className="table-auto mx-auto border rounded-lg overflow-hidden">
                <thead>
                    <tr className="text-xl cursor-pointer" onClick={sortHandler}>
                        <th className="text-right px-4 py-2 bg-gray-200">#</th>
                        <th className="px-4 py-2 bg-blue-200">Country ↓</th>
                        <th className="text-right px-4 py-2 bg-gray-200">Confirmed</th>
                        <th className="text-right px-4 py-2 bg-blue-200">Deaths</th>
                        <th className="text-right px-4 py-2 bg-gray-200">Recovered</th>
                        <th className="text-right px-4 py-2 bg-blue-200">Lethality</th>
                        <th className="text-right px-4 py-2 bg-gray-200">InfectionRate</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.slice(range[0],range[1]).map((el, index) => <Row data={el} key={el.CountryCode + index} />) : <></>}
                </tbody>
            </table>
        </div>
    );
}

export default Table;