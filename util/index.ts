export const formatNumber = (value: number): string => {
  let val = (value / 1).toFixed(0).replace(',', ',')
  return value ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '0'
}
