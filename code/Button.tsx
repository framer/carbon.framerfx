import * as Carbon from "carbon-components-react";
import "carbon-components/css/carbon-components.css";
import { addPropertyControls, ControlType, Stack } from "framer";
import * as React from "react";

export function Button(props) {
  const { disabled, kind, size, text } = props;

  return (
    <Stack distribution="center" size="100%">
      <Carbon.Button
        {...{
          disabled,
          kind,
          size
        }}
      >
        {text}
      </Carbon.Button>
    </Stack>
  );
}

//Define default props
Button.defaultProps = {
  width: 115,
  height: 50,
  kind: "primary",
  size: "default",
  text: "Button",
  disabled: false
};

//Create property controls to expose properties in the canvas
addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: Button.defaultProps.text
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Button.defaultProps.disabled
  },
  kind: {
    type: ControlType.Enum,
    title: "Kind",
    options: ["primary", "secondary", "tertiary", "danger"],
    optionTitles: ["Primary", "Secondary", "Tertiary", "Danger"],
    defaultValue: Button.defaultProps.kind
  },
  size: {
    type: ControlType.Enum,
    title: "Size",
    options: ["field", "small"],
    optionTitles: ["Field", "Small"],
    defaultValue: Button.defaultProps.size
  }
});
