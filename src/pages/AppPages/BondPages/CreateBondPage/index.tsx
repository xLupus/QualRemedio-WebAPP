import { Box, CardContent, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { AppCard } from "../../../../components/Card";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AppInput } from "../../../../components/Input";
import { AppSelectInput } from "../../../../components/Input/InputSelect";
import { useState } from "react";
import { AppButton } from "../../../../components/Button";

export function CreateBond() {
    const [value, setValue] = useState<string>('');
    const handleChange = (e: SelectChangeEvent) => setValue(e.target.value);

 /*    const handleCreateBond = () => {

    } */

    return (
        <>   
            <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Estabelecer vínculo</Typography>

            <Box component='form' method="post">
                <AppCard sx={{height: '9.375rem', p: 1.5}}>
                    <CardContent>
                            <Grid container spacing={4}>
                                <Grid xs={6}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Email do usuário</Typography>
                                    <AppInput 
                                        id='email-field'
                                        color='primary'
                                        variant='filled'
                                        type='email'
                                        label='E-mail'
                            /*          {...register('email')}
                                        error={errors.email ? true : false} */
                                    // helperText={errors.email}
                                        required
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Grid>

                                <Grid xs={6}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Função do usuário</Typography>
                                    <AppSelectInput
                                        id='email-field'
                                        color='primary'
                                        variant='filled'
                                        type='email'
                                        label='E-mail'
                                        message="Funções"
                                        required
                                    >
                                        <Select
                                            labelId="select-acc-option"
                                            id="select-acc"
                                            value={value}
                                            label='Funcções'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>Paciente</MenuItem>
                                            <MenuItem value={2}>Médico</MenuItem>
                                            <MenuItem value={3}>Cuidador</MenuItem>
                                        </Select>
                                    </AppSelectInput>
                                </Grid>
                            </Grid>
                    </CardContent>
                </AppCard>

                <Box display='flex' justifyContent='flex-end' mt={8}>
                    <AppButton
                        sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: '#D9D9D9', 
                            '&:hover': {
                            backgroundColor: '#C6C6C6'
                        }}}
                        id='btn-bond-user'
                        variant='text'
                    >
                        Vincular
                    </AppButton>
                </Box>
            </Box>
        </>
    )
}