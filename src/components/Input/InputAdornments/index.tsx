/* import { FormControl, Input, InputLabel, InputAdornment, IconButton, OutlinedInput, FilledInput } from "@mui/material";
import { AppInputAdornmentsProps } from "../../../types/type";

export function AppInputAdornments({
    id = '', 
    variant = 'outlined',
    label = '', 
    edge = 'end',
    color = 'primary', 
    type = 'text', 
    element,
    position = 'end',
    inputAdornment = '',
    value,
    onKeyDown,
    onChange,
    isFullWidth = false,
    handleClick = () => {}, 
    handleMouseDown = () => {}
}: AppInputAdornmentsProps) {
    return (
        <FormControl variant={variant} fullWidth={isFullWidth} component='form'>
            <InputLabel htmlFor={id}>{label}</InputLabel>
                {
                    variant === 'outlined' ? 
                        <OutlinedInput
                            id={id}
                            type={type}
                            color={color}
                            value={value}
                        
                            onKeyDown={onKeyDown}
                            autoComplete="off"
                            onChange={onChange}
                            startAdornment={
                                inputAdornment === 'start' &&
                                <InputAdornment position={position}>
                                    <IconButton
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                                inputAdornment === 'end' &&
                                <InputAdornment position={position}>
                                    <IconButton   
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                        />
                    : variant === 'filled' ?
                        <FilledInput
                            id={id}
                            type={type}
                            color={color}
                            value={value}
                            onKeyDown={onKeyDown}
                            onChange={onChange}
                            autoComplete="off"
                            startAdornment={
                                inputAdornment === 'start' &&
                                <InputAdornment position={position}>
                                    <IconButton
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                                inputAdornment === 'end' &&
                                <InputAdornment position={position}>
                                    <IconButton
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                        />
                    :
                        <Input
                            id={id}
                            type={type}
                            color={color}
                            value={value}
                            onKeyDown={onKeyDown}
                            onChange={onChange}
                            autoComplete="off"
                            startAdornment={
                                inputAdornment === 'start' &&
                                <InputAdornment position={position}>
                                    <IconButton
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            endAdornment={
                                inputAdornment === 'end' &&
                                <InputAdornment position={position}>
                                    <IconButton
                                        onClick={handleClick}
                                        onMouseDown={handleMouseDown}
                                        edge={edge}
                                        sx={{marginRight: '.25rem'}}
                                        size='small'
                                    >
                                        {element}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label={label}
                        />
                }
        </FormControl>
    )
} */