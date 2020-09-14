import React from 'react';

function TableHead () {
    function hoverHandler (e) {
        let col = e.target;
        let colIndex = [...col.parentNode.children].indexOf(col);
        let colValue = col.innerText;
        let description= {
            Country: 'Country name',
            Confirmed: 'Total number of cases plus new cases(included)',
            Deaths: 'Total number of deaths plus new deaths(included)',
            Recovered: 'Total number of recovered plus new recoveries(included)',
            Lethality: 'Percentage of deaths among infected',
            Morbidity: 'Percentage of population infected'
        }

        if (document.querySelector('#tooltip')) document.querySelector('#tooltip').remove();
        [...document.querySelectorAll('th,td')].filter(el => el.classList.contains("bg-gray-100")).forEach(el => el.classList.remove("bg-gray-100"))
        
        if (colIndex) {
            document.querySelectorAll('th,td').forEach(el => {if([...el.parentNode.children].indexOf(el) === colIndex) el.classList.add("bg-gray-100")});
            let tooltip = document.createElement('div');
            tooltip.id = "tooltip";
            tooltip.classList.add('w-40', 'p-2', 'rounded', 'bg-white', 'absolute', 'border', 'text-xs', 'text-gray-600');
            tooltip.innerText = description[colValue.match(/[A-Za-z]/g).join('')] + `\n\nClick to ${colValue.match(/↓|↑/g) ? 'reverse sort' : 'sort by '+colValue.match(/[A-Za-z]/g).join('').toLowerCase()}`;
            document.body.appendChild(tooltip);
            let tooltipWidth = parseInt(window.getComputedStyle(tooltip).getPropertyValue('width'));
            let tooltipHeight = parseInt(window.getComputedStyle(tooltip).getPropertyValue('height'));
            tooltip.style.left = `${e.pageX+tooltipWidth>document.body.clientWidth ? document.body.clientWidth-tooltipWidth : e.pageX}px`;
            tooltip.style.top = `${e.clientY>tooltipHeight+10 ? e.pageY-tooltipHeight-10 : e.pageY+32}px`;
            console.log(e.clientY)
        }
    }

    function mouseLeaveHandler () {
        if (document.querySelector('#tooltip')) document.querySelector('#tooltip').remove();
        [...document.querySelectorAll('th,td')].filter(el => el.classList.contains("bg-gray-100")).forEach(el => el.classList.remove("bg-gray-100"));
    }

    return (
        // <thead onClick={sortHandler}>
            <tr className="text-gray-600 cursor-pointer" onMouseMove={hoverHandler} onMouseLeave={mouseLeaveHandler}>
                <th className="text-right py-2 cursor-default w-16">#</th>
                <th className="text-left py-2">Country ↓</th>
                <th className="text-right py-2">Confirmed</th>
                <th className="text-right py-2">Deaths</th>
                <th className="text-right py-2">Recovered</th>
                <th className="text-right py-2">Lethality</th>
                <th className="text-right py-2">Morbidity</th>
            </tr>
        // </thead>
    );
}

export default TableHead;