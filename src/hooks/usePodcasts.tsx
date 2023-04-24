import { useQuery } from "react-query"
import { PodcastService } from "../services/PodcastService";
import { Podcast } from "../interfaces/interfaces";

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
        () => PodcastService.getPodcasts(),
        // TODO: probably the react query config should be moved to a separate file
        {
            staleTime: 24 * 60 * 60 * 1000,
        }
    );

    return {
        error: isError,
        podcasts: data || [],
        loading: isLoading
    }
}