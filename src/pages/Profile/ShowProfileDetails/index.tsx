import { Link as MUILink, Button, Modal, Stack, Typography } from "@mui/material"
import { grey, red } from "@mui/material/colors"
import { useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import User, { UserData } from "../../../services/User"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"

export const user_id = 14

export const ShowProfileDetails = () => {
  const [accountToDelete, setAccountToDelete] = useState<number | null>(null)
  const navigate = useNavigate()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['user_profile'],
    queryFn: () => User.show(user_id)
  })

  const user: UserData = data?.data

  const date = new Date(user?.birth_day)

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  const formated_data = `${day}/${month}/${year}`

  const deleteUser = useMutation({
    mutationFn: (user_id: number) => { return {} },

    onSuccess: (response) => {
      openDeleteModalConfirm(null)

      response.data.success ? navigate('/') : console.log('Não foi possivel apagar')
    },

    onError: (err) => console.log(err),
  })

  const openDeleteModalConfirm = (user_id: number | null) => {
    setAccountToDelete(user_id)
  }


  const handleDeleteAccount = (user_id: number) => {
    deleteUser.mutate()
  }

  return (
    <>
      {!isLoading && !isFetching && (
        <Stack spacing={5} maxWidth='md'>
          <Stack spacing={3}>
            <Typography>Bio</Typography>
            <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
              {user.profile?.bio}
            </Typography>
          </Stack>

          <Stack useFlexGap>
            <Typography>Informações de Conta</Typography>

            <Stack direction='row' flexWrap='wrap' spacing={3} useFlexGap padding={2} marginY={3} sx={{ bgcolor: grey[50] }}>
              <Stack>
                <Typography>Nome</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {user.name}
                </Typography>
              </Stack>

              <Stack>
                <Typography>CPF</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {user.cpf}
                </Typography>
              </Stack>

              <Stack>
                <Typography>Email</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {user.email}
                </Typography>
              </Stack>

              <Stack>
                <Typography>Nascimento</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {formated_data}
                </Typography>
              </Stack>

              <Stack>
                <Typography>Telefone</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  {user.telephone}
                </Typography>
              </Stack>
            </Stack>

            <Button component={Link} to={'atualizar'} variant='contained' sx={{ width: 'fit-content', alignSelf: 'end' }}>
              Atualizar Informações
            </Button>
          </Stack>

          <Stack spacing={3}>
            <Stack padding={2} spacing={3} useFlexGap flexWrap='wrap'>
              <Stack direction='row' spacing={3} alignItems={'center'}>
                <Typography>Senha</Typography>
              </Stack>

              <Stack direction='row' spacing={6} justifyContent={'space-between'}>
                <Typography sx={{ minWidth: 400, bgcolor: grey[200] }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  ****************
                </Typography>
              </Stack>
            </Stack>

            <Button component={Link} to={'atualizar/senha'} variant='contained' sx={{ width: 'fit-content', alignSelf: 'end' }}>
              Alterar Senha
            </Button>
          </Stack>

          <Stack spacing={3}>
            <Typography>Configurações de Conta: Pegar da Autenticação</Typography>

            <Stack direction='row' padding={2} spacing={2} useFlexGap flexWrap='wrap'>
              <Stack>
                <Typography>Tipo de Conta</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  Conta DO USUARIO
                </Typography>
              </Stack>

              <Stack>
                <Typography>Especialidade </Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  Se for medico ou Paciente
                </Typography>
              </Stack>

              <Stack>
                <Typography>CRM</Typography>

                <Typography sx={{ bgcolor: grey[200], whiteSpace: 'pre-wrap' }} paddingY={1.5} paddingX={2} borderRadius={2}>
                  Se for medico
                </Typography>
              </Stack>

            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Typography>Açòes de Conta</Typography>

            <Stack spacing={2} useFlexGap flexWrap='wrap'>
              <Stack spacing={2} padding={2} sx={{ bgcolor: red[100] }}>
                <Typography>Remover Conta</Typography>
                <Typography>ATENÇÃO, A REMOÇÃO DE CONTA NÃO PODE SER DESFEITA. POR ISSO, TENHA CERTEZA DESTA OPERAÇÃO</Typography>

                <Button
                  onClick={() => openDeleteModalConfirm(user.id)}
                  variant='contained'
                  color='error'
                  sx={{ width: 'fit-content' }}
                >
                  Remover sua Conta
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      )}

      {accountToDelete && (
        <Modal
          open={accountToDelete ? true : false}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          onClose={() => openDeleteModalConfirm(null)}
        >
          <Stack maxWidth={500} sx={{ bgcolor: 'white' }} padding={3} spacing={4}>
            <Typography>Tem certeza que deseja apagar sua Conta? Todos os dados e arquivos serão perdidos.</Typography>

            <Stack spacing={2} >
              <Button color='error' variant='contained' onClick={() => openDeleteModalConfirm(null)}>Cancelar</Button>
              <Button color='success' variant='contained' onClick={() => handleDeleteAccount(accountToDelete)}>Apagar Conta</Button>
            </Stack>
          </Stack>
        </Modal>
      )}
    </>
  )
}