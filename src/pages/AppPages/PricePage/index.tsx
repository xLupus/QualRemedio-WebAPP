import { Button, Card, CardActions, CardContent, CardHeader, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const free_plan = []

const premium_plan = []

const enterprise_plan = []


export function PricePage() {
  return (
    <Container maxWidth='xl' sx={{paddingTop: 6, paddingBottom: 12}}>
      <Typography component='h1' variant='h4' fontWeight='bold'>Planos</Typography>

      <Stack
        direction={{ sx: 'column', md: 'row' }} spacing={3} justifyContent='center' alignItems='center' divider={<Divider orientation="vertical" flexItem />}
      >
        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2 }}>
          <CardHeader title='Basico' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3}>
              Nosso Plano Gratuito oferece um ponto de partida acessível para o gerenciamento de consultas e prescrições médicas. Desfrute da facilidade de registrar suas consultas e gerenciar prescrições, tudo sem nenhum custo.
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
              Além das funcionalidades do plano gratuito, desbloqueie recursos avançados como, lembretes ilimitados e permissões detalhadas entre vínculos. Para quem busca um gerenciamento mais completo e personalizado.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 29,90</Typography>
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
              Para organizações e equipes médicas. Além das funcionalidades dos planos anteriores, obtenha ferramentas avançadas para gerenciar consultas, colaborar eficientemente e analisar resultados de exames. Uma solução integrada para otimizar o cuidado em escala.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 119,50</Typography>
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
    </Container>
  )
}