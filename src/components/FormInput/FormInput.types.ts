import { ComponentProps } from 'react';

export interface FormInputProps extends ComponentProps<'input'> {
    placeholder: string;
    icon: 'name' | 'email' | 'question';
    type?: 'text' | 'email';
}
