import { TextField } from "@mui/material";
import { AppInputProps } from "../../types/type";
import { ForwardRefExoticComponent, RefAttributes, RefObject, forwardRef } from "react";

export const AppInput: ForwardRefExoticComponent<AppInputProps & RefAttributes<HTMLDivElement>> = forwardRef(({
    ...props
}: AppInputProps, 
ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined) => {
    return (
        <TextField
            {...props}
            inputRef={ref}
        />
    )
})