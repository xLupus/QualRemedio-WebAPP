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
import { ChangeEvent, ReactNode, useState } from "react";
import BondService from '../../../../services/Bond';
import { MoreVert } from '@mui/icons-material';
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Cookies from "js-cookie";

interface Column {
    id: 'bondId' | 'userFrom' | 'userFromRole' | 'userTo' | 'userToRole' | 'bondDate' | 'bondStatus' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
    format?: (value: number) => string;
}
  
const columns: readonly Column[] = [
    { 
            id: 'bondId', 
            label: 'ID',
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
  
interface Data {
    bondId: number;
    userTo: string;
    userToRole: number;
    bondDate: string;
    bondStatus: number;
    actions: ReactNode;
}
    
interface ListBond {
    actions?: boolean,

    query?: {
        auth_user?: number,
        bond_id?: number
    }
}
  
function createData(
    bondId: number,
    userTo: string,
    userToRole: number,
    bondDate: string,
    bondStatus: number,
    actions: ReactNode,
): Data {
    return { bondId, userTo, userToRole, bondDate, bondStatus, actions };
}
  
export function BondPage({ actions, query }: ListBond) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showActions, setShowActions] = useState<boolean>(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [selectedItem, setSelectedItem] = useState(null);

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
    const rows: Data[] = [];
    
    const handleClick = (event, item) => {
        setAnchorEl(event.currentTarget);
        setSelectedItem(item);
        setShowActions(Number(Cookies.get('user_id')) !== item.to_user ? false : true);
    };

    const handleClose = () => {
        setAnchorEl(null); // Fecha o Menu
        setSelectedItem(null); // Limpa o item selecionado
    };

    const handleUpdateBond = async (e) => {
        const status_id = e.target.innerText.toLowerCase() === 'aceitar' ? 2 : 3;
        const bond_id = Number(e.target.parentElement.id);

        const bond = await BondService.edit({bond_id, status_id});

        if(bond?.status === 200 && bond?.data) {
            setShowActions(!showActions);
            
            console.log(result)
            //setState({ vertical: 'top', horizontal: 'center', message: result?.message, open: true });

            return;
        }
        
        refetch();
    }

    result?.map((el) => {
        rows.push(
            createData(
                el.id,
                el.to.name, 
                el.to_role.id, 
                moment(el.createdAt).format('DD-MM-YYYY'), 
                el.status_id,
                <IconButton
                    color="inherit"
                    aria-label="notifications button"
                    onClick={(event) => handleClick(event, el)}
                >
                    <MoreVert />
                </IconButton>
            ),
        )
    });
console.log(result)
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
                                                        <TableCell align='center'>{row.userTo}</TableCell>  
                                                        <TableCell align='center'>{row.userToRole}</TableCell>  
                                                        <TableCell align='center'>{row.bondDate}</TableCell>  
                                                        <TableCell align='center'>{row.bondStatus === 1 ? 'Pendente' : (row.bondStatus === 2 ? 'Aceito' : 'Recusado' )}</TableCell>  
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
                {selectedItem && ( // Verifica se há um item selecionado para exibir o menu
                    <Box id={String(selectedItem.id)}>
                        {showActions &&  <MenuItem onClick={handleUpdateBond}>Aceitar</MenuItem>}
                        <MenuItem onClick={handleUpdateBond}>Desvincular</MenuItem>
                    </Box>
                )}
            </Menu>
        </>
    )
}