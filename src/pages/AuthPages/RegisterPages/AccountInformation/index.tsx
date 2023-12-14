import { Box, Unstable_Grid2 as Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { AppButton } from '../../../../components/Button';
import { AppInput } from '../../../../components/Input';
import { AppSelectInput } from '../../../../components/Input/InputSelect';
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { RegisterContext } from "../../../../hooks/RegisterContext";
import { z } from "zod";
import Cookies from 'js-cookie';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import moment from 'moment';
import { RegisterAccountService } from "../../../../types/type";

export function RegisterAccountInformation() {
    const [type, setSome] = useState(Cookies.get('account_type_selected'));

    const validator = z.object({
        name: z
            .string({ 
                required_error: 'Este campo deve ser especificado',
                invalid_type_error: 'O tipo informado deve ser string'
            })
            .min(1, { message: 'Preencha este campo' })
            .max(40, { message:'O campo excede o máximo de 40 caracteres' })
            .regex(/[a-zA-Z]/, { message: 'O campo não corresponde ao padrão' }),
    
            cpf: z
            .string({ 
                required_error: 'Este campo deve ser especificado',
                invalid_type_error: 'O tipo informado deve ser string'
            })
            .length(11, { message: 'O campo deve ter 11 caracteres' })
            .min(1, { message: 'Preencha este campo' })
            .trim(),
    
        telephone: z
            .string({ 
                required_error: 'Este campo deve ser especificado',
                invalid_type_error: 'O tipo informado deve ser string'
            })
            .length(11, { message: 'O campo deve ter 11 caracteres' })
            .min(1, { message: 'Preencha este campo' })
            .trim(),
    
        birth_day: z
            .preprocess(
                (el: any, ctx: z.RefinementCtx) => {
                    if(el === undefined) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.invalid_type,
                            received: 'undefined',
                            expected: 'string',
                            message: 'Este campo deve ser especificado',
                            fatal: true
                        });
                
                        return z.NEVER;
                    } else if(el.length < 1) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.too_small,
                            minimum: 1,
                            inclusive: true,
                            type: 'number',
                            message: 'Preencha este campo',
                            fatal: true
                        });
    
                        return z.NEVER;
                    }
    
                    const date = new Date(moment(el, 'DD-MM-YYYY').format('YYYY-MM-DD'));
    
                    if(date.toDateString() === 'Invalid Date') {
                        ctx.addIssue({
                                code: z.ZodIssueCode.invalid_date,
                                message: 'O formato de data é inválido',
                                fatal: true
                            });
    
                            return z.NEVER;
                        }
                        
                        return date;  
                    },
     
                z
                    .date({
                        required_error: 'Este campo deve ser especificado',
                        invalid_type_error: 'O formato de data é inválido'
                    })
        ),
        crm_state: z
            .string({ invalid_type_error:'Este campo deve ser string' })
            .optional()
                .superRefine((val, ctx) => {
                    if(type === '2' && val!.length < 1) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.too_small,
                            inclusive: true,
                            minimum: 1,
                            type: 'string',
                            message: 'Preencha este campo',
                            fatal: true
                        });

                        return z.NEVER;
                    }
            }),
                
        crm: z
            .string({ invalid_type_error:'Este campo deve ser string' })
            .optional()
            .superRefine((val, ctx) => {
                    if(type === '2' && val!.length < 1) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.too_small,
                            inclusive: true,
                            minimum: 1,
                            type: 'string',
                            message: 'Preencha este campo',
                            fatal: true
                        });
    
                        return z.NEVER;
                    }
            }),
    
            
        doc: z
            .string({ invalid_type_error:'Este campo deve ser string' })
            .optional()
            .superRefine((val, ctx) => {
                if(type === '3' && val!.length < 1) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.too_small,
                        inclusive: true,
                        minimum: 1,
                        type: 'string',
                        message: 'Preencha este campo',
                        fatal: true
                    });

                    return z.NEVER;
                }
        }),
                   
        specialty_name: z
            .string({ invalid_type_error:'Este campo deve ser string' })
            .optional()
            .superRefine((val, ctx) => {
                if((type === '2' && val!.length < 1 || type === '3' && val!.length < 1)) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.too_small,
                        inclusive: true,
                        minimum: 1,
                        type: 'string',
                        message: 'Preencha este campo',
                        fatal: true
                    });

                    return z.NEVER;
                }
        })
                    
    });

    const [userData, setUserData] = useState({
        name_value: '',
        cpf_value: '',
        birth_day_value: '',
        crm_value: '',
        specialty_name_value: '',
        telephone_value: '',
        doc_value: '',
        crm_state_value: ''
    });

    const { registerUserCredentials, setRegisterUserCredentials } = useContext(RegisterContext);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterAccountService>({
        resolver: zodResolver(validator),
    })
    
    useEffect(() => {
        Cookies.set('account_type_selected', type || ' ');

        const updatedRegisterUserCredentials = registerUserCredentials.map(el => {
            if (el.name === 'account_type_selected') {
                return {
                    ...el,
                    value: type || ''
                };
            }
            return el;
        })

        setRegisterUserCredentials(updatedRegisterUserCredentials)
    }, [type, setRegisterUserCredentials, registerUserCredentials])

    const handleChange = (e: SelectChangeEvent) => setSome(String(e.target.value));
    
    const handleAccountInformation = () => {
        console.log('1')
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
            {/* <Box typography='body1' mb={6} textAlign='center'></Box> */}
            <Box typography='body1' fontSize='0.875rem' color='#00000077' textAlign='center' mb={6}>Excelente, agora preencha algumas informações</Box>

            <Box  component='form' onSubmit={handleSubmit(handleAccountInformation)}>
                <Grid container spacing={3}>
                    {
                        type === '1' && 
                        <>
                            <Grid xs={12}>
                                <AppInput 
                                    id='name-field'
                                    color='primary'
                                    variant='filled'
                                    autoComplete="off"
                                    aria-label="name input"
                                    type='text'
                                    label='Nome'
                                    value={userData.name_value}
                                    {...register('name', {
                                            onChange: e => setUserData({...userData, name_value: e.target.value})
                                        })
                                    }
                                    error={errors.name ? true : false}
                                    helperText={errors.name && errors.name.message}
                                    fullWidth
                                />
                            </Grid>

                            <Grid xs={7}>
                                <AppInput            
                                    id='cpf-field'
                                    color='primary'
                                    variant='filled'
                                    type='number'
                                    label='CPF'
                                    aria-label="cpf input"
                                    value={userData.cpf_value}
                                    {...register('cpf', {
                                            onChange: e => setUserData({...userData, cpf_value: e.target.value})
                                        })
                                    }
                                    error={errors.cpf ? true : false}
                                    helperText={errors.cpf && errors.cpf.message}
                                    autoComplete="off"
                                    fullWidth
                                />
                            </Grid>

                            <Grid xs={5}>
                                <AppInput 
                                    id='nasc-field'
                                    color='primary'
                                    variant='filled'
                                    type='date'
                                    label='Nasc.:'
                                    aria-label="birth_day input"
                                    min="1900-01-01"
                                    value={userData.birth_day_value}
                                    {...register('birth_day', {
                                        onChange: e => setUserData({...userData, birth_day_value: e.target.value})
                                        })
                                    }
                                    error={errors.birth_day ? true : false}
                                    helperText={errors.birth_day && errors.birth_day.message}
                                    autoComplete="off"
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
                                    aria-label="telephone input"
                                    value={userData.telephone_value}
                                    {...register('telephone', {
                                        onChange: e => setUserData({...userData, telephone_value: e.target.value})
                                        })
                                    }
                                    error={errors.telephone ? true : false}
                                    helperText={errors.telephone && errors.telephone.message}
                                    autoComplete="off"
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
                                    autoComplete="off"
                                    aria-label="telephone input"
                                    value={userData.name_value}
                                    {...register('name', {
                                            onChange: e => setUserData({...userData, name_value: e.target.value})
                                        })
                                    }
                                    error={errors.name ? true : false}
                                    helperText={errors.name && errors.name.message}
                                    fullWidth
                                />
                            </Grid>

                            <Grid xs={7}>
                                <AppInput 
                                    id='cpf-field'
                                    color='primary'
                                    variant='filled'
                                    type='number'
                                    label='CPF'
                                    autoComplete="off"
                                    value={userData.cpf_value}
                                    {...register('cpf', {
                                        onChange: e => setUserData({...userData, cpf_value: e.target.value})
                                        })
                                    }
                                    error={errors.cpf ? true : false}
                                    helperText={errors.cpf && errors.cpf.message}
                                    fullWidth
                                />
                            </Grid>

                            <Grid xs={5}>
                                <AppInput 
                                    id='date-field'
                                    color='primary'
                                    variant='filled'
                                    autoComplete="off"
                                    type='date'
                                    label='Nasc.:'
                                    aria-label="birth_day input"
                                    value={userData.birth_day_value}
                                    {...register('birth_day', {
                                        onChange: e => setUserData({...userData, birth_day_value: e.target.value})
                                        })
                                    }
                                    error={errors.birth_day ? true : false}
                                    helperText={errors.birth_day && errors.birth_day.message}
                                    fullWidth
                                />
                            </Grid>

                            <Grid xs={type === '2' ? 12 : 7}>
                                <AppInput 
                                    id='tel-field'
                                    color='primary'
                                    variant='filled'
                                    autoComplete="off"
                                    type='tel'
                                    label='Telefone'
                                    value={userData.telephone_value}
                                    aria-label="telephone input"
                                    {...register('telephone', {
                                        onChange: e => setUserData({...userData, telephone_value: e.target.value})
                                        })
                                    }
                                    error={errors.telephone ? true : false}
                                    helperText={errors.telephone && errors.telephone.message}
                                    fullWidth
                                />
                            </Grid>

                            {
                                (type === '2') ? 
                                    <>
                                        <Grid xs={6}>
                                            <AppInput 
                                                id='crm-field'
                                                color='primary'
                                                variant='filled'
                                                autoComplete="off"
                                                type='text'
                                                label='CRM'
                                                aria-label="crm input"
                                                value={userData.crm_value}
                                                {...register('crm', {
                                                    onChange: e => setUserData({...userData, crm_value: e.target.value})
                                                    })
                                                }
                                                error={errors.crm ? true : false}
                                                helperText={errors.crm && errors.crm.message}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid xs={6}>
                                            <AppInput 
                                                id='tel-field'
                                                color='primary'
                                                variant='filled'
                                                autoComplete="off"
                                                type='tel'
                                                label='Estado - CRM'
                                                aria-label="crm_state input"
                                                value={userData.crm_state_value}
                                                {...register('crm_state', {
                                                    onChange: e => setUserData({...userData, crm_state_value: e.target.value})
                                                    })
                                                }
                                                error={errors.crm_state ? true : false}
                                                helperText={errors.crm_state && errors.crm_state.message}
                                                fullWidth
                                            />
                                        </Grid>
                                    </>
                                    :
                                    <>
                                        <Grid xs={5}>
                                            <AppInput 
                                                id='crm-field'
                                                color='primary'
                                                variant='filled'
                                                autoComplete="off"
                                                type='text'
                                                label='Documento'
                                                aria-label="doc input"
                                                value={userData.doc_value}
                                                {...register('doc', {
                                                    onChange: e => setUserData({...userData, doc_value: e.target.value})
                                                    })
                                                }
                                                error={errors.doc ? true : false}
                                                helperText={errors.doc && errors.doc.message}     
                                                fullWidth
                                            />
                                        </Grid>
                                </>
                            }

                            <Grid xs={12}>
                                <AppInput 
                                    id='speclty-field'
                                    color='primary'
                                    variant='filled'
                                    type='text'
                                    autoComplete="off"
                                    label='Especialidade'
                                    aria-label="specialty input"
                                    value={userData.specialty_name_value}
                                    {...register('specialty_name', {
                                        onChange: e => setUserData({...userData, specialty_name_value: e.target.value})
                                        })
                                    }
                                    error={errors.specialty_name ? true : false}
                                    helperText={errors.specialty_name && errors.specialty_name.message}     
                                    fullWidth
                                />
                            </Grid>
                        </>
                    }
                </Grid>

                <Box display='flex' justifyContent='space-between' alignItems='center' mt={8}>
                    <Box width='8.75rem'>
                        <AppSelectInput message="Opção" aria-label="account-option input">
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
                            sx={{width: '5rem', height: '1.875rem', fontSize: '.75rem', backgroundColor: '#404040', color: '#FFF', ml: 2,
                            '&:hover': {
                                backgroundColor: '#525252'
                            }}}
                            id='btn-login'
                            variant='contained'
                            type='submit'
                        >
                            Avançar
                        </AppButton>
                </Box>
                </Box>
            </Box>
        </>
    )
}