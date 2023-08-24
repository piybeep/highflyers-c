import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {
    isPassword?: boolean;
    isPlaceholder?: boolean;
    isBordered?: boolean;
    isEdit?: boolean;
    inputType?: string;
}
