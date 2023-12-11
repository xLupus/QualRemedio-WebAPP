import { Box } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { AppInput } from "../../../../components/Input";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { RegisterContext } from "../../../../hooks/RegisterContext";

export function MailVerification({ isFromPath }: { isFromPath: string }) {
    const [value, setValue] = useState<string>('');

    const navigate = useNavigate();
    const { registerUserCredentials, setRegisterUserCredentials } = useContext(RegisterContext);

    const handleValue = (val: string) => setValue(val);

    const handleSelectAccount = () => {
        setRegisterUserCredentials([
            ...registerUserCredentials,
            {
                name: 'user_email',
                value: value || ''
            }
        ]);

        navigate('/auth/register/account-info');
    }

    return (
            isFromPath === 'register' ?  
                <>
                    <Box typography='body1' mb={3.5} textAlign='center'>STEP</Box>

                    <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={1.25}>Muito bem, agora informe o seu e-mail</Box>
                    <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={4.3} width='80%' mx='auto'>Faremos uma verificação após o seu cadastro para fins de segurança</Box>

                    <Box>
                        <AppInput 
                            id='email-field'
                            color='primary'
                            variant='filled'
                            type='email'
                            label='Email'
                            value={value}
                            onChange={e => handleValue(e.target.value)}
                            autoComplete="off"
                            required
                            fullWidth
                        />
                    </Box>

                    <Box display='flex' justifyContent='flex-end' mt={8}>
                        <AppButton
                            sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'none' }}
                            id='btn-login'
                            variant='text'
                            component={NavLink}
                            to='/auth/register/select-account'
                            className='authBackButton'
                            disableRipple
                        >
                            Voltar
                        </AppButton>

                        <AppButton 
                            sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem' }}
                            id='btn-login'
                            variant='text'
                            type='submit'
                            className='authButton authNextButton'
                            onClick={handleSelectAccount}
                        >
                            Avançar
                        </AppButton>
                    </Box>
                </>
               :
                <>
                    <Box typography='h1' fontSize={'2rem'} color='#00000077' textAlign='center' mb={1.25}>Recuperação de Senha</Box>
                    <Box typography='body1' fontSize='0.77344rem' color='#00000077' textAlign='center' mb={6} width='75%' mx='auto'>Parece que você não se lembra da senha. Siga os passos para recuperá-la</Box>
                    
                    <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' width='90%' mx='auto' mb={4}>Insira o e-mail que você usou no seu cadastro para enviarmos as instruções de recuperação.</Box>
                    
                    <AppInput 
                        id='email-field'
                        color='primary'
                        variant='filled'
                        type='email'
                        label='Email'
                        autoComplete="off"
                        required
                        fullWidth
                    />
        
                    <Box display='flex' justifyContent='center' mt={5.5}>
                        <AppButton
                            sx={{ width: '22.8125rem', height: '2.5rem' }}
                            id='btn-login'
                            variant='text'
                            component={NavLink}
                            to='/auth/register/select-account'
                            className='authButton' 
                            fullWidth
                            disableRipple
                        >
                            Enviar verificação
                        </AppButton>
                    </Box>
        
                    <Box display='flex' justifyContent='flex-end' mt={8}>
                        <AppButton
                            sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'none' }}
                            id='btn-login'
                            variant='text'
                            component={NavLink}
                            to='/auth/register/select-account'
                            className='authBackButton' 
                            disableRipple
                        >
                            Voltar
                        </AppButton>
                    </Box>
                </>
    )
}