import { Box } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { TaskAlt } from "@mui/icons-material";

export function RecoverPasswordChangedPassword() {
    return (
        <>
            <Box typography='body1' fontSize='1.75rem' color='#00000077' textAlign='center' width='80%' mx='auto' mb={6}>Senha alterada com sucesso!</Box>
        

            <Box display='flex' justifyContent='center' my={6}>
                <TaskAlt sx={{height: '140px', width: '140px'}} />
            </Box>

            <Box display='flex' justifyContent='flex-end' alignItems='center' mt={8}>
                <AppButton height='1.875rem' width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Login</AppButton>
            </Box>
        </>
    )
}