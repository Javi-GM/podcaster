import { useQuery } from "react-query"

import { EpisodesRepository } from "../repositories/EpisodesRepository";

import { Episode } from "../models/Episode";


interface Response {
    episodes: Episode[]
}

export const usePodcastDetails = (podcastId: number): Response => {
    const { data, } = useQuery(
        'podcastDetails', 
        () => EpisodesRepository.getEpisodes(podcastId),
        {
            staleTime: 24 * 60 * 60 * 1000,
        }
    );

    return {
        episodes: data || [],
    }
}