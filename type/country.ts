export interface Country {
  Country: string
  CountryCode: string
  Date: string
  ID: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  Premium: object
  Slug: string
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}
export interface DataChart {
  label: string
  backgroundColor: string
  data: Array<number>
}
export interface CountryToSlug {
  Active: number
  City: string
  CityCode: string
  Country: string
  CountryCode: string
  ID: string
  Lat: string
  Lon: string
  Province: string
  Date: string
  Confirmed: number
  Recovered: number
  Deaths: number
}
