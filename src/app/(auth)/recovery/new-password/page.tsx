import { PasswordChange } from "@/modules";

export default function page({ searchParams }: {searchParams: {id: string, code: string}}) {
    return (
        <PasswordChange userId={searchParams.id} resetCode={searchParams.code} />
    );
};
