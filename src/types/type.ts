import { SxProps, TextFieldVariants, Theme } from "@mui/material";
import { ChangeEventHandler, FocusEventHandler, FormEventHandler, HTMLInputTypeAttribute, Key, KeyboardEventHandler, ReactNode } from "react";

interface AppButtonProps {
    id?: number | string | undefined;
    key?: number;
    variant: 'text' | 'outlined' | 'contained';
    className?: string | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
    height?: string | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    boxShadow?: number | string | undefined;
    width?: string | undefined;
    fontSize?: string | undefined;
    display?: string | undefined;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
    justifyContent?: string | undefined;
    isRippleDisabled?: boolean | undefined;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana";
    isFullWidth?: boolean | undefined;
    children: React.ReactNode;
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

interface AppInputAdornmentsProps {
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

export type {
    AppButtonProps,
    AppInputProps,
    AppInputAdornmentsProps,

    RegisterService,
    LoginService
}