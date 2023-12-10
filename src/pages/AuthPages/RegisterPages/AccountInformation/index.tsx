import { Box, Unstable_Grid2 as Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { AppInput } from '../../../../components/Input';
import { AppSelectInput } from '../../../../components/Input/InputSelect';
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { RegisterContext } from "../../../../hooks/RegisterContext";
import Cookies from 'js-cookie';

export function RegisterAccountInformation() {
    const [userData, setUserData] = useState({
        name_value: '',
        cpf_value: '',
        birth_day_value: '',
        telephone_value: '',
        specialty_name_value: '',
        crm_value: '',
        doc_value: '',
        crm_state_value: ''
    });

    const { registerUserCredentials, setRegisterUserCredentials } = useContext(RegisterContext);

    const navigate = useNavigate();
    const [type, setSome] = useState(Cookies.get('account_type_selected'));

    const handleChange = (e: SelectChangeEvent) => {
        setSome(String(e.target.value));
        Cookies.set('account_type_selected', type || ' ')
    }
    
    const handleAccountInformation = () => {
        const { name_value, cpf_value, birth_day_value, telephone_value, crm_value, crm_state_value, specialty_name_value } = userData;

        setRegisterUserCredentials([
            ...registerUserCredentials,
            {
                name: 'user_name',
                value: name_value
            },
            {
                name: 'user_telephone',
                value: telephone_value
            },
            {
                name: 'user_cpf',
                value: cpf_value
            },
            {
                name: 'user_birth_day',
                value: birth_day_value
            },
            {
                name: 'user_specialty_name',
                value: specialty_name_value
            },
            {
                name: 'user_crm',
                value: crm_value
            },
            {
                name: 'user_crm_state',
                value: crm_state_value
            }
        ]);

        navigate('/auth/register/create-password');
    }

    return (
        <>
            <Box typography='body1' mb={6} textAlign='center'>STEP</Box>
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Excelente, agora preencha algumas informações</Box>

            <Grid container spacing={3} component='form'>
                {
                    type === '1' && 
                    <>
                        <Grid xs={12}>
                            <AppInput 
                                id='name-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='Nome'
                                value={userData.name_value}
                                onChange={e => setUserData({...userData, name_value: e.target.value})}
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='cpf-field'
                                color='primary'
                                variant='filled'
                                type='number'
                                label='CPF'
                                value={userData.cpf_value}
                                onChange={e => setUserData({...userData, cpf_value: e.target.value})}
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
                                value={userData.birth_day_value}
                                onChange={e => setUserData({...userData, birth_day_value: e.target.value})}
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
                                value={userData.telephone_value}
                                onChange={e => setUserData({...userData, telephone_value: e.target.value})}
                                required
                                fullWidth
                            />
                        </Grid>
                    </>
                }

                {
                    (type === '2' || type === '3') && 
                    <>
                        <Grid xs={12}>
                            <AppInput 
                                id='name-field'
                                color='primary'
                                variant='filled'
                                type='text'
                                label='Nome'
                                value={userData.name_value}
                                onChange={e => setUserData({...userData, name_value: e.target.value})}
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id='cpf-field'
                                color='primary'
                                variant='filled'
                                type='number'
                                label='CPF'
                                value={userData.cpf_value}
                                onChange={e => setUserData({...userData, cpf_value: e.target.value})}
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
                                value={userData.birth_day_value}
                                onChange={e => setUserData({...userData, birth_day_value: e.target.value})}
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
                                value={userData.telephone_value}
                                onChange={e => setUserData({...userData, telephone_value: e.target.value})}
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid xs={6}>
                            <AppInput 
                                id={ type === '2' ? 'crm-field' : 'doc-field'}
                                color='primary'
                                variant='filled'
                                type='text'
                                label={ type === '2' ? 'CRM' : 'Documento' }
                                value={ type === '2' ? userData.crm_value : userData.doc_value }
                                onChange={e => setUserData(type === '2' ? {...userData, crm_value: e.target.value} : {...userData, doc_value: e.target.value})}
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
                                label='Estado - CRM'
                                value={userData.crm_state_value}
                                onChange={e => setUserData({...userData, crm_state_value: e.target.value})}
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
                                value={userData.specialty_name_value}
                                onChange={e => setUserData({...userData, specialty_name_value: e.target.value})}
                                required
                                fullWidth
                            />
                        </Grid>
                    </>
                }
            </Grid>

            <Box display='flex' justifyContent='space-between' alignItems='center' mt={8}>
                <Box width='8.75rem'>
                    <AppSelectInput>
                        <Select
                            labelId="select-acc-option"
                            id="select-acc"
                            value={type}
                            label='Opção'
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Paciente</MenuItem>
                            <MenuItem value={2}>Médico</MenuItem>
                            <MenuItem value={3}>Cuidador</MenuItem>
                        </Select>
                    </AppSelectInput>
                </Box>

                <Box>
                    <AppButton
                        sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem', boxShadow: 'none', backgroundColor: 'none' }}
                        id='btn-login'
                        variant='text'
                        component={NavLink}
                        to='/auth/register/email-verification'
                        className='authBackButton' 
                        disableRipple
                    >
                        Voltar
                    </AppButton>

                    <AppButton 
                        sx={{ width: '5rem', height: '1.875rem', fontSize: '.75rem' }}
                        id='btn-login'
                        variant='contained'
                        type='submit'
                        className='authButton authNextButton'
                        onClick={handleAccountInformation}
                    >
                        Avançar
                    </AppButton>
               </Box>
            </Box>
        </>
    )
}