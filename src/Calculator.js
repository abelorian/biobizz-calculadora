import { useState } from 'react';

function Calculator() {
  const [cc, setCc] = useState(2000);
  const [week, setWeek] = useState(2);
  const bioMix = [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0];
  return (
    <>
      <form>
        <label>CC</label>
        <input type="text" onChange={ (e) => { setCc(e.target.value); } } defaultValue={cc} />

        <label>Week</label>
        <input type="text" onChange={ (e) => { setWeek(e.target.value); } } defaultValue={week} />

        <label>{cc * week}</label>
        <label>{bioMix}</label>
      </form>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calculator;
