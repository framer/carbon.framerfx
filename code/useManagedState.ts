import * as React from "react";

export function useManagedState(value, onChange) {
  const [currentValue, setValue] = React.useState(value);

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  return [
    currentValue,
    newValue => {
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  ];
}
