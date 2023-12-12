import { Box, CardContent, FormHelperText, MenuItem, Select, SelectChangeEvent, Snackbar, SnackbarContent, Typography } from "@mui/material";
import { AppCard } from "../../../../components/Card";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AppInput } from "../../../../components/Input";
import { AppSelectInput } from "../../../../components/Input/InputSelect";
import { useState } from "react";
import { AppButton } from "../../../../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateBond, State } from "../../../../types/type";
import User from '../../../../services/User';
import BondService from '../../../../services/Bond';
import { NavigateFunction, useNavigate } from "react-router-dom";

const validator = z.object({
    email: z
        .string({ 
            required_error: 'Este campo deve ser especificado',
            invalid_type_error: 'O campo informado deve ser texto'
        })
        .max(50, { message: 'Este campo excedeu o limite de 50 caracteres' })
        .min(1, { message: 'Preencha este campo' })
        .email({ message: 'O formato de e-mail é inválido' })
        .toLowerCase()
        .superRefine((val, ctx) => {
            const availableEmailProviders: string[] = ['gmail.com', 'outlook.com', 'outlook.com.br'];

            if(!availableEmailProviders.includes(val.split('@')[1])) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: 'O provedor informado é inválido'
                });
            }
        }),
  
    role: z
        .string({ required_error: "Este campo deve ser especificado" })
        .min(1, { message: 'Preencha este campo' })
});

export function CreateBondPage() {
    const [value, setValue] = useState<string>('');
    const handleChange = (e: SelectChangeEvent) => setValue(e.target.value);
    const navigate: NavigateFunction = useNavigate();

    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: ''
    });
    const { vertical, horizontal, message, open } = state;
    
    const { register, handleSubmit, formState: { errors } } = useForm<CreateBond>({
        resolver: zodResolver(validator),
    })

    const handleCreateBond = async (data: CreateBond) => {
        const { email, role } = data;

        const user = await User.show({email, role: Number(role)});

        if(user.status === 200) {
            const result = await BondService.create({ user_to_id: Number(user.data.id), user_to_role_id: Number(role) });
            console.log(result)

            setState({ vertical: 'top', horizontal: 'center', message: result?.message, open: true });
            navigate('/users/bond/all');

            return;
        }

        setState({ vertical: 'top', horizontal: 'center', message: 'Error', open: true });
    }

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <>   
            <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Estabelecer vínculo</Typography>

            <Box component='form' method="post" onSubmit={handleSubmit(handleCreateBond)}>
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
                                        {...register('email')}
                                        error={errors.email ? true : false}
                                        helperText={errors.email?.message}
                                        fullWidth
                                        autoComplete='off'
                                    />
                                </Grid>

                                <Grid xs={6}>
                                    <Typography typography='h4' fontSize='1.125rem' mb={2}>Função do usuário</Typography>
                                    <AppSelectInput                                    
                                        id='select-role-field'
                                        color='primary'
                                        variant='filled'
                                        message="Funções"
                                        error={errors.role ? true : false}
                                        fullWidth
                                    >
                                        <Select
                                            labelId="select-acc-option"
                                            id="select-acc"
                                            aria-label="Funções"
                                            value={value}
                                            label='Funções'
                                            {...register('role')}
                                            error={errors.role ? true : false}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'1'}>Paciente</MenuItem>
                                            <MenuItem value={'2'}>Médico</MenuItem>
                                            <MenuItem value={'3'}>Cuidador</MenuItem>
                                        </Select>
                                        <FormHelperText>{errors.role && errors.role?.message}</FormHelperText>
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
                        type='submit'
                    >
                        Vincular
                    </AppButton>
                </Box>
            </Box>

            <Box>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={4000}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}
                >
                    <SnackbarContent  message={message} sx={{ backgroundColor: '#D4D4D4',  color: '#50505080' }}/>
                </Snackbar>
            </Box>
        </>
    )
}