import { useQuery } from "react-query"
import { PodcastsRepository } from "../services/PodcastsRepository";
import { Podcast } from "../types/domainTypes";

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
        () => PodcastsRepository.getPodcasts(),
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