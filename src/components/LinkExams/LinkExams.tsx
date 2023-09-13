import Link from "next/link";

import { LinkExamsProps } from "./LinkExams.types";
import s from './LinkExams.module.scss'

export function LinkExams({ link }: LinkExamsProps) {
    return (
        <Link className={s.link} href={link === 'ege' ? '/oge' : '/ege'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="8" viewBox="0 0 17 8" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7508 0.318574C12.0437 0.0256804 12.5186 0.0256804 12.8115 0.318574L15.9626 3.46973C16.2555 3.76262 16.2555 4.2375 15.9626 4.53039L12.8115 7.68155C12.5186 7.97444 12.0437 7.97444 11.7508 7.68155C11.4579 7.38865 11.4579 6.91378 11.7508 6.62089L13.6216 4.75006H1.56721C1.15299 4.75006 0.817208 4.41427 0.817208 4.00006C0.817208 3.58585 1.15299 3.25006 1.56721 3.25006H13.6216L11.7508 1.37923C11.4579 1.08634 11.4579 0.611467 11.7508 0.318574Z" fill="#666666" />
            </svg>
            {`Перейти к ${link === 'ege' ? 'ОГЭ' : 'ЕГЭ'}`}
        </Link>
    );
};