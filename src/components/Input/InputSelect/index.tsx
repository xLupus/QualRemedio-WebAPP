import { FormControl, InputLabel } from "@mui/material";

export function AppSelectInput({children}) {
    return (
        <FormControl size="small" variant="outlined" fullWidth> 
            <InputLabel id="select-acc-option">Opção</InputLabel>
            {children}
        </FormControl>
    )
}