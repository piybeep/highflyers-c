import React from 'react';

export interface AuthButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
    isOutline?: boolean;
    size?: string;
}
