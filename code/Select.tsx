import * as Carbon from "carbon-components-react";
import * as React from "react";
import { addPropertyControls, ControlType, Stack } from "framer";
import { useManagedState } from "./useManagedState";

export function Select({ ["children"]: _, values, onChange, ...props }) {
  return (
    <Carbon.Select {...props}>
      {values.map(value => {
        return <Carbon.SelectItem key={value} value={value} text={value} />;
      })}
    </Carbon.Select>
  );
}

Select.defaultProps = {
  width: 400,
  height: 65
};

addPropertyControls(Select, {
  disabled: { type: ControlType.Boolean, defaultValue: false },
  invalidText: {
    type: ControlType.String,
    defaultValue: "Please select an item from the list"
  },
  placeholder: {
    type: ControlType.String,
    defaultValue: "Select a country"
  },
  invalid: { type: ControlType.Boolean, defaultValue: false },
  values: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["Paris", "New York"],
    title: "Values"
  }
});
