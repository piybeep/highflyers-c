import classNames from "classnames";
import Image from "next/image";

import { LogoProps } from "./Logo.types";
import s from './Logo.module.scss'

import bird from '../../../public/svg/logo/bird.svg'
import nameCompany from '../../../public/svg/logo/nameCompany.svg'

export function Logo({ position = 'column' }: LogoProps) {
    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__column]: position == 'column',
            [s.wrapper__row]: position == 'row'
        })}>
            <Image className={s.wrapper__img} src={bird} alt={"Картинка"} />
            <Image className={s.wrapper__img} src={nameCompany} alt={"Картинка"} />
        </div>
    );
};