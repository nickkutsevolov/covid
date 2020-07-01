import React, { useState, useEffect } from 'react';

function Search( {getResult}) {
    const [country, setCountry] = useState('');
    const [neigh, switchNeigh] = useState(true);
    const [suggest, setSuggest] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(data => setSuggest(data.filter(el => el.name.toLowerCase().search(search.toLowerCase())>=0 ||
                                                el.alpha2Code.toLowerCase().search(search.toLowerCase())>=0 ||
                                                el.alpha3Code.toLowerCase().search(search.toLowerCase())>=0 ? 
                                                el : false)))
    }, [search]);


    const onSubmit = (e) => {
        e.preventDefault();
        fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(data => data.filter(el => el.name.toLowerCase().search(search.toLowerCase())>=0 ||
                                     el.alpha2Code.toLowerCase().search(search.toLowerCase())>=0 ||
                                     el.alpha3Code.toLowerCase().search(search.toLowerCase())>=0 ? 
                                     el : false))
        .then(data => {
            (data[0]) ? 
            getResult(data[0].alpha2Code,neigh):
            setSearch('');
        })
    }

    const onSearch = (e) => {
        if (e.target.value.match(/[A-Za-z]/g))
            setSearch(e.target.value.match(/[A-Za-z]/g).join(''));
        setCountry(e.target.value);
    }

    const toggleSuggestion = (e) => {
        e.target.nextSibling.className.search('h-auto') > 0 ?
        e.target.nextSibling.className = e.target.nextSibling.className.replace('auto',"0") : 
        e.target.nextSibling.className = e.target.nextSibling.className.replace('0',"auto");
    }

    return (
        <div>
            <form className="text-center flex justify-between" onSubmit={onSubmit}>
                <div className="relative">
                    <input type="text" placeholder="search country" value={country} onBlur={toggleSuggestion} onFocus={toggleSuggestion} onChange={onSearch} />
                    <div className="absolute borders bg-white overflow-hidden w-full h-0">
                        <div>{suggest[0] ? 'Best match: '+suggest[0].name : 'nothing found'}</div>
                    </div>
                </div>
                <label>
                    Show neighbours:
                        <input type="checkbox" onChange={e => switchNeigh(e.target.checked)} checked={neigh} />
                </label>
                <button type="submit" className="bg-blue-400 text-white p-1 rounded">Search</button>
            </form>
        </div>
    )
}

export default Search;