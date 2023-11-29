import { NavLink } from 'react-router-dom';
import { Box, Link } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import Stack from '@mui/material/Stack';

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
                        <AppButton height='5.625rem' variant='text' className='authButton selectAccountButton' color='#00000077' backgroundColor='#BBBBBB' boxShadow={2} id={el.id} key={i}>
                            <Box textTransform='none' fontSize='0.875rem'>
                                {el.type}
                            </Box>
                            <Box textTransform='none' fontSize='0.875rem' mt={1.9} textAlign='left'>
                                {el.desc}
                            </Box>
                        </AppButton>
                    ))
                }
            </Stack>

            <Box display='flex' justifyContent='end' mt={8}>
                <AppButton height='1.875rem' width='5rem' variant='text' className='authBackButton' fontSize='0.75rem' isRippleDisabled={true} >Voltar</AppButton>
                <AppButton height='1.875rem' width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Avançar</AppButton>
            </Box>
        </>
    )
}