import { FormControl, Input, InputLabel, OutlinedInput, FilledInput } from "@mui/material";
import { AppInputAdornmentsProps } from "../../../types/type";
import { ForwardRefExoticComponent, RefAttributes, RefObject, forwardRef } from "react";

export const AppInputAdornments: ForwardRefExoticComponent<AppInputAdornmentsProps & RefAttributes<HTMLDivElement>> = forwardRef(({
    ...props
}: AppInputAdornmentsProps,
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