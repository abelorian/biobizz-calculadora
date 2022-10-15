import { useState } from 'react';

function Calculator() {
  const [initDate, setInitDate] = useState('2022-09-04Z-04:00');
  const [cc, setCc] = useState(2000);
  const [week, setWeek] = useState(2);
  const bioMix = [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0];
  const bioBloom = [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0];
  const topMax = [0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0];
  const fem = 12;
  const auto = 9;

  function addWeek(i) {
    let thisWeek = new Date(initDate);
    const date = thisWeek.setDate(thisWeek.getDate() + (i * 7));
    return new Date(date).toLocaleString('es-CL');
  }

  return (
    <>
      <form>
        <label>CC</label>
        <input type="text" onChange={ (e) => { setCc(e.target.value); } } defaultValue={cc} />

        <label>Week</label>
        <input type="text" onChange={ (e) => { setInitDate(e.target.value); } } defaultValue={initDate} />
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
            { [...Array(auto)].map((value, i) => (
              <tr key={i}>
                <td>Week {i + 1} ({addWeek(i)})</td>
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
