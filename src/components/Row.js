import React from 'react';

function Row ({data}) {
    return (
        <tr>
            <td className="text-right bg-gray-200">{data.Position}</td>
            <td className="bg-blue-200">{ data.Country }</td>
            <td className="text-right bg-gray-200">{ data.TotalConfirmed.toLocaleString() }<br />+{ data.NewConfirmed.toLocaleString() }</td>
            <td className="text-right bg-blue-200">{ data.TotalDeaths.toLocaleString() }<br />+{ data.NewDeaths.toLocaleString() }</td>
            <td className="text-right bg-gray-200">{ data.TotalRecovered.toLocaleString() }<br />+{ data.NewRecovered.toLocaleString() }</td>
            <td className="text-right bg-blue-200">{ data.Lethality.toLocaleString() }%</td>
            <td className="text-right bg-gray-200">{ data.InfectionRate.toLocaleString() }%</td>
        </tr>
    )
}

export default Row;