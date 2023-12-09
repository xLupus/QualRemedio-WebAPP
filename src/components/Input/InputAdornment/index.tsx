import { FormControl, Input, InputLabel, OutlinedInput, FilledInput } from "@mui/material";
import { AppInputAdornmentProps } from "../../../types/type";
import { ForwardRefExoticComponent, RefAttributes, RefObject, forwardRef } from "react";

export const AppInputAdornment: ForwardRefExoticComponent<AppInputAdornmentProps & RefAttributes<HTMLDivElement>> = forwardRef(({
    ...props
}: AppInputAdornmentProps,
ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined) => {
    return (
        <FormControl variant={props.variant} fullWidth={props.fullWidth}>
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
                {
                    props.variant === 'outlined' ? 
                        <OutlinedInput
                            {...props}
                            inputRef={ref}
                        />
                    : props.variant === 'filled' ?
                        <FilledInput
                            {...props}
                            inputRef={ref}
                        />
                    :
                        <Input
                            {...props}
                            inputRef={ref}
                        />
                }
        </FormControl>
    )
})