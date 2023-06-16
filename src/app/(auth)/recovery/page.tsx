'use client'

import { Recovery, Submit } from "@/modules";
import { useState } from "react";

export default function page() {
    const [isSubmited, setIsSubmited] = useState(false)
    return (
        <>
            <Submit isSubmited={isSubmited}/>
            <Recovery isSubmited={isSubmited} setIsSubmited={setIsSubmited}/>
        </>
    );
};