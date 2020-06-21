import React from 'react';

function Row ({data}) {
    if(!data) return <div>No data on searched country</div>;
    if(data.nodata) return <div>{data.nodata}</div>;
    return (
        <div className="table-row">
            <div className="table-cell">{ data.Country || 'Global' }</div>
            <div className="table-cell text-right">{ data.TotalConfirmed }<br />(+{ data.NewConfirmed })</div>
            <div className="table-cell text-right">{ data.TotalDeaths }<br />(+{ data.NewDeaths })</div>
            <div className="table-cell text-right">{ data.TotalRecovered }<br />(+{ data.NewRecovered })</div>
        </div>
    )
}

export default Row;