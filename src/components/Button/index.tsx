import { StyledEngineProvider } from '@mui/material/styles';
import { AppButtonProps } from '../../types/type';
import { Button } from "@mui/material";

export function AppButton({ 
   children,
   ...props
}: AppButtonProps) {
    let defaultProps = {};

    if(props.sx) {
        defaultProps = {
            textTransform: 'textTransform' in props.sx ? props.sx.textTransform : 'none',
            color: 'color' in props.sx ? props.sx.color : '#00000077',
            boxShadow: 'boxShadow' in props.sx ? props.sx.boxShadow : 2,
            backgroundColor: 'backgroundColor' in props.sx ? props.sx.backgroundColor : '#BBBBBB',
            fontSize: 'fontSize' in props.sx ? props.sx.fontSize : '1rem',
            lineHeight: 'lineHeight' in props.sx ? props.sx.lineHeight : 'normal',
            borderRadius: 'borderRadius' in props.sx ? props.sx.borderRadius : '.25rem',
        }
    } else {
        defaultProps = {
            textTransform: 'none',
            color: '#00000077',
            boxShadow: 2,
            backgroundColor: '#BBBBBB',
            fontSize: '1rem',
            lineHeight: 'normal',
            borderRadius: '.25rem'
        }
    }

    props.sx = {...defaultProps, ...props.sx};

    return (
        <StyledEngineProvider injectFirst>
            <Button
                {...props}
            >
                {children}
            </Button>
        </StyledEngineProvider>
    )
}