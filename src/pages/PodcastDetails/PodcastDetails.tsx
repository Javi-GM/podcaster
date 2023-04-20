import { useParams } from "react-router-dom";
import { usePodcasts } from "../../hooks/usePodcasts"

export function PodcastDetails() {
    const { id } = useParams();
    const { podcasts, error, loading } = usePodcasts();

    const podcast = podcasts.find(p => p.id == Number(id));

    if (!podcast) {
        return null;
    }

    if (loading) {
        return <p>Loading...</p>
    }

    const { name, author, image, summary } = podcast;

    return <>
        {name}
        {author}
        <img src={image} alt={`Cover art for ${name}`} />
        {summary}
    </>
}