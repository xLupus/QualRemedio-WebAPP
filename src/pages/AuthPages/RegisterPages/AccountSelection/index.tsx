import { NavLink } from 'react-router-dom';
import { Box, Link, Stack } from "@mui/material";
import { AppButton } from '../../../../components/Button';

export function RegisterAccountSelection() {
    const accountsType = [
        {
            id: 1,
            type: 'Paciente',
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque sed, perferendis`
        },
        {
            id: 2,
            type: 'Cuidador',
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque sed, perferendis`
        },
        {
            id: 3,
            type: 'Médico',
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Doloremque sed, perferendis`
        }
    ];

    return (
        <>
            <Box typography='h1' fontSize='2rem' color='#00000077' textAlign='center' mb={1.25} >Criar uma conta</Box>
            
            <Box typography='body1' fontSize='0.77344rem' color='#50505080' textAlign='center'>Já possui uma conta? 
                <Link component={NavLink} to='/auth/login/select-account' ml='0.2rem' color='#50505080' underline='none'>Logue-se</Link>
            </Box>

            <Box typography='body1' mt={6} mb={3.5} textAlign='center'>STEP</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={4.3}>Antes de começar, selecione o tipo de conta que deseja criar</Box>

            <Stack spacing={3}>
                {
                    accountsType.map((el, i) => (
                        <AppButton 
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '5.625rem', fontSize: '1rem', color: '#00000077', backgroundColor: '#BBBBBB', borderRadius: '.25rem', paddingX: 2, boxShadow: 2, textTransform: 'none', lineHeight: 'normal' }}
                            id={String(el.id)}
                            key={i}
                            variant='text'
                            type='submit'
                            className='authButton'
                        >
                            <Box textTransform='none' fontSize='.875rem'>
                                {el.type}
                            </Box>
                            <Box textTransform='none' fontSize='.875rem' mt={1.9} textAlign='left'>
                                {el.desc}
                            </Box>
                        </AppButton>
                    ))
                }
            </Stack>

            <Box display='flex' justifyContent='end' alignItems='center' mt={8}>
                <AppButton
                    sx={{width: '5rem', height: '1.875rem', fontSize: '.75rem', color: '#00000077', textTransform: 'none'}}
                    id='btn-login'
                    variant='text'
                    type='submit'
                    component={NavLink}
                    to='/auth/login/select-account'
                    className='authBackButton' 
                    disableRipple
                >
                    Voltar
                </AppButton>

                <AppButton 
                    sx={{width: '5rem', height: '1.875rem', fontSize: '.75rem', backgroundColor: '#BBBBBB', boxShadow: 2, color: '#00000077', textTransform: 'none'}}
                    id='btn-login'
                    variant='text'
                    type='submit'
                    className='authButton authNextButton'
                >
                    Avançar
                </AppButton>
            </Box>
        </>
    )
}