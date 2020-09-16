import {useState, useEffect} from 'react';

function useSummary (namesOnly) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
        .then(data => data.json())
        .then(data => {
            namesOnly ? setData(data.Countries) :
            fetch('https://restcountries.eu/rest/v2/all?fields=alpha2Code;population')
            .then(popData => popData.json())
            .then(popData => {
                if (!data.Countries) document.write('Covid API data is unavailable. Please try later.')
                data.Countries.unshift(data.Global);
                data.Countries[0].Country = 'Global';
                data.Countries[0].Population = popData.reduce( (total,country) => total + country.population,0);
                data.Countries.forEach(el => {
                    if (el.CountryCode) el.Population = popData.find(popEl => popEl.alpha2Code === el.CountryCode).population;
                    el.Lethality = el.TotalDeaths/el.TotalConfirmed*100;
                    el.Morbidity = el.TotalConfirmed/el.Population*100;
                });
                setData(data.Countries.filter(el => el.TotalConfirmed));
            })
        })               
    }, [namesOnly]);

    return (data)
}

export default useSummary;