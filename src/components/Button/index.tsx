import { StyledEngineProvider } from '@mui/material/styles';
import { AppButtonProps } from '../../types/type';
import { Button } from "@mui/material";
import '../../style.css';

export function AppButton({ id, key, variant, height, width, color, backgroundColor, boxShadow, fontSize, disableRipple, className, children }: AppButtonProps) {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Button variant={variant} className={className} sx={{ height, width, color, backgroundColor, fontSize, boxShadow, padding: 1.5, borderRadius: '0.25rem'}} id={id?.toString()} key={key} disableRipple={disableRipple}>
                    {children}
                </Button>
            </StyledEngineProvider>
        </>
    )
}