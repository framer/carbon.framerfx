import * as React from "react"

export function useManagedState(value, onChange) {
    //@ts-ignore
    const [currentValue, setValue] = React.useState(value)
    //@ts-ignore
    React.useEffect(() => {
        setValue(value)
    }, [value])

    return [
        currentValue,
        newValue => {
            setValue(newValue)
            if (onChange) {
                onChange(newValue)
            }
        },
    ]
}
