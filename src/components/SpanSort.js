import React from 'react';

function SpanSort ({sortBy}) {

    function spanChange (e) {
        if (!e.target.classList.contains('bg-gray-600')) {
            e.target.parentNode.querySelector('.bg-gray-600').classList.add('cursor-pointer', 'hover:bg-gray-300');
            e.target.parentNode.querySelector('.bg-gray-600').classList.remove('bg-gray-600', 'text-white');
            e.target.classList.remove('cursor-pointer', 'hover:bg-gray-300');
            e.target.classList.add('bg-gray-600', 'text-white');
            sortBy(e.target.innerText);
            e.target.blur();
        }
    }

    return(
        <div className="flex flex-row rounded h-auto overflow-hidden border leading-7" onClick={spanChange} onKeyPress={e => {if (e.which===13) spanChange(e); console.log(e.which)}}>
            <div tabIndex="0" className="px-2 py-1 bg-gray-600 text-white">From day 1</div>
            <div tabIndex="0" className="px-2 py-1 hover:bg-gray-300 cursor-pointer border-l border-r">Last month</div>
            <div tabIndex="0" className="px-2 py-1 hover:bg-gray-300 cursor-pointer">Last 10 days</div>
        </div>
    )
}

export default SpanSort;