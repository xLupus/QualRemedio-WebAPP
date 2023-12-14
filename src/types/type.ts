import { SnackbarOrigin, SxProps, TextFieldVariants, Theme, } from "@mui/material";
import { 
    ChangeEventHandler, 
    Dispatch, 
    FocusEventHandler, 
    FormEventHandler, 
    ForwardRefExoticComponent, 
    HTMLInputTypeAttribute, 
    Key, 
    KeyboardEventHandler, 
    MouseEventHandler, 
    ReactNode, 
    RefAttributes,
    SetStateAction 
} from "react";
import { NavLinkProps, To } from "react-router-dom";
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

//Props
interface AppButtonProps {
    id?: string | undefined;
    key?: Key | null | undefined;
    variant: 'text' | 'outlined' | 'contained';
    type?: "button" | "submit" | "reset" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    className?: string | undefined;
    sx?: SxProps<Theme> |  undefined;
    disableRipple?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hidden?: boolean | undefined;
    href?: string | undefined;
    children: ReactNode | undefined;
    helperText?: ReactNode |  undefined;
    component?: ForwardRefExoticComponent<NavLinkProps & RefAttributes<HTMLAnchorElement>>
    disabled?: boolean | undefined;
    to?: To | undefined;
    onClick?: MouseEventHandler<Element> | undefined;
    'aria-label'?: string | undefined;
}

interface AppInputProps {
    id?: string;
    key?: Key | null | undefined;
    variant?: TextFieldVariants  | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning"  | undefined;
    label?: ReactNode | undefined;
    value?: unknown;
    type?: HTMLInputTypeAttribute | undefined;
    helperText?: string | ReactNode | undefined;
    size?: "small" | "medium" | undefined;
    placeholder?: string | undefined;
    fullWidth?: boolean | undefined;
    required?: boolean | undefined;
    autoComplete?: string | undefined;
    multiline?: boolean | undefined;
    maxRows?: number | undefined;
    'aria-label'?: string | undefined;
    min?: string | number | undefined;
    max?: string | number | undefined;
    sx?: SxProps<Theme> | undefined;
    error?: boolean | undefined;
    onChange?: ChangeEventHandler<Element> | undefined;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    onFocus?: FocusEventHandler<Element> | undefined;
    onInput?: FormEventHandler<Element> | undefined;
}

interface AppInputAdornmentProps {
    id?: string;
    key?: Key | null | undefined
    variant?: TextFieldVariants  | undefined;
    label?: ReactNode | undefined;
    edge?: false | "end" | "start" | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning"; 
    type?: HTMLInputTypeAttribute | undefined; 
    value?: string | undefined;
    element?: React.ReactNode | undefined;
    position?: "end" | "start" | undefined;
    inputAdornment?: string | undefined;
    size?: "small" | "medium" | undefined;
    placeholder?: string | undefined;
    fullWidth?: boolean | undefined;
    required?: boolean | undefined;
    autoComplete?: string | undefined;
    handleClick?: unknown;
    handleMouseDown?: unknown;
    min?: string | number | undefined;
    max?: string | number | undefined;
    error?: boolean | undefined;
    sx?: SxProps<Theme> | undefined;
    onChange?: ChangeEventHandler<Element> | undefined;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    onFocus?: FocusEventHandler<Element> | undefined;
    onInput?: FormEventHandler<Element> | undefined;
    startAdornment?: React.ReactNode | undefined;
    endAdornment?: React.ReactNode | undefined;
    'aria-label'?: string | undefined;
}

interface AppInputSelectProps {
    id?: string;
    key?: Key | null | undefined
    variant?: TextFieldVariants  | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning"; 
    size?: "small" | "medium" | undefined;
    message?: string | undefined;
    type?: HTMLInputTypeAttribute | undefined; 
    value?: string | undefined;
    fullWidth?: boolean | undefined;
    required?: boolean | undefined;
    autoComplete?: string | undefined;
    handleClick?: unknown;
    handleMouseDown?: unknown;
    error?: boolean | undefined;
    sx?: SxProps<Theme> | undefined;
    children: ReactNode;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    onFocus?: FocusEventHandler<Element> | undefined;
    onInput?: FormEventHandler<Element> | undefined;
}

interface AppCardProps {
    key?: Key | null | undefined
    children: ReactNode | undefined;
    sx?: SxProps<Theme> | undefined;
}
/* 
interface AppSnackBarProps {
    key?: Key | null | undefined;
    sx?: SxProps<Theme> |  undefined;
    open: boolean;
    onClose?: MouseEventHandler<Element> | undefined;
    autoHideDuration?: number | undefined;
    message: string;

}
 */
//Services
interface RegisterService {
    name: string;
    email: string;
    password: string;
    cpf: string;
    telephone: string;
    birth_day: string | Date;
    account_type: number;
  
    crm_state?: string | undefined;
    crm?: string | undefined;
    specialty_name?: string | undefined;
}

interface RegisterAccountService {
    name: string;
    cpf: number;
    birth_day: Date;
    telephone: string;
    crm_state?: string;
    specialty_name?: string;
    crm?: string;
    doc?: string;
}

interface LoginService {
    email: string;
    password: string;
    role: number;
}

interface CreateBond {
    email: string;
    role: string;
}

interface StoreBond {
    user_to_id: number;
    user_to_role_id: number;
}

interface EditBond {
    bond_id: number;
    status_id: number;
}

interface RegisterCreatePassword {
    password: string;
    confirm_password: string;
}

interface BondData {
    bondId: number;
    userTo?: string | undefined;
    userFrom?: string | undefined;
    userToRole: number;
    bondDate: string;
    bondStatus: number;
    actions: ReactNode;
}

interface BondTableColumn {
    id: 'bondId' | 'userFrom' | 'userFromRole' | 'userTo' | 'userToRole' | 'bondDate' | 'bondStatus' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'left' | 'right' | 'center';
    format?: (value: number) => string;
}
  
    
interface ListBond {
    actions?: boolean,

    query?: {
        auth_user?: number,
        bond_id?: number
    }
}
  
interface IndexBondParams {
    filter?: {
      created_by?: number,
      bond?: number
      status?: number
    },
    paginate?: {
      skip: number,
      take: number
    },
  
}
interface RegisterMailVerification {
    email: string;
}
interface Mail {
    email?: string;
    urlContext?: string;
    token?: string | undefined;
}

//Components
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface State extends SnackbarOrigin {
    open: boolean;
    message: any;
}

//Auth
interface LoginContextType {
    currentAccountType: string | null;
    setCurrentAccountType: Dispatch<SetStateAction<string>>;
}

interface RegisterContextType {
    registerUserCredentials: RegisterType[];
    setRegisterUserCredentials: Dispatch<SetStateAction<RegisterType[]>>;
}

//Array data
interface RegisterType {
    name: string;
    value: string;
}

//Exports
export type {
    AppButtonProps,
    AppInputProps,
    AppInputAdornmentProps,
    AppInputSelectProps,
    AppCardProps,

    RegisterService,
    LoginService,
    
    CreateBond,
    StoreBond,
    EditBond,
    ListBond,
    IndexBondParams,
    
    Mail,
    RegisterCreatePassword,
    RegisterMailVerification,
    RegisterAccountService,

    AppBarProps,
    State,
    BondData,
    BondTableColumn,

    LoginContextType,
    RegisterContextType,

    RegisterType
}