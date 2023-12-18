export const getAllCountries = () => {
    return fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .catch(error => {
            console.log("Error fetching data: ", error);
            throw error;
        });
};

export const getAllCountriesByContinent = (continentCode) => {
    return getAllCountries()
        .then(data => data.filter(country => country.continents.includes(continentCode)));
};
