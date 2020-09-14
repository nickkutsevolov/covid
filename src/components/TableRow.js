import React from 'react';

function TableRow ({data}) {
    function hoverHandler (e) {
        [...e.target.parentNode.children].forEach(el => el.classList.add("bg-gray-100"));
    }

    function mouseLeaveHandler (e) {
        [...e.target.parentNode.children].forEach(el => el.classList.remove("bg-gray-100"));
    }

    return (
        <tr onMouseEnter={hoverHandler} onMouseLeave={mouseLeaveHandler}>
            <td className="text-right w-16 text-gray-600">{data.Position}</td>
            <td className="font-semibold">{ data.Country }</td>
            <td className="text-right">{ data.TotalConfirmed.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewConfirmed.toLocaleString() }</span></td>
            <td className="text-right">{ data.TotalDeaths.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewDeaths.toLocaleString() }</span></td>
            <td className="text-right">{ data.TotalRecovered.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewRecovered.toLocaleString() }</span></td>
            <td className="text-right">{ data.Lethality.toLocaleString() }%</td>
            <td className="text-right">{ data.Morbidity.toLocaleString() }%</td>
        </tr>
    )
}

export default TableRow;