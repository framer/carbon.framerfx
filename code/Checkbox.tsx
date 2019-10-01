import * as Carbon from "carbon-components-react";
import * as React from "react";
import { addPropertyControls, ControlType, Stack } from "framer";
import { useManagedState } from "./useManagedState";

export function Checkbox({ ["children"]: _, checked, onChange, ...props }) {
  const [currentlyChecked, setChecked] = useManagedState(checked, onChange);

  return (
    <Carbon.Checkbox
      checked={currentlyChecked}
      onChange={checked => setChecked(checked)}
      {...props}
    ></Carbon.Checkbox>
  );
}

Checkbox.defaultProps = {
  width: 135,
  height: 35
};

addPropertyControls(Checkbox, {
  disabled: { type: ControlType.Boolean, defaultValue: false },
  labelText: { type: ControlType.String, defaultValue: "Checkbox label" },
  checked: { type: ControlType.Boolean, defaultValue: false }
});
