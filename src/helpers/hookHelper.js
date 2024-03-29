import { useState } from "react";
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useFormCheckbox(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.checked);
  }

  return {
    value,
    onChange: handleChange
  };
}
export { useFormInput, useFormCheckbox };
