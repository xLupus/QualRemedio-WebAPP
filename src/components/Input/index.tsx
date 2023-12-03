import { TextField } from "@mui/material";
import { AppInputProps } from "../../types/type";
import React from "react";

export const AppInput = React.forwardRef(({id, variant = 'outlined', label, color = 'primary', value, size = 'medium', type = 'text', onChange, onKeyDown, helperText, isFullWidth = true, isRequired = false}: AppInputProps, ref) => {
    return (
        <TextField
            inputRef={ref}
            id={id} 
            label={label} 
            variant={variant} 
            type={type} 
            color={color} 
            value={value} 
            size={size}
            fullWidth={isFullWidth}
            helperText={helperText}
            onChange={onChange} 
            onKeyDown={onKeyDown}
            required={isRequired}
            autoComplete="off"
        />
    )
}) 