import * as Carbon from "carbon-components-react";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { useManagedState } from "./useManagedState";

export function PasswordInput({ ["children"]: _, value, onChange, ...props }) {
  const [currentValue, setValue] = useManagedState(value, onChange);

  return (
    <Carbon.TextInput.PasswordInput
      value={currentValue}
      onChange={e => setValue(e.target.value)}
      {...props}
    ></Carbon.TextInput.PasswordInput>
  );
}

PasswordInput.defaultProps = {
  width: 135,
  height: 35
};

addPropertyControls(PasswordInput, {
  disabled: { type: ControlType.Boolean, defaultValue: false },
  labelText: { type: ControlType.String, defaultValue: "TextInput label" },
  helperText: {
    type: ControlType.String,
    defaultValue: ""
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "placeholder"
  },
  invalidText: {
    type: ControlType.String,
    defaultValue: "invalid text"
  },
  invalid: { type: ControlType.Boolean, defaultValue: false }
});
