<template>
  <div>
    <div class="row pt-4 pb-2 justify-center font-weight-bold">
      <div class="col-4 pa-0">DEATHS</div>
      <div class="text-center col-3 pa-0">RECOVERED</div>
      <div class="col-4 pa-0 text-right">CONFIRMED</div>
    </div>
    <div class="row pb-4 justify-center">
      <div class="col-4 pa-0 red--text">
        <p>{{formatNumber(global.NewDeaths)}}</p>
        <p>{{formatNumber(global.TotalDeaths)}}</p>
      </div>
      <v-divider vertical></v-divider>
      <div class="text-center col-3 pa-0 yellow--text">
        <p>{{formatNumber(global.NewRecovered)}}</p>
        <p>{{formatNumber(global.TotalRecovered)}}</p>
      </div>
      <v-divider vertical></v-divider>
      <div class="green--text col-4 pa-0 text-right">
        <p>+{{formatNumber(global.NewConfirmed)}}</p>
        <p>{{formatNumber(global.TotalConfirmed)}}</p>
      </div>
    </div>
    <div class="row px-3">
      <v-spacer></v-spacer>
      <v-text-field
        label="Search" single-line filled dense rounded class="col-8 col-md-6"
        v-model="search" @input="startSearch"
      ></v-text-field>
      <v-menu bottom offset-x offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" fab dark small color="primary"
                 v-bind="attrs" v-on="on">
            <v-icon dark>
              mdi-sort
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in sorts"
            :key="index"
            @click="startSort(item.value)"
          >
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn fab dark small color="red"
             v-if="selected.length" @click="removeCountry">
        <v-icon dark>
          mdi-delete
        </v-icon>
      </v-btn>
    </div>
    <v-responsive
      class="overflow-y-auto"
      :height="(screen.height - 190) + 'px'"
    >
      <div class="pt-4" v-if="isShowData">
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>
      </div>
      <v-list dense v-else>
        <v-item-group
          v-model="selected"
          multiple
        >
            <v-list-item
              v-for="(country, i) in countries"
              :key="i"
              @click="showItem(country)"
              style="background-color: rgba(211,209,209,0.89); border-radius: 10px; margin-bottom: 5px"
            >
              <v-item v-slot="{ active, toggle }">
                <v-list-item-content>
                  <div class="px-4 py-3">
                    <div class="row align-center">
                      <v-btn icon @click="clickCheckBox(toggle)">
                        <v-icon dark>
                          {{active ? 'mdi-checkbox-outline' : 'mdi-checkbox-blank-outline'}}
                        </v-icon>
                      </v-btn>
                      <p class="font-weight-bold">{{country.Country}}</p>
                      <v-spacer></v-spacer>
                      <p class="green--text">+ {{formatNumber(country.NewConfirmed)}}</p>
                    </div>
                    <div class="row pl-2">
                      <p class="red--text col-4 pa-0">{{formatNumber(country.NewDeaths)}}</p>
                      <p class="yellow--text col-4 text-center pa-0">{{formatNumber(country.NewRecovered)}}</p>
                      <p class="col-4 text-right pa-0">{{formatNumber(country.TotalConfirmed)}}</p>
                    </div>
                  </div>
                </v-list-item-content>
              </v-item>
            </v-list-item>
        </v-item-group>
      </v-list>
    </v-responsive>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" :height="(screen.height - 20) + 'px'">
        <v-toolbar dense>
          <v-toolbar-title>{{country.Country}}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="sheet = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-responsive
          class="overflow-y-auto"
          :height="(screen.height - 120) + 'px'"
        >
          <div class="ma-3">
            <div class="row">
              <div class="col-12 col-md-5">
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="200"
                  type="card"
                  v-if="isShowDataSheet"
                ></v-skeleton-loader>
                <div class="row pt-3" v-else>
                  <div class="col-4 col-sm-3 col-md-12 pa-0 px-3 mt-5">
                    <div class="row justify-center pa-3" v-if="detailCountry && detailCountry.coatOfArms">
                      <v-img
                        max-width="100"
                        :src="detailCountry.coatOfArms.png"
                      ></v-img>
                    </div>
                  </div>
                  <div class="col-8 col-sm-9 col-md-12 mt-3 row justify-center">
                    <div class="text-left px-3 col-12">
                      <h2 class="font-weight-bold">{{country.Country}}</h2>
                      <div class="row px-3 pt-2 col-12">
                        <p class="col-6">Population:</p>
                        <p class="col-6">{{formatNumber(detailCountry.population)}}</p>
                      </div>
                      <div class="row px-3">
                        <p class="col-6">Capital:</p>
                        <p class="col-6">{{detailCountry.capital && detailCountry.capital[0]}}</p>
                      </div>
                      <div class="row px-3">
                        <p class="col-6">Region:</p>
                        <p class="col-6">{{detailCountry.region}}</p>
                      </div>
                      <div class="row px-3">
                        <p class="col-6">Subregion:</p>
                        <p class="col-6">{{detailCountry.subregion}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-7">
                <div class="row pb-2 pt-5 justify-center font-weight-bold">
                  <div class="col-4 pa-0 text-left">DEATHS</div>
                  <div class="text-center col-3 pa-0">RECOVERED</div>
                  <div class="col-4 pa-0 text-right">CONFIRMED</div>
                </div>
                <div class="row pb-4 justify-center">
                  <div class="col-4 pa-0 red--text text-left">
                    <p>{{formatNumber(country.NewDeaths)}}</p>
                    <p>{{formatNumber(country.TotalDeaths)}}</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div class="text-center col-3 pa-0 yellow--text">
                    <p>{{formatNumber(country.NewRecovered)}}</p>
                    <p>{{formatNumber(country.TotalRecovered)}}</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div class="green--text col-4 pa-0 text-right">
                    <p>+{{formatNumber(country.NewConfirmed)}}</p>
                    <p>{{formatNumber(country.TotalConfirmed)}}</p>
                  </div>
                </div>
                <div class="row pt-5 px-4 justify-end">
                  <div class="mt-1">
                    <v-menu :offset-y="true" v-model="menu" :close-on-content-click="false">
                      <template v-slot:activator="{ attrs, on }">
                        <v-btn color="primary" text v-bind="attrs" v-on="on">
                          <v-icon>mdi-calendar</v-icon>
                        </v-btn>
                      </template>
                      <v-date-picker
                        v-model="dates"
                        range
                      ></v-date-picker>
                      <div class="white">
                        <div class="my-2 row justify-center">
                          <v-btn color="primary" @click="sortClick(country)">
                            Sort
                          </v-btn>
                        </div>
                      </div>
                    </v-menu>
                  </div>
                  <v-select item-text="label" class="sort_time" item-value="value" outlined dense
                            v-model="time" :items="times" @input="selectTime(country)"></v-select>
                </div>
                <div class="pt-3">
                  <chart-bar style="height: 320px; width: 100%" :data="chartData" :time="change"></chart-bar>
                </div>
              </div>
            </div>
          </div>
        </v-responsive>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { formatNumber, formatDay, resTime, cloneVal } from '~/util'
import { Country, DataChart, CountryToSlug } from '~/type/country'
import ChartBar from '~/components/ChartBar.vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    'chart-bar': ChartBar
  },
  data: () => ({
    selected: [] as Array<number>,
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
    isShowData: true,
    isShowDataSheet: true,
    countries: [],
    global: {},
    sheet: false,
    menu: false,
    search: '',
    dates: [],
    country: {} as Country,
    cacheCountry: {} as Country,
    detailCountry: {},
    formatNumber: formatNumber,
    formatDay: formatDay,
    chartData: {
      labels: [] as Array<string>,
      datasets: [] as Array<DataChart>
    },
    change: new Date().getTime(),
    times: [
      {value: 1, label: 'To Day'},
      {value: 7, label: '7 days ago'},
      {value: 14, label: '14 days ago'},
      {value: 30, label: '30 days ago'}
    ],
    time: 1,
    sorts: [
      { value: 'TotalConfirmed', label: 'The most total confirmed cases' },
      { value: 'TotalDeaths', label: 'The highest number of deaths' },
      { value: 'TotalRecovered', label: 'The least number of recovered cases' }
    ],
    sort: 'TotalConfirmed',
    isClickCheckBox: false,
    cacheCheckBox: true as any,
    cacheDom: true as any
  }),
  computed: {
    ...mapGetters(['screen', 'getCountryHide', 'getCountries']),
    getCoutries (): Array<Country> {
      let arr = this.getCountries.filter((country: Country) => !this.getCountryHide.includes(country.ID))
      return cloneVal(arr)
    }
  },
  watch: {
    getCountryHide () {
      this.renderCountries()
    }
  },
  methods: {
    renderCountries () {
      let arr = this.getCountries.filter((country: Country) => !this.getCountryHide.includes(country.ID))
      this.countries = cloneVal(arr)
    },
    async removeCountry () {
      let coutries = await this.countries.filter((coutry: Country, i: number) => this.selected.includes(i))
      let IDs = coutries.map((coutry: Country) => (coutry.ID))
      this.$store.dispatch('setCountryHide', cloneVal(IDs))
      this.selected = []
    },
    startSort (val: string) {
      this.countries = this.countries.sort((a: any, b: any) => val === 'TotalRecovered' ? (a[val] - b[val]) : (b[val] - a[val]))
    },
    startSearch (val: string) {
      clearTimeout(this.cacheDom)
      this.cacheDom = setTimeout(() => {
        let countries = cloneVal(this.getCountries) || []
        if (val && val !== '') {
          val = val.toLowerCase()
          countries = countries.filter((country: Country) => country.Country && country.Country.toLowerCase().indexOf(val) !== -1)
        }
        this.countries = countries
      }, 400)
    },
    sortClick (country: Country) {
      if (this.dates.length > 1) {
        this.menu = false
        this.queryCoutry(country, `from=${this.dates[0]}&to=${this.dates[1]}`)
      }
    },
    selectTime (country: Country) {
      if (this.time === 1) {
        this.country = cloneVal(this.cacheCountry)
        this.setDataChart(this.cacheCountry)
      } else {
        this.queryCoutry(country, resTime(this.time))
      }
    },
    queryCoutry (country: Country, time: string) {
      axios.get(`https://api.covid19api.com/country/${country.Slug}?${time}`)
        .then(res => {
          if (res.status === 200) {
            let data = res.data || []
            this.setDataChartTime(data)
          }
        })
        .catch(e => {
          console.error(e)
        })
    },
    async setDataChartTime (countries: Array<CountryToSlug>) {
      let datasets: Array<DataChart> = []
      let CONFIRMED: DataChart = {
        label: 'Confirme',
        backgroundColor: '#44f607',
        data: []
      }
      let RECOVERED: DataChart = {
        label: 'Recovered',
        backgroundColor: '#f6f207',
        data: []
      }
      let DEATHS: DataChart = {
        label: 'Deaths',
        backgroundColor: '#f60707',
        data: []
      }
      let labels: Array<string> = []
      let totalConfirmed = 0
      let totalRevovered = 0
      let totalDeaths = 0
      for await (const country of countries) {
        totalConfirmed += country.Confirmed
        totalRevovered += country.Recovered
        totalDeaths += country.Deaths
        labels.push(formatDay(country.Date))
        RECOVERED.data.push(country.Recovered)
        DEATHS.data.push(country.Deaths)
        CONFIRMED.data.push(country.Confirmed)
      }
      let country: Country = this.country
      country.NewRecovered = totalRevovered
      country.NewDeaths = totalDeaths
      country.NewConfirmed = totalConfirmed
      this.country = country
      datasets.push(CONFIRMED)
      datasets.push(DEATHS)
      datasets.push(RECOVERED)
      this.chartData.labels = labels
      this.chartData.datasets = datasets
      this.change = new Date().getTime()
    },
    clickCheckBox (toggle: any) {
      toggle()
      this.isClickCheckBox = true
      clearTimeout(this.cacheCheckBox)
      this.cacheCheckBox = setTimeout(() => {
        this.isClickCheckBox = false
      }, 300)
    },
    showItem (country: Country) {
      if (!this.isClickCheckBox) {
        this.time = 1
        this.setDataChart(country)
        this.getDetailCountry(country.Country)
        this.country = country
        this.cacheCountry = cloneVal(country)
        this.sheet = true
      }
    },
    setDataChart (country: Country) {
      this.change = new Date().getTime()
      let labels: Array<string> = []
      labels.push(formatDay())
      this.chartData.labels = labels
      let datasets: Array<DataChart> = []
      let CONFIRMED: DataChart = {
        label: 'Confirme',
        backgroundColor: '#44f607',
        data: [country.NewConfirmed]
      }
      datasets.push(CONFIRMED)

      let RECOVERED: DataChart = {
        label: 'Recovered',
        backgroundColor: '#f6f207',
        data: [country.NewRecovered]
      }
      datasets.push(RECOVERED)

      let DEATHS: DataChart = {
        label: 'Deaths',
        backgroundColor: '#f60707',
        data: [country.NewDeaths]
      }
      datasets.push(DEATHS)
      this.chartData.datasets = datasets
    },
    getDetailCountry (name: string) {
      this.isShowDataSheet = true
      axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
          this.isShowDataSheet = false
          if (res.status === 200) {
            let data = res.data || []
            this.detailCountry = data[0] || {}
          }
        })
        .catch(e => {
          this.isShowDataSheet = false
          console.error(e)
        })
    },
    loadData () {
      this.isShowData = true
      axios.get('https://api.covid19api.com/summary')
      .then(res => {
        this.isShowData = false
        if (res.status === 200) {
          let data = res.data
          let countries = (res.data && res.data.Countries) || []
          // this.countries = countries.sort((a: Country, b: Country) => (b.TotalConfirmed - a.TotalConfirmed))
          this.global = data.Global || {}
          this.$store.dispatch('setCoutries', cloneVal(countries))
          console.log(countries)
          this.renderCountries()
        }
      })
      .catch(e => {
        this.isShowData = false
        console.error(e)
      })
    }
  },
  created () {
    this.loadData()
  }
})
</script>

<style>
 .v-list-item {
   padding: 0 4px;
 }
 .v-application p {
   padding: 0;
   margin: 4px 0;
 }
 .v-list {
   padding: 0;
 }
 .v-list-item__title {
   padding: 0 8px;
 }
 .v-menu__content--fixed {
   background-color: white;
 }
 .sort_time .v-input__slot {
   width: 200px !important;
 }
 .v-application .mb-6 {
   margin-bottom: 0 !important;
 }
</style>
