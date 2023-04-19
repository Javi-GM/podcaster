import { useQuery } from "react-query"
import { PodcastService } from "../services/Podcasts/PodcastService";

interface Podcast {
    id: number;
    name: string;
    author: string;
    summary: string;
}

interface usePodcastResponse {
    error: boolean;
    podcasts: Podcast[];
    loading: boolean;
}

export const usePodcasts = (): usePodcastResponse => {
    const {
        data,
        isLoading,
        isError
    } = useQuery(
        'podcasts',
        () => PodcastService.getPodcasts()
    );

    return {
        error: isError,
        podcasts: data?.feed?.entry.map(p => ({
            id: p.id.attributes['im:id'],
            author: p['im:artist'].label,
            name: p['im:name'].label,
            summary: p.summary.label
        })) || [],
        loading: isLoading
    }
}