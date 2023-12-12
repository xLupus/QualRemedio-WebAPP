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
    CircularProgress
} from "@mui/material";
import { ReactNode, useState } from "react";
import BondService from '../../../../services/Bond';
import { MoreVert } from '@mui/icons-material';
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

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
  
export function ListBondPage({ actions, query }: ListBond) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['bond', (page + 1)],
    
        queryFn: () => 
            BondService.index({
                filter: {
                    created_by: query?.auth_user,
                    bond: query?.bond_id
                }, //TODO - Pegar do Storage
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
                >
                    <MoreVert />
                </IconButton>
            ),
        )
    });

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1}>
                                                {
                                                    <>
                                                        <TableCell key={1} align='center'>{row.bondId}</TableCell>  
                                                        <TableCell key={2} align='center'>{row.userTo}</TableCell>  
                                                        <TableCell key={3} align='center'>{row.userToRole}</TableCell>  
                                                        <TableCell key={4} align='center'>{row.bondDate}</TableCell>  
                                                        <TableCell key={5} align='center'>{row.bondStatus === 1 ? 'Pendente' : (row.bondStatus === 2 ? 'Aceito' : 'Recusado' )}</TableCell>  
                                                        <TableCell key={6} align='center'>{row.actions}</TableCell>
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
        </>
    )
}