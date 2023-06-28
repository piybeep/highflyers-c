import { PasswordChange } from "@/modules";

export default function page({ searchParams }: {searchParams: URLSearchParams}) {
    return (
        <PasswordChange userId={searchParams.id} resetCode={searchParams.code} />
    );
};