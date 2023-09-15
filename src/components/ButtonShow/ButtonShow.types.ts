import { ComponentProps } from "react";

export interface ButtonShowProps extends ComponentProps<'button'> {
    isShow: boolean
}