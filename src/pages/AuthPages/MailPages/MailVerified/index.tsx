import { Box } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MailService from '../../../../services/Mail'

export function MailVerified() {
    const { emailToken } = useParams();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const handleVerifyMail = async () => {
            const result = await MailService.verify({ token: emailToken});

            if(result!.status === 200) setVerified(true);
        }

        if(!verified) handleVerifyMail();
    }, [verified, emailToken])
    
    return (
        verified ? <Navigate to='/auth/register/account-created' replace={true} /> : <Box>NOT FOUND</Box>
    )
}