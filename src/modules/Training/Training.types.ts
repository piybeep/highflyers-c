import { PropsWithChildren } from 'react';

export interface TrainingProps extends PropsWithChildren {
    title: string;
    description: string;
    direction?: 'left' | 'right';
}
