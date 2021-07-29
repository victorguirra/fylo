import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    className?: string;
}

export function Input({ placeholder, className, ...rest } : IInputProps){
    return(
        <Container 
            placeholder={ placeholder }
            className={ className }
            { ...rest }
        />
    )
}