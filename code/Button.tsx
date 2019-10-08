import * as React from "react"
import {
    Stack,
    StackProperties,
    addPropertyControls,
    ControlType,
} from "framer"
//@ts-ignore
import * as Carbon from "carbon-components-react"
import { Add16, Search16 } from "@carbon/icons-react"
import "carbon-components/css/carbon-components.css"

//Create component and return it
export function Button(props) {
    const { disabled, kind, size, text, fullWidth, ...rest } = props

    return (
        <Stack
            {...rest}
            alignment="center"
            distribution="center"
            overflow="visible"
        >
            <Carbon.Button
                {...{
                    disabled,
                    kind,
                    size,
                    fullWidth,
                }}
            >
                {text}
            </Carbon.Button>
        </Stack>
    )
}

//Define default props
Button.defaultProps = {
    width: 115,
    height: 50,
    kind: "primary",
    size: "default",
    text: "Click",
    disabled: false,
    fullWidth: false,
}

//Create property controls to expose properties in the canvas
addPropertyControls(Button, {
    text: { type: ControlType.String, title: "Text" },
    disabled: {
        type: ControlType.Boolean,
        title: "Disabled",
        enabledTitle: "Yes",
        disabledTitle: "No",
    },
    kind: {
        type: ControlType.Enum,
        title: "Kind",
        options: ["primary", "secondary", "tertiary", "danger"],
        optionTitles: ["Primary", "Secondary", "Tertiary", "Danger"],
    },
    size: {
        type: ControlType.Enum,
        title: "Size",
        options: ["default", "field", "small"],
        optionTitles: ["Default", "Field", "Small"],
    },
    icon: {
        type: ControlType.Enum,
        title: "Icon",
        options: ["Add16", "Search16"],
        optionTitles: ["Add", "Search", "Small"],
    },
    fullWidth: { type: ControlType.Boolean, title: "Full Width" },
})
