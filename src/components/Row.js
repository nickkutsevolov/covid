import React from 'react';

function Row ({data}) {
    if(!data) { console.log(data); return <div>No data on searched country</div>;}
    if(data.nodata) return <div>{data.nodata}</div>;
    return (
        <div className="table-row">
            <div className="table-cell p-1">{ data.Country || 'Global' }</div>
            <div className="table-cell text-right p-1">{ data.TotalConfirmed ? data.TotalConfirmed.toLocaleString() : "0" }<br />+{ data.NewConfirmed ? data.NewConfirmed.toLocaleString() : "0" }</div>
            <div className="table-cell text-right p-1">{ data.TotalDeaths ? data.TotalDeaths.toLocaleString() : "0" }<br />+{ data.NewDeaths ? data.NewDeaths.toLocaleString() : "0" }</div>
            <div className="table-cell text-right p-1">{ data.TotalRecovered ? data.TotalRecovered.toLocaleString() : "0" }<br />+{ data.NewRecovered ? data.NewRecovered.toLocaleString() : "0" }</div>
        </div>
    )
}

export default Row;