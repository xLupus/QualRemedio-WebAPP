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
  create_table_data('Agendamento de consultas', 'Limitado', 'Ilimitado', 'Ilimitado'),
  create_table_data('Lembretes automáticos', '---', 'v', 'v'),
  create_table_data('Receitas e Prescrições', 'Armazenamento limitado', 'Armazenamento amplo', 'Armazenamento amplo'),
  create_table_data('Histórico médico', 'v', 'v', 'v'),
  create_table_data('Registro detalhado', 'v', 'v', 'v'),
  create_table_data('Suporte ao Cliente', 'Comunidade e básico', 'Prioritário', 'Dedicado 24/7'),
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
              Comece a cuidar da sua saúde agora mesmo, usando nosso plano 100% gratuito.
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
              <ListItemText>Agendamento de consultas ( Limitado )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Receitas e Prescrições ( Armazenamento Limitado )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Marcação de consultas</ListItemText>
            </ListItem>
            
            <ListItem>
              <ListItemText>Suporte ao Cliente ( Básico )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>

          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2, bgcolor: blue[50] }}>
          <CardHeader title='Premium' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
              Excelente para quem precisa de um quantidade maior de armazenamento.
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
              <ListItemText>Agendamento de consultas ( Ilimitado )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lembretes automáticos</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Receitas e Prescrições ( Armazenamento Amplo )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Marcação de consultas</ListItemText>
            </ListItem>
            
            <ListItem>
              <ListItemText>Suporte ao Cliente ( Prioritário )</ListItemText>
            </ListItem>

          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2 }}>
          <CardHeader title='Enterprise' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
            Solução perfeita para equipes de médio porte que trabalham de forma colaborativa.
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
              <ListItemText>Agendamento de consultas ( Ilimitado )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Lembretes automáticos</ListItemText>
            </ListItem>
            
            <ListItem>
              <ListItemText>Receitas e Prescrições ( Armazenamento Amplo )</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Marcação de consultas</ListItemText>
            </ListItem>
            
            <ListItem>
              <ListItemText>Suporte ao Cliente ( Dedicado 24/7 )</ListItemText>
            </ListItem>

          </List>
        </Card>
      </Stack>

      
    </Container>
  )
}