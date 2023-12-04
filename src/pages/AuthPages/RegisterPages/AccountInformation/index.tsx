import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { AppInput } from '../../../../components/Input';
import { AppSelectInput } from '../../../../components/Input/InputSelect';

export function RegisterAccountInformation() {
    const accountType: number = 1;

    return (
        <>
            <Box typography='body1' mb={6} textAlign='center'>STEP</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Excelente, agora preencha algumas informações</Box>

            <Grid container spacing={3}>
                {
                    accountType === 1 && 
                    <>
                        <Grid xs={12}>
                            <AppInput 
                                id='name-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='Nome'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='cpf-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='CPF'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='nasc-field'
                                color='primary'
                                variant='filled'
                                type='date'
                                label='Nasc.:'
                                min="1900-01-01"
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={12}>
                            <AppInput 
                                id='tel-field'
                                color='primary'
                                variant='filled'
                                type='tel'
                                label='Telefone'
                                required
                                fullWidth
                            />
                        </Grid>
                    </>
                }

                {
                    (accountType === 2 || accountType === 3) && 
                    <>
                        <Grid xs={12}>
                            <AppInput 
                                id='name-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='Nome'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='cpf-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='CPF'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='date-field'
                                color='primary'
                                variant='filled'
                                type='date'
                                label='Nasc.:'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='tel-field'
                                color='primary'
                                variant='filled'
                                type='tel'
                                label='Telefone'
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id={ accountType === 2 ? 'crm-field' : 'doc-field'}
                                color='primary'
                                variant='filled'
                                type='text'
                                label={ accountType === 2 ? 'CRM' : 'Documento' }
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={12}>
                            <AppInput 
                                id='speclty-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='Especialidade'
                                required
                                fullWidth
                            />
                        </Grid>
                    </>
                }
            </Grid>

            <Box display='flex' justifyContent='space-between' alignItems='center' mt={8}>
                <Box width='8.75rem'>
                    <AppSelectInput />
                </Box>
                <Box>
                    <AppButton height='1.875rem' width='5rem' variant='text' className='authBackButton' fontSize='0.75rem' isRippleDisabled={true} >Voltar</AppButton>
                    <AppButton height='1.875rem' width='5rem' variant='contained' className='authButton authNextButton' backgroundColor='#BBBBBB' boxShadow={2} fontSize='0.75rem'>Avançar</AppButton>
               </Box>
            </Box>
        </>
    )
}