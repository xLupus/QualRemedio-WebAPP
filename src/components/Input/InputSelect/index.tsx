import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export function AppSelectInput() {
    const [account, setAccount] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAccount(event.target.value as string);
    };
  
    return (
        <FormControl size="small" variant="outlined" fullWidth> 
            <InputLabel id="select-acc-option">Opção</InputLabel>
            <Select
                labelId="select-acc-option"
                id="select-acc"
                value={account}
                label='Opção'
                onChange={handleChange}
            >
                <MenuItem value={1}>Paciente</MenuItem>
                <MenuItem value={2}>Médico</MenuItem>
                <MenuItem value={3}>Cuidador</MenuItem>
            </Select>
        </FormControl>
    )
}