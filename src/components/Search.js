import React, { useState, useEffect } from 'react';
import useSummary from './useSummary';

function Search( {getResult}) {
    const api = useSummary();
    const [data, setData] = useState([]);
    const [suggest, setSuggest] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.shift();
        setData(api);
    }, [api])

    useEffect(() => {
        setSuggest(data.filter(el => el.Country.toLowerCase().match(/[A-Za-z]/g).join('').search(search.toLowerCase())>=0 ? el : false))
    }, [search, data]);

    const onSubmit = (e) => {
        e.preventDefault();
        e.target.nodeName === 'DIV' ? getResult(e.target.innerHTML.toLowerCase()) : getResult(suggest[0].Slug);
        setSearch('');
        if (e.target.nodeName==='FORM') e.target.firstChild.blur();
    }

    const onSearch = (e) => {
        if (e.target.value.match(/[A-Za-z]/g))
            setSearch(e.target.value.match(/[A-Za-z]/g).join(''));
    }

    const showSelect = (e) => { 
        e.target.nextSibling.classList.toggle('hidden');
    }

    const hideSelect = (e) => {
        let select = e.target.nextSibling;
        setTimeout(() => select.classList.toggle('hidden'),100)
    }

    return (
        <div>
            <form className='relative' onSubmit={onSubmit} onFocus={showSelect} onBlur={hideSelect}>
                <input type='text' placeholder='search country' onChange={onSearch} />
                <div className='absolute border-solid border-2 bg-white overflow-x-hidden h-20 hidden'>
                    {suggest[0] ? suggest.map(el => <div key={el.CountryCode} className='hover:bg-primary' onClick={onSubmit}>{el.Country}</div>) : 'nothing found'}
                </div>
            </form>
        </div>
    )
}

export default Search;