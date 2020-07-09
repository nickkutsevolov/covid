import React, { useState, useEffect } from 'react';
import Row from './Row';

function Table() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then(data => data.json())
        .then(data => {
            fetch('https://restcountries.eu/rest/v2/all?fields=alpha2Code;population')
            .then(popData => popData.json())
            .then(popData => {
                data.Countries.unshift(data.Global);
                data.Countries[0].Country = 'Global';
                data.Countries[0].Population = popData.reduce( (total,country) => total + country.population,0);
                data.Countries.forEach(el => {
                    if (el.CountryCode) el.Population = popData.find(popEl => popEl.alpha2Code === el.CountryCode).population;
                    el.Lethality = el.TotalDeaths/el.TotalConfirmed*100;
                    el.CasesToPop = (~~(1000000/el.Population*el.TotalConfirmed));
                });
                setData(data.Countries);
            })
        })               
    }, []);
    
    const [sort, setSort] = useState('Country');
    const [direction, setDirection] = useState('↓');
    useEffect(() => {
        console.log(sort)
        sort === 'Country' ? setData(data.sort((a, b) => a.Country.localeCompare(b.Country))) :
        sort === 'Confirmed' ? setData(data.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed)) :
        sort === 'Deaths' ? setData(data.sort((a, b) => a.TotalDeaths - b.TotalDeaths)) :
        sort === 'Recovered' ? setData(data.sort((a, b) => a.TotalRecovered - b.TotalRecovered)) :
        sort === 'Lethality' ? setData(data.sort((a, b) => a.Lethality - b.Lethality)) :
        setData(data.sort((a, b) => a.CasesToPop - b.CasesToPop));
        if(direction !== '↓') setData(data.reverse())
    })

    function sortChange (e) {
        if (e.target.innerHTML.match(/↓|↑/)) {
            e.target.innerHTML.includes('↑') ? setDirection('↓') : setDirection('↑');
            e.target.innerHTML = e.target.innerHTML.includes('↓') ?
                e.target.innerHTML.replace('↓','↑'):
                e.target.innerHTML.replace('↑','↓');
        } else {
            e.target.parentNode.querySelectorAll('div').forEach(el => {
                if (el.innerHTML.match(/↓|↑/)) el.innerHTML = el.innerHTML.match(/[A-Za-z]*/)
            })
            e.target.innerHTML = e.target.innerHTML+' ↓';
            setSort(e.target.innerHTML.match(/[A-Za-z]*/)[0]);
            setDirection('↓');
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="table w-full">
                <div className="table-row text-xl" onClick={sortChange}>
                    <div className="table-cell p-1">Country ↓</div>
                    <div className="table-cell text-right p-1 bg-gray-200">Confirmed</div>
                    <div className="table-cell text-right p-1">Deaths</div>
                    <div className="table-cell text-right p-1 bg-gray-200">Recovered</div>
                    <div className="table-cell text-right p-1">Lethality</div>
                    <div className="table-cell text-right p-1 bg-gray-200">Cases/1mln</div>
                </div>
                {data.length ? data.map(el => <Row data={el} key={el.CountryCode} />) : <></>}
            </div>
        </div>
    );
}

export default Table;