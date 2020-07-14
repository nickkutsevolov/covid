import {useState, useEffect} from 'react';

function useDayOne () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/belarus`)
        .then(data => data.json())
        .then(data => {
            data.forEach((el, index) => {
                el.ActiveCases = el.Confirmed - el.Recovered - el.Deaths;
                if(index>0) {
                    el.NewConfirmed = data[index-1].Confirmed - el.Confirmed;
                    el.NewDeaths = el.Deaths - data[index-1].Deaths;
                    el.NewRecovered = el.Recovered > data[index-1].Recovered ? el.Recovered - data[index-1].Recovered : 0;
                    el.Tendency = el.NewConfirmed + el.NewDeaths + el.NewRecovered;
                }
                el.Date=el.Date.slice(8,10)+"."+el.Date.slice(5,7);
            });
            setData(data);
        })
    }, [])

    return (data)
}

export default useDayOne;