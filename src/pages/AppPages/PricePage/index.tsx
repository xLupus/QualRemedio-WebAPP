import { Button, Card, CardActions, CardContent, CardHeader, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export function PricePage() {
  return (
    <Container maxWidth='xl' sx={{paddingTop: 6, paddingBottom: 12}}>
      <Typography component='h1' variant='h4' fontWeight='bold' mb={10}>Planos</Typography>

      <Stack
        direction={{ sx: 'column', md: 'row' }} spacing={3} justifyContent='center' alignItems='center' divider={<Divider orientation="vertical" flexItem />}
      >
        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2, bgcolor: grey[50] }}>
          <CardHeader title='Basico' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3} textAlign='justify'>
              Nosso Plano Gratuito oferece um ponto de partida acessível para o gerenciamento de consultas e prescrições médicas. 
              Desfrute da facilidade de registrar suas consultas e gerenciar prescrições, tudo sem nenhum custo.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 21,90</Typography>
              <Typography component='span'> /mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Criação de até 16 receitas mensais</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Agendamento de até 16 consultas mensais.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Vínculos limitados de até 16 entidades</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Notificações e lembretes simples</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Suporte ao cliente via e-mail</ListItemText>
            </ListItem>


            <ListItem>
              <ListItemText>Armazenamento limitado</ListItemText>
            </ListItem>
          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2, bgcolor: blue[50], mb: 3 }}>
          <CardHeader title='Premium' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3} textAlign='justify'>
              Além das funcionalidades do plano gratuito, desbloqueie recursos avançados como, lembretes ilimitados e permissões detalhadas entre vínculos. 
              Para quem busca um gerenciamento mais completo e personalizado.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 76,90</Typography>
              <Typography component='span'> /mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Criação de até 80 de receitas mensais</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Agendamento de até 80 consultas por mensais</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Vínculos de até 50 entidades</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Notificações e lembretes avançados.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Suporte via e-mail e telefone.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Armazenamento extendido</ListItemText>
            </ListItem>

          </List>
        </Card>

        <Card sx={{ maxWidth: 400, boxShadow: 0, padding: 2, bgcolor: grey[50] }}>
          <CardHeader title='Enterprise' titleTypographyProps={{ fontWeight: 'bold' }} sx={{ paddingBottom: 0 }} />

          <CardContent>
            <Typography marginBottom={3} textAlign='justify'>
              Para organizações e equipes médicas. Além das funcionalidades dos planos anteriores, obtenha ferramentas avançadas para gerenciar consultas, 
              colaborar eficientemente e analisar resultados de exames. Uma solução integrada para otimizar o cuidado em escala.
            </Typography>

            <Typography>
              <Typography component='span' variant='h5' fontWeight='bold'>R$ 144,90</Typography>
              <Typography component='span'> /mês</Typography>
            </Typography>
          </CardContent>

          <CardActions >
            <Button variant='contained' sx={{textTransform: 'normal'}} fullWidth>
              Assinar Plano
            </Button>
          </CardActions>

          <List>
            <ListItem>
              <ListItemText>Todos os recursos do Plano Premium</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Vínculos ilimitados</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Acesso a relatórios detalhados de saúde</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Notificações e lembretes personalizados.</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Suporte prioritário 24/7</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Armazenamento extendido</ListItemText>
            </ListItem>
          </List>
        </Card>
      </Stack>
    </Container>
  )
}