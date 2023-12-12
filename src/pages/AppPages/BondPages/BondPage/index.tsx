import { 
    Box, 
    Paper,
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TablePagination, TableRow, 
    IconButton,
    Typography, 
    CircularProgress,
    Menu,
    MenuItem
} from "@mui/material";
import { ChangeEvent, MouseEvent, SetStateAction, useState } from "react";
import BondService from '../../../../services/Bond';
import { MoreVert } from '@mui/icons-material';
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { BondData, ListBond, BondTableColumn } from "../../../../types/type";
import { useCurrentUserContext } from "../../../../hooks/CurrentUserContext";

const columns: readonly BondTableColumn[] = [
    { 
        id: 'bondId', 
        label: 'ID do vínculo',
        align: 'center',
    },
    {
        id: 'userTo',
        label: 'Vinculado a',
        align: 'center',
    },
    {
        id: 'userToRole',
        label: 'Cargo',
        align: 'center',
    },
    {
        id: 'bondDate',
        label: 'Data do vínculo',
        align: 'center',
    },
    {
        id: 'bondStatus',
        label: 'Status do vínculo',
        align: 'center',
    },
    {
        id: 'actions',
        label: 'Ações',
        align: 'center'
    }  
];
  

function createData({bondId, userTo, userFrom, userToRole, bondDate, bondStatus, actions }: BondData): BondData {
    return { bondId, userTo, userFrom, userToRole, bondDate, bondStatus, actions };
}
  
export function BondPage({ query }: ListBond) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showActions, setShowActions] = useState<boolean>(false);
    const [status, setShowStatus] = useState<number>(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedItem, setSelectedItem] = useState(null);
    const currentUser = useCurrentUserContext();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['bond', (page + 1)],
    
        queryFn: () => 
            BondService.index({
                filter: {
                    created_by: query?.auth_user,
                    bond: query?.bond_id
                },
                paginate: {
                    skip: (((page + 1) - 1) * rowsPerPage),
                    take: rowsPerPage
                }
            })
    })

    const handleChangePage = (e: unknown, newPage: number) => {
        setPage(newPage)
        refetch();
    }

    /*   const [state, setState] = useState<State>({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            message: ''
        });
        const { vertical, horizontal, message, open } = state;
        */

        // setState({ vertical: 'top', horizontal: 'center', message: 'Error', open: true });

    /*    const handleClose = () => {
            setState({ ...state, open: false });
        };
    */
    const result = data?.data;
    const rows: BondData[] = [];
    
    const handleClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>, item: any) => {
        setAnchorEl(e.currentTarget);
        setSelectedItem(item);
        setShowActions(Number(currentUser?.user_id) !== item.to_user || item.status_id === 2 ? false : true);
        setShowStatus(item.status_id === 4 ? 4 : (item.status_id === 2 ? 2 : 1))
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedItem(null);
    };

    const handleUpdateBond = async (e) => {
        const status_id = e.target.innerText.toLowerCase() === 'aceitar' ? 2 : (e.target.innerText.toLowerCase() === 'desvincular' ? 4 : 1);
        const bond_id = Number(e.target.parentElement.id);
        const bond = await BondService.edit({bond_id, status_id});

        if(bond?.status === 200 && bond?.data) {
            if(status_id === 2) {
                setShowStatus(status_id)
            } else {
                setShowStatus(status_id)
            }

            setShowActions(!showActions);
            
            //setState({ vertical: 'top', horizontal: 'center', message: result?.message, open: true });

            refetch();
            return;
        }  
    }
   
    result?.map((el) => {
        rows.push(
            createData(
                {
                    bondId: el.id,
                    userTo: el.to.name, 
                    userFrom: el.from.name,
                    userToRole: el.to_role.id, 
                    bondDate: moment(el.createdAt).format('DD-MM-YYYY'),
                    bondStatus: el.status_id,
                    actions: 
                    <IconButton
                        color="inherit"
                        aria-label="notifications button"
                        onClick={(e) => handleClick(e, el)}
                        >
                        <MoreVert />
                    </IconButton>
                }
            ),
        )
    });

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>   
            <Typography typography='h1' fontSize='1.75rem' color='#00000077' mb={6}>Meus vínculos</Typography>

            {
                isLoading ? 
      
                    <Box>
                        <CircularProgress />
                    </Box>
                :
                    <Paper sx={{ width: '100%', overflow: 'hidden' }} id='table'>
                        <TableContainer sx={{ maxHeight: 590 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                            sx={{backgroundColor: '#C6C6C6'}}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, i) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                                {
                                                    <>
                                                        <TableCell align='center' id={String(row.bondId)}>{row.bondId}</TableCell>  
                                                        {
                                                            row.userTo ? 
                                                            <TableCell align='center'>{row.userTo}</TableCell>
                                                            :
                                                            <TableCell align='center'>{row.userFrom}</TableCell>
                                                        }
                                                        <TableCell align='center'>{row.userToRole}</TableCell>  
                                                        <TableCell align='center'>{row.bondDate}</TableCell>  
                                                        <TableCell align='center'>{row.bondStatus === 1 ? 'Pendente' : (row.bondStatus === 2 ? 'Aceito' : (row.bondStatus === 3 ? 'Recusado' : 'Desvinculado') )}</TableCell>  
                                                        <TableCell align='center'>{row.actions}</TableCell>
                                                    </>
                                                }
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>    
            }

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                <Box id={String(selectedItem?.id)}>
                    {showActions && status !== 4 && <MenuItem onClick={handleUpdateBond} disabled={showActions ? false : true}>Aceitar</MenuItem>}
                    {showActions && status === 4 && <MenuItem onClick={handleUpdateBond} disabled={showActions ? false : true}>Enviar novamente</MenuItem>}
                    <MenuItem onClick={handleUpdateBond} disabled={status === 2 ? false : true}>Desvincular</MenuItem>
                </Box>
            </Menu>
        </>
    )
}