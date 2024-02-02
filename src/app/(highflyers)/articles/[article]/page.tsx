import { ItemNavigation } from "@/modules";
import api from "@/utils/api";

export default async function ArticlePage({ params }: { params: any }) {
    const id = params.article
    const resArticle = await api.get(`articles/${id}?populate=*`).then(res => res.data.data)
    return (
        <>
            <ItemNavigation article={resArticle} />
        </>
    );
};