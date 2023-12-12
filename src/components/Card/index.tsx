import { Card } from "@mui/material"
import { AppCardProps } from "../../types/type"

export function AppCard({children, ...props}: AppCardProps) {
    let defaultProps = {};

    if(props.sx) {
        defaultProps = {
            color: 'color' in props.sx ? props.sx.color : '#00000077',
            boxShadow: 'boxShadow' in props.sx ? props.sx.boxShadow : 2,
            backgroundColor: 'backgroundColor' in props.sx ? props.sx.backgroundColor : '#f3f3f383',
            borderRadius: 'borderRadius' in props.sx ? props.sx.borderRadius : '0.375rem',
        }

        props.sx = {...defaultProps, ...props.sx};
    } else {
        defaultProps = {
            color: '#00000077',
            backgroundColor:'#F3F3F3',
            boxShadow: 2,
            borderRadius: '0.375rem'
        };

        props.sx = {...defaultProps};
    }

    return (
        <Card {...props} >
           {children}
        </Card>
    )
}