import React from 'react';

function PeriodSort ({sortBy}) {

    function periodChange (e) {
        if (!e.target.classList.contains('selected')) {
            e.target.parentNode.querySelector('.selected').classList.add('cursor-pointer', 'bg-neutral');
            e.target.parentNode.querySelector('.selected').classList.remove('bg-primary', 'selected');
            e.target.classList.remove('cursor-pointer', 'bg-neutral');
            e.target.classList.add('bg-primary', 'selected');
            sortBy(e.target.innerText);
        }
    }

    return(
        <div className="flex flex-row rounded h-auto my-4 text-white overflow-hidden" onClick={periodChange}>
            <div className="p-2 hover:bg-primary bg-primary selected">From day 1</div>
            <div className="p-2 hover:bg-primary bg-neutral cursor-pointer border border-t-0 border-b-0">Last month</div>
            <div className="p-2 hover:bg-primary bg-neutral cursor-pointer">Last 10 days</div>
        </div>
    )
}

export default PeriodSort;