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
    disableRipple?: boolean | undefined;
    fontSize?: string | undefined;
    children: React.ReactNode;
}