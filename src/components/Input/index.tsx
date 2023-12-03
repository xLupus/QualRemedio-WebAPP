import { TextField } from "@mui/material";
import { AppInputProps } from "../../types/type";

export function AppInput({id, variant = 'outlined', label, color = 'primary', value, size = 'medium', type = 'text', onChange, onKeyDown, isFullWidth = true, isRequired = false}: AppInputProps) {
    return (
        <TextField 
            id={id} 
            label={label} 
            variant={variant} 
            type={type} 
            color={color} 
            value={value} 
            size={size}
            fullWidth={isFullWidth} 
            onChange={onChange} 
            onKeyDown={onKeyDown}
            required={isRequired}
            autoComplete="off" 
        />
    )
}