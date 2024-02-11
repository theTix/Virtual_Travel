export interface CountryData {
    cca3: string,
    name: {
        common: string,
        official: string
    },
    flag: string,
    languages: {
        [code: string]: string
    },
    maps: {
        googleMaps: string,
    }
    continents: string[]
}