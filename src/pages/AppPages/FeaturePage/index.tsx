import { Stack, Typography, Card, CardContent, CardActions, Button, Box } from "@mui/material";

function create_feature(
  name: string,
  description: string,
  poster: string
) {
  return { name, description, poster }
}

const pacient_features = [
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),

  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
]


const doctor_features = [
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),

  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
]
const carer_features = [
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),

  create_feature(
    'Lorem',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis repellendus id, voluptates impedit exercitationem, nihil vitae repellat illum corporis provident, repudiandae harum expedita ad quisquam aspernatur aut sit dolorum.',

    'https://placehold.co/450x350'
  ),
]

export function FeaturePage() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Stack alignItems='center' paddingX={2} marginTop={6} spacing={4}>
        <Stack alignItems='center' spacing={1} textAlign={'center'}>
          <Typography variant='h5' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur.</Typography>

          <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur.</Typography>
        </Stack>

        <Stack direction='row' flexWrap='wrap' justifyContent='center' maxWidth='xl' spacing={3} useFlexGap>
          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button variant='contained' sx={{ borderRadius: 2, paddingX: 3 }}>
                Lorem Ipsum
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button variant='contained' sx={{ borderRadius: 2, paddingX: 3 }}>
                Lorem Ipsum
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 340, paddingY: 3, boxShadow: 6 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
              <img src="https://placehold.co/100" alt="" style={{ margin: 'auto' }} />
              <Typography variant='subtitle1' fontWeight='bold' textAlign='center' marginTop={2}>Lorem ipsum</Typography>
            </CardContent>

            <CardContent sx={{ paddingBottom: 0 }}>
              <Typography variant='body1' textAlign='center'>Lorem ipsum dolor sit amet consectetur. Massa phasellus gravida leo ultrices quam maecenas.</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button variant='contained' sx={{ borderRadius: 2, paddingX: 3 }}>
                Lorem Ipsum
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Stack>

      <Stack width='100%' >
        <Typography variant='h5' fontWeight='bold' textAlign={'center'} marginTop={12} marginBottom={6}>Lorem ipsum dolor sit amet consectetur.</Typography>

        <Stack spacing={5} useFlexGap>

          {pacient_features.map((feature, i) => (
            <Box display='flex' flexDirection='column' width='100%' paddingY={6} sx={{bgcolor: i % 2 === 1 ? 'lightgrey' : ''}} alignItems='center'>
              <Stack width='100%' maxWidth={1020} direction={i % 2 == 1 ? 'row-reverse' : 'row'} spacing={3} useFlexGap key={i} >
                <img src={feature.poster} alt="" />

                <Stack order={1}>
                  <Typography>{feature.name}</Typography>

                  <Typography>{feature.description}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
      
      <Stack width='100%' >
        <Typography variant='h5' fontWeight='bold' textAlign={'center'} marginY={6}>Lorem ipsum dolor sit amet consectetur.</Typography>

        <Stack spacing={5} useFlexGap>

          {carer_features.map((feature, i) => (
            <Box display='flex' flexDirection='column' width='100%' paddingY={6} sx={{bgcolor: i % 2 == 1 ? 'lightgrey' : ''}} alignItems='center'>
              <Stack width='100%' maxWidth={1020} direction={i % 2 == 1 ? 'row-reverse' : 'row'} spacing={3} useFlexGap key={i} >
                <img src={feature.poster} alt="" />

                <Stack order={1}>
                  <Typography>{feature.name}</Typography>

                  <Typography>{feature.description}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>

      
      <Stack width='100%' >
        <Typography variant='h5' fontWeight='bold' textAlign={'center'} marginY={6}>Lorem ipsum dolor sit amet consectetur.</Typography>

        <Stack spacing={5} useFlexGap>
          {doctor_features.map((feature, i) => (
            <Box display='flex' flexDirection='column' width='100%' paddingY={6} sx={{bgcolor: i % 2 == 1 ? 'lightgrey' : ''}} alignItems='center'>
              <Stack width='100%' maxWidth={1020} direction={i % 2 == 1 ? 'row-reverse' : 'row'} spacing={3} useFlexGap key={i} >
                <img src={feature.poster} alt="" />

                <Stack order={1}>
                  <Typography>{feature.name}</Typography>

                  <Typography>{feature.description}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}