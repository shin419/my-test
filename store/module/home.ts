import { Country } from '~/type/country'

let screen = { width: window.innerWidth, height: window.innerHeight }
let countryHide: Array<string> = []
let res = localStorage.getItem('countryHide')
if (res) {
  countryHide = JSON.parse(res)
}
const home = {
  state: {
    valSearch: '',
    screen: screen,
    countryHide: countryHide,
    countries: []
  },
  mutations: {
    SET_COUNTRIES (state: any, countries: Array<Country>) {
      state.countries = countries
    },
    SET_VAL_SEARCH (state: any, text: string) {
      state.valSearch = text
    },
    SET_COUNTRY_HIDE (state: any, arrId: Array<string>) {
      state.countryHide = state.countryHide.concat(arrId)
      localStorage.setItem('countryHide', JSON.stringify(state.countryHide))
    }
  },
  actions: {
    setValSearch (context: any, text: string) {
      context.commit('SET_VAL_SEARCH', text)
    },
    setCountryHide (context: any, arrId: Array<string>) {
      context.commit('SET_COUNTRY_HIDE', arrId)
    },
    setCoutries (context: any, countries: Array<Country>) {
      context.commit('SET_COUNTRIES', countries)
    },
  },
  getters: {
    getValSearch: (state: any) => {
      return state.valSearch
    },
    screen: (state: any) => {
      return state.screen
    },
    getCountryHide: (state: any) => {
      return state.countryHide
    },
    getCountries: (state: any) => {
      return state.countries
    }
  }
}

export default home
