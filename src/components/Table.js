import React, { useState, useEffect } from 'react';
import Row from './Row';
import Search from './Search';

function Table() {
    const [global, setGlobal] = useState([]);
    const [top, setTop] = useState([]);
    const [localName, setLocalName] = useState('BY');
    const [local, setLocal] = useState([]);
    const [borders, setBorders] = useState([]);
    const [showBorders, toggleBorders ] = useState(true);

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
            .then(data => data.json())
            .then(data => {
                setGlobal(data.Global);
                setTop(data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 5));
                setLocal(data.Countries.find(el => el.CountryCode === localName));

                showBorders ? 
                fetch('https://restcountries.eu/rest/v2/all')
                    .then(res => res.json())
                    .then(res => {
                        setBorders(res.find(i => i.alpha2Code === localName).borders
                            .map(j => res.find(k => k.alpha3Code === j).alpha2Code)
                            .map(i => data.Countries.find(j => j.CountryCode === i) ? data.Countries.find(j => j.CountryCode === i) : false));
                    }) :
                setBorders([]);    
            })
    }, [localName,showBorders]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center">Statistics</h2>
            <div  className="flex justify-center">
                <div className="p-4">
                    <h3>Global&amp;top5</h3>
                    <div className="table font-secondary w-full">
                        <div className="table-row text-xl">
                            <div className="table-cell">Country</div>
                            <div className="table-cell text-right">Confirmed</div>
                            <div className="table-cell text-right">Deaths</div>
                            <div className="table-cell text-right">Recovered</div>
                        </div>
                        <Row data={global} />
                        {top.map((el, index) => <Row data={el} key={"top" + index} />)}
                    </div>
                </div>
                <div className="p-4">
                    <Search getResult={(result,bord) => {
                        setLocalName(result);
                        toggleBorders(bord);
                        }} />
                    <div className="table font-secondary w-full">
                        <div className="table-row text-xl">
                            <div className="table-cell">Country</div>
                            <div className="table-cell">Confirmed</div>
                            <div className="table-cell">Deaths</div>
                            <div className="table-cell">Recovered</div>
                        </div>
                        <Row data={local} />
                        {
                            (borders.filter(el => el !== false).length > 0) ?
                                borders.map((el, index) => <Row data={el} key={"border" + index} />) :
                                showBorders ?
                                <Row data={{nodata:`No data on bordering countries`}} /> :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;