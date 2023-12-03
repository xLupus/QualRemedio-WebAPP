import { TextFieldVariants } from "@mui/material";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

//System Props
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
    variant?: TextFieldVariants  | undefined;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning";
    label?: string | undefined;
    value?: string | undefined;
    type?: string | undefined;
    helperText?: any;
    size?: "small" | "medium";
    onChange?: ChangeEventHandler<Element> | undefined;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    isFullWidth?: boolean | undefined;
    isRequired?: boolean | undefined;
}

/* 
interface AppInputAdornmentsProps {
    id?: string;
    variant?: TextFieldVariants  | undefined;
    label?: any;
    edge?: any;
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning"; 
    type?: string | undefined; 
    element?: React.ReactNode | undefined;
    position?: "end" | "start" | undefined;
    inputAdornment?: string | undefined;
    value?: string | undefined;
    onChange?: ChangeEventHandler<Element> | undefined;
    onKeyDown?: KeyboardEventHandler<Element> | undefined;
    isFullWidth?: boolean | undefined;
    isRequired?: boolean | undefined;
    handleClick: unknown;
    handleMouseDown: unknown;
    children: React.ReactNode;
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

interface LoginService {
    email: string;
    password: string;
    role: number;
}

export type {
    AppButtonProps,
    AppInputProps,
    RegisterService,
    LoginService
}