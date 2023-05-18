import { useState } from 'react';

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const handleChangTermsAndConditions = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <form>
      <label htmlFor='tnc'>이용 약관</label>
      <input id='tnc' onChange={handleChangTermsAndConditions} type='checkbox' />
      <button type='submit' disabled={!checked}>
        주문 확인
      </button>
    </form>
  );
}
