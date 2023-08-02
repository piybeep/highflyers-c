import { MATERIALS_LIST } from "@/constants";

import { Profile } from "@/modules";

export const metadata = {
    title: "Профиль",
    description: "Страница профиля",
};

export default function page() {

    const res = MATERIALS_LIST

    return (
        <>
            <Profile materials={res} />
        </>
    );
};