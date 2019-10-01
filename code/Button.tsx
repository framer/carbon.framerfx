import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as Carbon from "carbon-components-react";
import "carbon-components/css/carbon-components.css";

// We can tell TypeScript to help us by defining our types
type Props = {
  text: string;
  kind: string;
  disabled: boolean;
  width: number;
  height: number;
};

export class Button extends React.Component<Props> {
  // Return the component contents in JSX
  render() {
    return (
      <Carbon.Button
        kind={this.props.kind}
        disabled={this.props.disabled}
        width={this.props.width}
        height={this.props.height}
      >
        {this.props.text}
      </Carbon.Button>
    );
  }

  // Set default values for props if there are none
  static defaultProps: Props = {
    text: "Hello World!",
    kind: "danger",
    disabled: false,
    width: 168,
    height: 50
  };

  // Add Framer UI for this component (in the properties panel)
  static propertyControls: PropertyControls<Props> = {
    // text: { type: ControlType.String, title: "Text" },
    kind: {
      type: ControlType.Enum,
      title: "Kind",
      options: ["primary", "secondary", "tertiary", "danger"],
      optionTitles: ["Primary", "Secondary", "Tertiary", "Danger"]
    },
    disabled: {
      type: ControlType.Boolean,
      title: "Disabled",
      enabledTitle: "Yes",
      disabledTitle: "No"
    }
  };
}
