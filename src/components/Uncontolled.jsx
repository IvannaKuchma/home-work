import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const checkboxRef = useRef(null);
  const selectRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input: ${inputRef.current.value}, Checkbox: ${checkboxRef.current.checked}, Select: ${selectRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Text Input:
          <input type="text" ref={inputRef} />
        </label>
      </div>
      <div>
        <label>Checkbox:
          <input type="checkbox" ref={checkboxRef} />
        </label>
      </div>
      <div>
        <label>Select Option:
          <select ref={selectRef}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
