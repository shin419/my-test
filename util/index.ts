import moment from 'moment'

export const formatNumber = (value: number): string => {
  let val = (value / 1).toFixed(0).replace(',', ',')
  return value ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '0'
}
export const formatDay = (day?: string): string => {
  return moment(day ? day : new Date()).format('YYYY/MM/DD')
}
export const cloneVal = (val: any): any => {
  return JSON.parse(JSON.stringify(val))
}
export const resTime = (day: number, isTest?: boolean): string => {
  let newDate = isTest ? new Date('2021-12-28') : new Date()
  let timeStart = moment(newDate).subtract(day, 'days')
  let dayStart = moment(timeStart).format('YYYY-MM-DD')
  let dayEnd = moment().format('YYYY-MM-DD')
  return `from=${dayStart}&to=${dayEnd}`
}
