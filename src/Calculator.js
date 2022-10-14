import { useState } from 'react';

function Calculator() {
  const [cc, setCc] = useState(2000);
  const [week, setWeek] = useState(2);
  return (
    <form>
      <label>CC</label>
      <input type="text" onChange={ (e) => { setCc(e.target.value); } } defaultValue={cc} />

      <label>Week</label>
      <input type="text" onChange={ (e) => { setWeek(e.target.value); } } defaultValue={week} />

      <label>{cc * week}</label>
    </form>
  );
}

export default Calculator;
