import { useState } from 'react';
import moment from 'moment';

function Calculator() {
  const [initDate, setInitDate] = useState('08-11-2022');
  const [cc, setCc] = useState(2000);
  const [totalWeeks, setTotalWeeks] = useState(12);

  const bioMix12 = [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0];
  const bioBloom12 = [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0];
  const topMax12 = [0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0];

  const bioMix9 = [1, 1, 2, 3, 3, 4, 4, 3, 0];
  const bioBloom9 = [0, 1, 2, 2, 3, 3, 4, 3, 0];
  const topMax9 = [0, 1, 1, 1, 1, 4, 4, 3, 0];

  const style = {
    fontWeight: 'bold',
    backgroundColor: 'aliceblue',
  };

  function addWeek(i) {
    return moment(initDate, 'DD-MM-YYYY').add(i, 'week');
  }

  function currentWeek(i) {
    return moment().isBetween(addWeek(i), addWeek(i).endOf('week'));
  }

  function daysToNow() {
    const init = moment(initDate, 'DD-MM-YYYY');
    const today = moment();
    return today.diff(init, 'days');
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label>CC</label>
          <input type="number" className="form-control" onChange={ (e) => { setCc(e.target.value); } } defaultValue={cc} />
        </div>

        <div className="form-group">
          <label>initDate</label>
          <div className="input-group">
            <input type="text" className="form-control" onChange={ (e) => { setInitDate(e.target.value); } } defaultValue={initDate} />
            <span className="input-group-text" id="basic-addon2">{daysToNow()} days</span>
          </div>
        </div>

        <div className="form-group">
          <label>totalWeeks</label>
          <select className="form-control" onChange={ (e) => { setTotalWeeks(parseInt(e.target.value)); } } value={totalWeeks}>
            <option value="9">9 weeks (auto)</option>
            <option value="12">12 weeks (fem)</option>
          </select>
        </div>
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
              <tr key={i} style={ currentWeek(i) ? style : {} }>
                <td>Week {i + 1} ({ addWeek(i).format('DD-MM-YYYY') })</td>
                <td>{((totalWeeks === 9 ? bioMix9[i] : bioMix12[i]) * cc) / 1000} cc.</td>
                <td>{((totalWeeks === 9 ? bioBloom9[i] : bioBloom12[i]) * cc) / 1000} cc.</td>
                <td>{((totalWeeks === 9 ? topMax9[i] : topMax12[i]) * cc) / 1000} cc.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calculator;
