import { Button, Card, CardActions, CardContent, CardHeader, Container, Divider, List, ListItem, ListItemText, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

function create_table_data(
  feature: string,
  free: string,
  premium: string,
  enterprise: string,
) {
  return { feature, free, premium, enterprise };
}

const table_rows = [
  create_table_data('Frozen yoghurt', 'v', 'v', 'v'),
  create_table_data('Ice cream sandwich', 'v', 'v', 'v'),
  create_table_data('Eclair', 'v', 'v', 'v'),
  create_table_data('Cupcake', 'v', 'v', 'v'),
  create_table_data('Gingerbread', 'v', 'v', 'v'),
];


export function PricePage() {
  return (
    <Container maxWidth='xl'>
      <Typography component='h1' variant='h4' fontWeight='bold' sx={{ paddingY: 6 }}>Planos</Typography>

      <Stack
        direction={{ sx: 'column', md: 'row' }} spacing={3} justifyContent='center' alignItems='center' divider={<Divider orientation="vertical" flexItem />}
      >
        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2 }}>
          <CardHeader title='Basico' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
              Lorem ipsum dolor sit amet consectetur. Consectetur congue scelerisque vehicula dolor tincidunt.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 00,00</Typography>
              <Typography component='span'>/mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>
          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2, bgcolor: blue[50] }}>
          <CardHeader title='Premium' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
              Lorem ipsum dolor sit amet consectetur. Consectetur congue scelerisque vehicula dolor tincidunt.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 00,00</Typography>
              <Typography component='span'>/mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>
          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2 }}>
          <CardHeader title='Enterprise' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
              Lorem ipsum dolor sit amet consectetur. Consectetur congue scelerisque vehicula dolor tincidunt.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 00,00</Typography>
              <Typography component='span'>/mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lorem ipsum dolor sit amet consectetur.</ListItemText>
            </ListItem>
          </List>
        </Card>
      </Stack>

      <Typography component='h2' variant='h5' fontWeight='bold' sx={{ paddingY: 4 }}>Detalhes do Plano</Typography>

      <TableContainer sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        <Table sx={{ maxWidth: 'lg' }}>
          <TableHead>
            <TableRow>
              <TableCell>Compare todos os planos</TableCell>
              <TableCell align='center'>Gratuito</TableCell>
              <TableCell align='center'>Premium</TableCell>
              <TableCell align='center'>Enterprise</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {table_rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.feature}</TableCell>
                <TableCell align='center'>{row.free}</TableCell>
                <TableCell align='center'>{row.premium}</TableCell>
                <TableCell align='center'>{row.enterprise}</TableCell>
              </TableRow>
            ))}

            <TableRow >
              <TableCell></TableCell>

              <TableCell align='center'>
                <Button variant='contained' size="small">
                  Assinar Plano
                </Button>
              </TableCell>

              <TableCell align='center'>
                <Button variant='contained' size="small">
                  Assinar Plano
                </Button>
              </TableCell>

              <TableCell align='center'>
                <Button variant='contained' size="small">
                  Assinar Plano
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}