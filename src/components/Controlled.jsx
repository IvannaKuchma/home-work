import React, { useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState('option1');

  return (
    <form>
      <div>
        <label>Text Input:
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
      </div>
      <div>
        <label>Checkbox:
          <input type="checkbox" checked={checkboxValue} onChange={(e) => setCheckboxValue(e.target.checked)} />
        </label>
      </div>
      <div>
        <label>Select Option:
          <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default ControlledForm;
