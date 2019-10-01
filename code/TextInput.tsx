import * as Carbon from "carbon-components-react";
import * as React from "react";
import { addPropertyControls, ControlType, Stack } from "framer";
import { useManagedState } from "./useManagedState";

export function TextInput({ ["children"]: _, value, onChange, ...props }) {
  const [currentValue, setValue] = useManagedState(value, onChange);

  return (
    <Carbon.TextInput
      value={currentValue}
      onChange={e => setValue(e.target.value)}
      {...props}
    ></Carbon.TextInput>
  );
}

TextInput.defaultProps = {
  width: 135,
  height: 35
};

addPropertyControls(TextInput, {
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
