import { MATERIALS_LIST } from "@/constants";

import { Profile } from "@/modules";

export default function page() {

    const res = MATERIALS_LIST

    return (
        <>
            <Profile materials={res} />
        </>
    );
};