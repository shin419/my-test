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
    <chart-bar :chartData="chartData" :options="chartOption"></chart-bar>
    <v-list dense>
      <v-list-item
        v-for="(country, i) in countries"
        :key="i"
      >
        <v-list-item-content @click="showItem(country)">
          <div class="px-4 py-3">
            <div class="row">
              <p class="font-weight-bold">{{country.Country}}</p>
              <v-spacer></v-spacer>
              <p class="green--text">+ {{formatNumber(country.NewConfirmed)}}</p>
            </div>
            <div class="row">
              <p class="red--text col-4 pa-0">{{formatNumber(country.NewDeaths)}}</p>
              <p class="yellow--text col-4 text-center pa-0">{{formatNumber(country.NewRecovered)}}</p>
              <p class="col-4 text-right pa-0">{{formatNumber(country.TotalConfirmed)}}</p>
            </div>
          </div>
          <v-divider
            v-if="i < countries.length - 1"
            :key="i"
          ></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="500px">
        <div class="ma-3">
          <div class="row pt-3">
            <div class="col-4 pa-0 px-3">
              <div v-if="detailCountry && detailCountry.coatOfArms">
                <v-img
                  :src="detailCountry.coatOfArms.png"
                ></v-img>
              </div>
            </div>
            <div class="col-8 pa-0">
              <div class="text-left px-3">
                <p class="font-weight-bold">{{country.Country}}</p>
                <div class="row px-3 pt-2">
                  <p class="col-5">Population:</p>
                  <p class="col-7">{{formatNumber(detailCountry.population)}}</p>
                </div>
                <div class="row px-3">
                  <p class="col-5">Capital:</p>
                  <p class="col-7">{{detailCountry.capital && detailCountry.capital[0]}}</p>
                </div>
                <div class="row px-3">
                  <p class="col-5">Region:</p>
                  <p class="col-7">{{detailCountry.region}}</p>
                </div>
                <div class="row px-3">
                  <p class="col-5">Subregion:</p>
                  <p class="col-7">{{detailCountry.subregion}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-5 pb-2 justify-center font-weight-bold">
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
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { formatNumber } from '~/util'
import { Country } from '~/type/country'
import ChartBar from '~/components/ChartBar.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    'chart-bar': ChartBar
  },
  data: () => ({
    countries: [],
    global: {},
    sheet: false,
    country: {},
    detailCountry: {},
    formatNumber: formatNumber,
    chartOption:  { responsive: true, maintainAspectRatio: false },
    chartData: {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: '1',
          backgroundColor: '#00589A',
          data: [7, 2, 4, 2, 5, 6]
        },
        {
          label: '2',
          backgroundColor: '#49c10b',
          data: [8, 2, 4, 2, 4, 7]
        },
        {
          label: '3',
          backgroundColor: '#ff6c0b',
          data: [3, 2, 3, 4, 5, 6]
        },
      ]
    }
  }),
  methods: {
    showItem (country: Country) {
      this.getDetailCountry(country.Country)
      this.country = country
      this.sheet = true
    },
    getDetailCountry (name: string) {
      axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
          if (res.status === 200) {
            let data = res.data || []
            this.detailCountry = data[0] || {}
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    loadData () {
      axios.get('https://api.covid19api.com/summary')
      .then(res => {
        if (res.status === 200) {
          let data = res.data
          let countries = (res.data && res.data.Countries) || []
          this.countries = countries.sort((a: Country, b: Country) => (b.TotalConfirmed - a.TotalConfirmed))
          this.global = data.Global || {}
        }
      })
      .catch(e => {
        console.log(e)
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
   padding: 0;
 }
 .v-application p {
   padding: 0;
   margin: 4px 0;
 }
</style>
