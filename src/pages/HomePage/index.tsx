import { Box, Stack, Typography, Button, Card, CardContent } from '@mui/material'
import { grey } from '@mui/material/colors'

export function HomePage() {
  return (
    <Box component='main'>

      {/* Jumbotroon - O que fazemos */}
      <Stack alignItems='center' justifyContent='center' spacing={2} useFlexGap padding={2} textAlign='center' paddingTop={5} sx={{ bgcolor: grey[50] }}>
        <Typography variant='h5' fontWeight='bold'>Organizando uma vida saudável</Typography>

        <Typography variant='body1' maxWidth='md'>
        Estamos ansiosos para tê-lo como parte da nossa comunidade e ajudá-lo a cuidar da sua saúde de forma mais eficaz. Comece a desfrutar dos benefícios de uma gestão de saúde simplificada.
        </Typography>

        <Button>Qual Remédio</Button>

        <img src="https://placehold.co/700x400" alt="" />
      </Stack >


      {/* Publico Alvo */}
      <Stack alignItems='center' paddingX={2} paddingY={12} spacing={4}>
        <Stack alignItems='center' spacing={1} textAlign={'center'}>
          <Typography variant='h5' fontWeight='bold'>Nosso público</Typography>

          <Typography variant='subtitle1'></Typography>
        </Stack>

        <Stack direction='row' flexWrap='wrap' justifyContent='center' maxWidth={{ xs: 'md', xl: 'xl' }} spacing={3} useFlexGap>
          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://cdn.discordapp.com/attachments/764725899697848362/1180980066587508796/depositphotos_60841863-stock-illustration-fun-cartoon-doctor.png?ex=657f6465&is=656cef65&hm=b7e6b399a58e9f083f80edf04343352aa9849e365d58e91323aedf0138fc5262&" alt="" style={{ margin: 'auto', height: '150px' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Médicos</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Agora ficou ainda mais fácil controlar as receitas para os seus pacientes</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://cdn.discordapp.com/attachments/764725899697848362/1180981301344481360/enfermeira-com-personagem-de-desenho-animado-do-paciente_1639-41872.png?ex=657f658b&is=656cf08b&hm=d24187ceccf2909b46f05b0fcb8dc426c9d31e16dff89765ef1d8b5f028fd144&" alt="" style={{ margin: 'auto', height: '150px'  }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Cuidadores</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Gerenciar a lista dos seus pacientes, ficou ainda mais descomplicado.</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://cdn.discordapp.com/attachments/764725899697848362/1180981888962269204/imagem_2023-12-03_181408403-removebg-preview.png?ex=657f6617&is=656cf117&hm=d3b655ebd6c5ecf6ac9de656ec8905fb72fd3222a3e5b406321175170af316dc&" alt="" style={{ margin: 'auto', height: '150px'  }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Pacientes</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Gerenciar uma vida saudável nunca foi tão fácil.</Typography>
            </CardContent>
          </Card>

        </Stack>
      </Stack>

      {/* Pequeno Sobre */}
      <Stack direction={{ md: 'row' }} spacing={5} useFlexGap paddingX={2} justifyContent='center' alignItems='center' paddingY={12} sx={{ bgcolor: grey[50] }}>
        <img src="https://cdn.discordapp.com/attachments/764725899697848362/1180982157422903436/default_transparent_765x625.png?ex=657f6657&is=656cf157&hm=feb9ae4d507d2e5e0883107802a3a28dd1b0162520686ae0a88b5826aaddaef2&" alt="logo da empresa" style={{ height: '250px'  }}/>

        <Box marginTop={{ xs: 5, md: 0 }}>
          <Typography variant='h4' fontWeight='bold' marginBottom={3}>Sobre Nós</Typography>

          <Typography variant='body1' maxWidth='sm' textAlign='justify'>
            É com grande satisfação que apresentamos o Qual Remédio ?, a sua solução abrangente para gerenciamento de receitas e consultas médicas. Nosso site foi criado com o objetivo de simplificar a vida de pacientes, médicos e cuidadores, proporcionando uma plataforma segura e eficiente para o gerenciamento de informações de saúde.
          </Typography>
        </Box>
      </Stack>

      {/*  */}
    </Box>
  )
}