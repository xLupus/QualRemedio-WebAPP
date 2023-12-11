import { FormControl, InputLabel } from "@mui/material";
import { AppInputSelectProps } from "../../../types/type";

export function AppSelectInput(props: AppInputSelectProps) {
    return (
        <FormControl 
            {...props}
        > 
            <InputLabel id="select-acc-option">{props.message}</InputLabel>
            {props.children}
        </FormControl>
    )
}