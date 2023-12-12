import Cookies from 'js-cookie'
import User, { UserData } from '../../services/User'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import { Button, Stack, Typography } from '@mui/material'
import { AppCard } from '../Card'
import { Link, NavLink } from 'react-router-dom'

export const ProfileInfo = () => {
  const user_id = Cookies.get('user_id')

  moment.locale('pt-br')

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['user_profile'],
    queryFn: () => User.show({id: Number(user_id)})
  })

  const user: UserData = data?.data

  return (
    <AppCard sx={{ height: 'fit-content', maxHeight: 600, maxWidth: 360, width: '100%' }} >
      <Stack width={360} padding={4} spacing={4} useFlexGap>
        <Stack>
          <Typography align='center'>{user?.name}</Typography>
        </Stack>

        <Stack flexWrap={'wrap'} spacing={3} useFlexGap paddingY={3} sx={{ borderTop: 1, borderBottom: 1 }}>
          <Stack>
            <Typography>E-mail: </Typography>
            <Typography>{user?.email}</Typography>
          </Stack>

          <Stack direction={'row'} spacing={5}>
            <Stack>
              <Typography>Idade: </Typography>
              <Typography>{moment().diff(user?.birth_day, 'years')} anos</Typography>
            </Stack>

            <Stack>
              <Typography>Telefone: </Typography>
              <Typography>{user?.telephone}</Typography>
            </Stack>
          </Stack>

          <Stack>
            <Typography>Data de Nascimento: </Typography>
            <Typography>{moment(user?.birth_day, "YYYY-MM-DD").format("DD-MM-YYYY")}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <Button variant='contained' component={NavLink} to='/users/bond/create'>
            Criar Vinculo
          </Button>

          <Button component={Link} to={'/consultations/create'} variant='contained'>
            Adicionar Consulta
          </Button>
        </Stack>
      </Stack>
    </AppCard>
  )
}