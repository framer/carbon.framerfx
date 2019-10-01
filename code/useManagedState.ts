import * as React from "react";

export function useManagedState(value, onChange) {
  const [currentValue, setValue] = React.useState(value);

  React.useEffect(() => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  return [currentValue, setValue];
}
