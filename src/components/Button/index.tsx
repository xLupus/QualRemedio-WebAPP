import { StyledEngineProvider } from '@mui/material/styles';
import { AppButtonProps } from '../../types/type';
import { Button } from "@mui/material";
import '../../style.css';

export function AppButton({ 
    id, 
    key, 
    variant, 
    height, 
    width, 
    color = '#00000077',
    backgroundColor = 'none',
    boxShadow, 
    fontSize,
    display, 
    flexDirection, 
    justifyContent,
    isRippleDisabled,
    isFullWidth = true,
    textTransform = 'none',
    className, 
    children
}: AppButtonProps) {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Button 
                    variant={variant} 
                    className={className} 
                    sx={{ 
                        height,
                        width, 
                        color, 
                        backgroundColor, 
                        fontSize, 
                        boxShadow, 
                        display, 
                        flexDirection,
                        justifyContent,
                        padding: 1.5,
                        borderRadius: '0.25rem',
                        lineHeight: 'normal',
                        textTransform
                    }}
                    id={id?.toString()} 
                    key={key} 
                    disableRipple={isRippleDisabled}
                    fullWidth={isFullWidth}
                >
                    {children}
                </Button>
            </StyledEngineProvider>
        </>
    )
}