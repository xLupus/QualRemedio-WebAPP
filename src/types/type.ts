export interface AppButtonProps {
    id?: number;
    key?: number;
    variant: 'text' | 'outlined' | 'contained';
    className?: string | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
    height?: string | undefined;
    boxShadow?: number | string | undefined;
    width?: string | undefined;
    fontSize?: string | undefined;
    display?: string | undefined;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
    justifyContent?: string | undefined;
    isRippleDisabled?: boolean | undefined;
    children: React.ReactNode;
}