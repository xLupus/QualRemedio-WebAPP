import { Box, Unstable_Grid2 as Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { Square, Visibility, VisibilityOff } from '@mui/icons-material';
import { AppInputAdornments } from "../../../../components/Input/InputAdornments";
import { useState } from "react";

export function CreatePassword({ isFromPath }: { isFromPath: string}) {
    const passwordValidationTexts: string[] = ['Letras maiúsculas', 'Caracteres especiais', 'Letras minúsculas', 'Mínimo de 8 caracteres', 'Números'];

    const [showPassword, setShowPassword] = useState<boolean>(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e: unknown) => e.preventDefault();

    return (
        <>
            {
                isFromPath === 'register' 
                ? 
                    <>
                        <Box typography='body1' mb={6} textAlign='center'>STEP</Box>
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Quase lá, agora crie uma senha</Box>
                    </>
                :
                    <>
                        <Box typography='h1' fontSize={'2rem'} color='#00000077' textAlign='center' mb={1.25}>Recuperação de Senha</Box>
                        <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Escolha uma nova senha para sua conta</Box>
                    </>
            }
 
            <Typography typography='body1' fontSize='0.875rem' color='#00000077' mb={3}>Sua senha deve conter:</Typography>

            <Grid container spacing={1} px={2}>
                {
                    passwordValidationTexts.map((el: string) => (
                        
                        <Grid xs={6}>
                            <Box display='flex' alignItems='center'>
                                <Square sx={{backgroundColor: '#FFFFFF', color: '#FFFFFF', borderRadius: '0.0625rem', width: '.5rem', height: '.5rem'}} />
                                <Typography typography='body1' fontSize='0.875rem' color='#00000077' ml={2}>{el}</Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>

            <Stack spacing={3} mt={5}>
                <AppInputAdornments
                        id='password-field'
                        variant='filled'
                        color='primary'
                        type={showPassword ? 'text' : 'password'}
                        label='Senha'
                       // {...register('password')}
                        required
                        fullWidth
                        autoComplete='off'
                        endAdornment={
                            <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge='end'
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                            </InputAdornment>
                        }
                    />

                    <AppInputAdornments
                        id='confirm-pass-field'
                        variant='filled'
                        color='primary'
                        type={showPassword ? 'text' : 'password'}
                        label='Confirmar senha'
                        //{...register('password')}
                        required
                        fullWidth
                        autoComplete='off'
                        endAdornment={
                            <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge='end'
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                            </InputAdornment>
                        }
                    />
            </Stack>

            <Box display='flex' justifyContent='flex-end' alignItems='center' mt={8}>
                <Box>
                    <AppButton height='1.875rem' width='5rem' variant='text' className='authBackButton' fontSize='0.75rem' isRippleDisabled={true} >Voltar</AppButton>
                    <AppButton height='1.875rem' width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Avançar</AppButton>
                </Box>
            </Box>
        </>
    )
}