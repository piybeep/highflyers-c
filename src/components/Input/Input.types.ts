import { ComponentProps } from 'react';
import { RegisterOptions } from 'react-hook-form/dist/types';

export interface InputProps extends ComponentProps<'input'> {
    isBordered?: boolean;
    name: string
    idUser: number
    initialValue?: string
    validation?: RegisterOptions
}
