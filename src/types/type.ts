import { SxProps, TextFieldVariants, Theme, } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, ForwardRefExoticComponent, HTMLInputTypeAttribute, Key, KeyboardEventHandler, ReactNode, RefAttributes } from "react";
import { NavLinkProps, To } from "react-router-dom";

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
    component?: ForwardRefExoticComponent<NavLinkProps & RefAttributes<HTMLAnchorElement>>
    to?: To | undefined;
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
    sx?: SxProps<Theme> | undefined;
    onChange?: ChangeEventHandler<Element> | undefined;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    onFocus?: FocusEventHandler<Element> | undefined;
    onInput?: FormEventHandler<Element> | undefined;
    startAdornment?: React.ReactNode | undefined;
    endAdornment?: React.ReactNode | undefined;
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

//Exports
export type {
    AppButtonProps,
    AppInputProps,
    AppInputAdornmentProps,

    RegisterService,
    LoginService
}