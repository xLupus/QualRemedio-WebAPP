import { StyledEngineProvider } from '@mui/material/styles';
import { AppButtonProps } from '../../types/type';
import { Button } from "@mui/material";

export function AppButton({ 
   children,
   ...props
}: AppButtonProps) {
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