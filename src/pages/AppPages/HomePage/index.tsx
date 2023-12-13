import { Box, Stack, Typography, Button, Card, CardContent } from '@mui/material'
import { grey } from '@mui/material/colors';
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaUserDoctor, FaUser } from "react-icons/fa6";
import LogoDarkSVG from "../../../assets/logo_dark.svg"
import { NavLink } from 'react-router-dom';
import { AppButton } from '../../../components/Button';

export function HomePage() {

    return (
        <Box component='main'>
        {/* Jumbotroon - O que fazemos */}
        <Stack alignItems='center' justifyContent='center' spacing={2} useFlexGap padding={2} textAlign='center' paddingTop={5} sx={{ bgcolor: grey[50] }}>
            <Typography variant='h5' fontWeight='bold'>Inovação, Conveniência e Cuidado em um Único Lugar.</Typography>

            <Typography variant='body1' maxWidth='md'>
            Transforme a Saúde, Simplifique a Vida. Descubra o Futuro do Gerenciamento de Consultas e Prescrições Médicas. Seu bem-estar está em primeiro lugar!
            </Typography>

            <Box my={4}>
                <AppButton
                        sx={{ width: '18.5rem', height: '2.5rem', backgroundColor: 'transparent', color: '#000', boxShadow: 0,
                            '&:hover': {
                            backgroundColor: 'transparent'
                        }}}
                        id='btn-bond-user'
                        variant='text'
                        component={NavLink} 
                        disableRipple
                        to='/prices'
                    >
                    Conheça nossos preços 
                </AppButton>
            </Box>

            <img src="https://placehold.co/700x400" alt="" />
        </Stack >


        {/* Publico Alvo */}
        <Stack alignItems='center' paddingX={2} paddingY={12} spacing={4}>
            <Stack alignItems='center' spacing={2} textAlign={'center'}>
            <Typography variant='h5' fontWeight='bold'>Publico Alvo</Typography>

            <Typography variant='subtitle1' maxWidth={'md'}>
                Personalize Seu Cuidado, Simplifique Sua Rotina. Descubra Como Estamos Tornando o Cuidado de Saúde Mais Acessível e Conveniente para Todos.
            </Typography>
            </Stack>

            <Stack direction='row' flexWrap='wrap' justifyContent='center' maxWidth={{ xs: 'md', xl: 'xl' }} spacing={3} useFlexGap>
            <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
                <CardContent sx={{ paddingBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <FaUser size={60} />
                <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Paciente</Typography>
                </CardContent>

                <CardContent sx={{ paddingBottom: 0 }}>
                <Typography variant='body1' textAlign='center'>
                    Agende consultas, gerencie prescrições e mantenha seu histórico médico em um só lugar. Sua saúde, suas escolhas, sua simplicidade.
                </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
                <CardContent sx={{ paddingBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <FaUserDoctor size={60} />

                <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Medicos</Typography>
                </CardContent>

                <CardContent sx={{ paddingBottom: 0 }}>
                <Typography variant='body1' textAlign='center' >
                    Gerencie prescrições de forma individualizada e mantenha um histórico detalhado para cada paciente. Sua prática, suas decisões, nossa plataforma.
                </Typography>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
                <CardContent sx={{ paddingBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <FaHandHoldingMedical size={60} />
                <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Cuidadores</Typography>
                </CardContent>

                <CardContent sx={{ paddingBottom: 0 }}>
                <Typography variant='body1' textAlign='center'>
                    Cuide com confiança. Cada pessoa que você cuida, gerenciada de forma única, proporcionando o melhor cuidado possível.
                </Typography>
                </CardContent>
            </Card>

            </Stack>
        </Stack>

        {/* Pequeno Sobre */}
        <Stack direction={{ md: 'row' }} spacing={5} useFlexGap paddingX={2} justifyContent='center' alignItems='center' paddingY={12} sx={{ bgcolor: grey[50] }}>
            <img src={LogoDarkSVG} alt="" height={200} draggable='false' />

            <Box marginTop={{ xs: 5, md: 0 }}>
            <Typography variant='h4' fontWeight='bold' marginBottom={3}>MedSync Innovation</Typography>

            <Typography variant='body1' maxWidth='sm' textAlign='justify'>
                Somos apaixonados por conectar pacientes, cuidadores e médicos de uma maneira inovadora e eficiente. Nossa missão é simplificar o caminho para um cuidado de saúde mais acessível, inteligente e centrado no paciente. Estamos comprometidos em proporcionar uma experiência revolucionária no gerenciamento de consultas e prescrições médicas.
            </Typography>
            </Box>
        </Stack>
        </Box>
    )
}