import React from 'react';

function Row ({data}) {
    return (
        <tr>
            <td>{ data.Country || 'Global' }</td>
            <td className="text-right bg-gray-200">{ data.TotalConfirmed ? data.TotalConfirmed.toLocaleString() : "0" }<br />+{ data.NewConfirmed ? data.NewConfirmed.toLocaleString() : "0" }</td>
            <td className="text-right">{ data.TotalDeaths ? data.TotalDeaths.toLocaleString() : "0" }<br />+{ data.NewDeaths ? data.NewDeaths.toLocaleString() : "0" }</td>
            <td className="text-right bg-gray-200">{ data.TotalRecovered ? data.TotalRecovered.toLocaleString() : "0" }<br />+{ data.NewRecovered ? data.NewRecovered.toLocaleString() : "0" }</td>
            <td className="text-right">{ (data.Lethality).toLocaleString() }%</td>
            <td className="text-right bg-gray-200">{ (data.InfectionRate).toLocaleString() }</td>
        </tr>
    )
}

export default Row;