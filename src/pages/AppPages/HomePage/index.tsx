import { Box, Stack, Typography, Button, Card, CardContent } from '@mui/material'

export function HomePage() {

  return (
    <Box component='main'>
      {/* Jumbotroon - O que fazemos */}
      <Stack alignItems='center' justifyContent='center' spacing={2} useFlexGap padding={2} textAlign='center' paddingTop={5} sx={{ bgcolor: 'yellow' }}>
        <Typography variant='h5' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur.</Typography>

        <Typography variant='body1' maxWidth='md'>
          Lorem ipsum dolor sit amet consectetur. Sed nec malesuada lobortis dui ultrices ultrices. Amet lobortis diam rhoncus nisi phasellus lorem augue tincidunt. Est tempor sit auctor at platea venenatis pharetra sit. Sit consequat velit eu enim et ut est.
        </Typography>

        <Button>Lorem ipsum</Button>

        <img src="https://placehold.co/700x400" alt="" />
      </Stack >


      {/* Publico Alvo */}
      <Stack alignItems='center' paddingX={2} paddingY={12} spacing={4}>
        <Stack alignItems='center' spacing={1} textAlign={'center'}>
          <Typography variant='h5' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur.</Typography>

          <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur.</Typography>
        </Stack>

        <Stack direction='row' flexWrap='wrap' justifyContent='center' maxWidth={{ xs: 'md', xl: 'xl' }} spacing={3} useFlexGap>
          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>

            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>

      {/* Pequeno Sobre */}
      <Stack direction={{ md: 'row' }} spacing={5} useFlexGap paddingX={2} justifyContent='center' alignItems='center' paddingY={12} sx={{ bgcolor: 'yellow' }}>
        <img src="https://placehold.co/420x300" alt="" />

        <Box marginTop={{ xs: 5, md: 0 }}>
          <Typography variant='h4' fontWeight='bold' marginBottom={3}>Lorem ipsum</Typography>

          <Typography variant='body1' maxWidth='sm' textAlign='justify'>
            Lorem ipsum dolor sit amet consectetur. Sed nec malesuada lobortis dui ultrices ultrices. Amet lobortis diam rhoncus nisi phasellus lorem augue tincidunt. Est tempor sit auctor at platea venenatis pharetra sit. Sit consequat velit eu enim et ut est.
          </Typography>
        </Box>
      </Stack>

      {/*  */}
   
    </Box>
    
  )
}