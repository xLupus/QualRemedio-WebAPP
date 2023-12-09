import { SxProps, TextFieldVariants, Theme, } from "@mui/material";
import { ChangeEventHandler, Dispatch, FocusEventHandler, FormEventHandler, ForwardRefExoticComponent, HTMLInputTypeAttribute, Key, KeyboardEventHandler, MouseEventHandler, ReactNode, RefAttributes, SetStateAction } from "react";
import { NavLinkProps, To } from "react-router-dom";
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { FieldError } from "react-hook-form";

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
    to?: To | undefined;
    onClick?: MouseEventHandler<Element> | undefined;
}

interface AppInputProps {
    id?: string;
    key?: Key | null | undefined;
    variant?: TextFieldVariants  | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning"  | undefined;
    label?: ReactNode | undefined;
    value?: unknown;
    type?: HTMLInputTypeAttribute | undefined;
    helperText?: ReactNode | undefined;
    size?: "small" | "medium" | undefined;
    placeholder?: string | undefined;
    fullWidth?: boolean | undefined;
    required?: boolean | undefined;
    autoComplete?: string | undefined;
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
}

interface AppCardProps {
    key?: Key | null | undefined
    children: ReactNode | undefined;
    sx?: SxProps<Theme> | undefined;
}

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

interface LoginService {
    email: string;
    password: string;
    role: number;
}

//Components
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface LoginContextType {
    accountType: string | null;
    setAccountType: Dispatch<SetStateAction<string>>;
}

//Exports
export type {
    AppButtonProps,
    AppInputProps,
    AppInputAdornmentProps,
    AppCardProps,

    RegisterService,
    LoginService,

    AppBarProps,

    LoginContextType
}