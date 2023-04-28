import { useQuery } from "react-query"
import { Episode } from "../types/domainTypes";
import { EpisodesRepository } from "../repositories/EpisodesRepository";

interface Response {
    episodes: Episode[]
}

export const usePodcastDetails = (id: number): Response => {
    const { data, } = useQuery(
        'podcastDetails', 
        () => EpisodesRepository.getEpisodes(id),
        {
            staleTime: 24 * 60 * 60 * 1000,
        }
    );

    return {
        episodes: data || [],
    }
}