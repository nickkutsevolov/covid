import React from 'react';

function Row ({data}) {
    return (
        <tr>
            <td className="text-right w-16 text-gray-600">{data.Position}</td>
            <td className="font-semibold">{ data.Country }</td>
            <td className="text-right">{ data.TotalConfirmed.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewConfirmed.toLocaleString() }</span></td>
            <td className="text-right">{ data.TotalDeaths.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewDeaths.toLocaleString() }</span></td>
            <td className="text-right">{ data.TotalRecovered.toLocaleString() }<br /><span className="text-xs text-gray-600">+{ data.NewRecovered.toLocaleString() }</span></td>
            <td className="text-right">{ data.Lethality.toLocaleString() }%</td>
            <td className="text-right">{ data.InfectionRate.toLocaleString() }%</td>
        </tr>
    )
}

export default Row;