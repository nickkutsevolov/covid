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
        getResult(suggest[0].Slug);
        setSearch('');
        e.target.reset();
        e.target.firstChild.blur();
    }

    const onSearch = (e) => {
        if (e.target.value.match(/[A-Za-z]/g))
            setSearch(e.target.value.match(/[A-Za-z]/g).join(''));
    }

    const toggleSuggest = (e) => { 
        e.target.nextSibling.classList.toggle('hidden');
    }

    return (
        <div>
            <form className='relative' onSubmit={onSubmit} onFocus={toggleSuggest} onBlur={toggleSuggest}>
                <input type='text' placeholder='search country' onChange={onSearch} />
                <div className='absolute border-solid border-2 bg-white overflow-x-hidden w-full hidden'>
                    {suggest[0] ? 'Best match:'+suggest[0].Country : 'nothing found'}
                </div>
            </form>
        </div>
    )
}

export default Search;