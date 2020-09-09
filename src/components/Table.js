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
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setData(api.sort((a, b) => a.Country.localeCompare(b.Country)).map((el,index) => ({...el,Position:index+1})))
    }, [api])
    
    if (sort) {
        let sortedArray;
        sort === 'Country'   ? sortedArray = api.sort((a, b) => a.Country.localeCompare(b.Country)) :
        sort === 'Confirmed' ? sortedArray = api.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed) :
        sort === 'Deaths'    ? sortedArray = api.sort((a, b) => b.TotalDeaths - a.TotalDeaths) :
        sort === 'Recovered' ? sortedArray = api.sort((a, b) => b.TotalRecovered - a.TotalRecovered) :
        sort === 'Lethality' ? sortedArray = api.sort((a, b) => b.Lethality - a.Lethality) :
                               sortedArray = api.sort((a, b) => b.Morbidity - a.Morbidity);
        setData(sortedArray.map((el,index) => ({...el,Position:index+1}))
                           .filter(el => el.Country.toLowerCase().match(/[A-Za-z]/g).join('').search(filter)>=0 ? el : false));
        setSort('');
    }

    if (reverseSort) {
        setData(data.reverse());
        setReverseSort(false);
    }

    function sortHandler (e) {
        if (e.target.innerHTML !== '#') {
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
    }

    function filterHandler (filter) {
        setFilter(filter);
        setSort([...document.getElementsByTagName('th')].filter(el => el.innerText.match(/[↑↓]/g))[0].innerText.split(" ", 2)[0])
    }

    return (
        <div className="container m-16 w-auto">
            <Pagination rows={data.length}  getRange={range => setRange(range)} getFilter={filterHandler}/>
            <table className="w-full table-auto border rounded-lg overflow-hidden bg-white my-2">
                <thead>
                    <tr className="text-gray-600 cursor-pointer" onClick={sortHandler}>
                        <th className="font-normal text-right py-2 cursor-default w-16">#</th>
                        <th className="font-normal py-2 text-left">Country ↓</th>
                        <th className="font-normal text-right py-2">Confirmed</th>
                        <th className="font-normal text-right py-2">Deaths</th>
                        <th className="font-normal text-right py-2">Recovered</th>
                        <th className="font-normal text-right py-2">Lethality</th>
                        <th className="font-normal text-right py-2">Morbidity</th>
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