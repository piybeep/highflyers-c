import { ComponentProps } from "react";

export interface HeaderButtonProps extends ComponentProps<'button'> {
    text: string,
    isActive: boolean
}