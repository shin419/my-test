import { formatNumber, resTime } from '~/util/index'
import moment from 'moment'

describe("util test", () => {
  it('should be 1.000 if 1000', () => {
    let isFormat = formatNumber(1000)
    expect(isFormat).toEqual('1.000');
  });
  it('if Import 1 and true = { from: 2021-12-27, to: newDay }', () => {
    let time = resTime(1, true)
    let newDay = moment().format('YYYY-MM-DD')
    expect(time).toEqual(`from=2021-12-27&to=${newDay}`);
  });
});
