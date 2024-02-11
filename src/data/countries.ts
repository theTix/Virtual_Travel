import { CountryData } from "../../types/countries";

export const getAllCountries = async (): Promise<CountryData[]> => {
    return fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then((data: any[]) => {
            return data.map(country => ({
                cca3: country.cca3,
                name: {
                    common: country.name.common,
                    official: country.name.official
                },
                flag: country.flags.png,
                languages: country.languages,
                maps: country.maps,
                continents: country.continents
            }));
        })
        .catch(error => {
            console.log("Error fetching data: ", error);
            throw error;
        });
};

export const getAllCountriesByContinent = async (continentCode: string): Promise<CountryData[]> => {
    const allCountries = await getAllCountries();
    return allCountries.filter(country => country.continents.includes(continentCode));
};
