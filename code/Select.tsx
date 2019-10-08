import * as Carbon from "carbon-components-react"
import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"
import { useManagedState } from "./useManagedState"

export function Select({
    ["children"]: _,
    value,
    onChange,
    invalid,
    ...props
}) {
    const [currentValue, setValue] = useManagedState(value, onChange)
    //@ts-ignore
    const [focused, setFocused] = React.useState(false)

    return (
        <Carbon.Select
            onChange={e => setValue(e.target.value)}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            invalid={invalid && !focused}
            {...props}
        >
            <Carbon.SelectItem value={props.value} text={props.value} />
        </Carbon.Select>
    )
}

Select.defaultProps = {
    width: 135,
    height: 35,
}

addPropertyControls(Select, {
    disabled: { type: ControlType.Boolean, defaultValue: false },
    labelText: { type: ControlType.String, defaultValue: "Select label" },
    helperText: {
        type: ControlType.String,
        defaultValue: "",
    },
    placeholder: {
        type: ControlType.String,
        defaultValue: "placeholder",
    },
    invalidText: {
        type: ControlType.String,
        defaultValue: "invalid text",
    },
    invalid: { type: ControlType.Boolean, defaultValue: false },
    value: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Paris", "New York"],
        title: "Value",
    },
})
