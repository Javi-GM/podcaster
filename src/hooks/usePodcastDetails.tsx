import { useQuery } from "react-query"
import { Episode } from "../interfaces/interfaces";
import { EpisodesService } from "../services/EpisodesService";

interface Response {
    episodes: Episode[]
}

export const usePodcastDetails = (id: number): Response => {
    const { data, } = useQuery(
        'podcastDetails', 
        () => EpisodesService.getEpisodes(id),
        {
            staleTime: 24 * 60 * 60 * 1000,
        }
    );

    return {
        episodes: data || [],
    }
}