import { useState } from 'react';
import moment from 'moment';

function Calculator() {
  const [initDate, setInitDate] = useState('04-09-2022');
  const [cc, setCc] = useState(2000);
  const [totalWeeks, setTotalWeeks] = useState(12);
  const bioMix = [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0];
  const bioBloom = [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0];
  const topMax = [0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0];

  const style = {
    fontWeight: 'bold',
  }

  function addWeek(i) {
    return moment(initDate, 'DD-MM-YYYY').add(i, 'week');
  }

  function currentWeek(i) {
    return moment().isBetween(addWeek(i), addWeek(i).endOf('week'));
  }

  return (
    <>
      <form>
        <label>CC</label>
        <input type="text" onChange={ (e) => { setCc(e.target.value); } } defaultValue={cc} />

        <label>initDate</label>
        <input type="text" onChange={ (e) => { setInitDate(e.target.value); } } defaultValue={initDate} />

        <label>totalWeeks</label>
        <input type="number" onChange={ (e) => { setTotalWeeks(Math.min(12, parseInt(e.target.value))); } } defaultValue={totalWeeks} />
      </form>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">bioMix</th>
              <th scope="col">bioBloom</th>
              <th scope="col">topMax</th>
            </tr>
          </thead>
          <tbody>
            { [...Array(totalWeeks)].map((value, i) => (
              <tr key={i}>
                <td style={ currentWeek(i) ? style : {} }>Week {i + 1} ({ addWeek(i).format('DD-MM-YYYY') })</td>
                <td>{(bioMix[i] * cc) / 1000} cc.</td>
                <td>{(bioBloom[i] * cc) / 1000} cc.</td>
                <td>{(topMax[i] * cc) / 1000} cc.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calculator;
