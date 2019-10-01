import * as Carbon from "carbon-components-react";
import { addPropertyControls, ControlType, Frame } from "framer";
import * as React from "react";

export function Tabs({ tabs, tabNames, ...props }) {
  return (
    <Carbon.Tabs {...props}>
      {tabNames.map((tabName, index) => {
        const child = tabs[index] || "no contents";
        return (
          <Carbon.Tab key={tabName} label={tabName}>
            <Frame size="100%" background="transparent">
              {child}
            </Frame>
          </Carbon.Tab>
        );
      })}
    </Carbon.Tabs>
  );
}

Tabs.defaultProps = {
  width: 135,
  height: 35
};

addPropertyControls(Tabs, {
  tabs: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.ComponentInstance
    }
  },
  tabNames: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["first", "second", "third"]
  }
});
