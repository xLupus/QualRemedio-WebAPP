import { Stack, Typography } from "@mui/material"
import { AppCard } from "../../components/Card"

export const DashboardHomePage = () => {

  return (
    <Stack maxWidth={'lg'} width='100%' spacing={6}>
      <AppCard sx={{ padding: 3 }}>
        <Typography>
          Bem-vindo ao HealthSync, sua solução completa para gerenciamento de consultas e prescrições médicas. Oferecemos uma abordagem integrada para simplificar o cuidado de saúde, garantindo eficiência e personalização em cada etapa do processo.
        </Typography>
      </AppCard>

      <AppCard sx={{ padding: 3 }}>
        <Stack spacing={2}>
          <Typography fontWeight='bold'>Atualizações e Novidades:</Typography>

          <Typography>
            Fique por dentro das últimas atualizações do HealthSync, [Nome do Usuário]. Agora com novas funcionalidades de lembretes personalizáveis para manter você e seus pacientes informados.
          </Typography>
        </Stack>
      </AppCard>

      <AppCard sx={{ padding: 3 }}>
        <Stack spacing={2}>
          <Typography fontWeight='bold'>Design Intuitivo:</Typography>

          <Typography>
            Explore seu dashboard, [Nome do Usuário], projetado para tornar a gestão médica fácil e intuitiva. Navegue sem esforço entre as seções para garantir que seu cuidado de saúde seja personalizado e eficiente.
          </Typography>
        </Stack>
      </AppCard>

      <AppCard sx={{ padding: 3 }}>
        <Stack spacing={4}>
          <Typography fontWeight='bold'>Funcionalidades Destaque</Typography>

          <Stack spacing={2}>
            <Typography fontWeight='bold'>Agendamento Simplificado:</Typography>

            <Typography>
              Marque consultas com facilidade, escolhendo horários convenientes.

            </Typography>

            <Typography fontWeight='bold'>Gerenciamento de Prescrições:</Typography>

            <Typography>
              Armazene e atualize prescrições médicas de forma organizada.
            </Typography>

            <Typography fontWeight='bold'>Colaboração Eficiente:</Typography>

            <Typography>
              Compartilhe informações e colabore com outros profissionais de saúde.
            </Typography>
          </Stack>
        </Stack>
      </AppCard>
    </Stack>
  )
}