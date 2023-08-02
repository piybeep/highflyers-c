'use client'

import { Recovery, Submit } from "@/modules";
import { useState } from "react";

export const metadata = {
    title: "Восстановление пароля - Highflyers",
};

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return (
        <>
            <Submit isSubmitted={isSubmitted} />
            <Recovery isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        </>
    );
};
