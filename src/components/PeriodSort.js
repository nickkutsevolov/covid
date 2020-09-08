import React from 'react';

function PeriodSort ({sortBy}) {

    function periodChange (e) {
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
        <div className="flex flex-row rounded h-auto overflow-hidden ml-8 border text-sm" onClick={periodChange} onKeyPress={e => {if (e.which===13) periodChange(e); console.log(e.which)}}>
            <div tabIndex="0" className="p-2 bg-gray-600 text-white">From day 1</div>
            <div tabIndex="0" className="p-2 hover:bg-gray-300 cursor-pointer border border-t-0 border-b-0">Last month</div>
            <div tabIndex="0" className="p-2 hover:bg-gray-300 cursor-pointer">Last 10 days</div>
        </div>
    )
}

export default PeriodSort;