import { useQuery } from "react-query"
import { PodcastService } from "../services/Podcasts/PodcastService";
import { Episode } from "../interfaces/interfaces";

const parseDate = (date: string) => date.split('T')[0].split('-').reverse().join('/');

interface Params {
    episodes: Episode[]
}

export const usePodcastDetails = (id: number): Params => {
    const { data, } = useQuery(
        'podcastDetails', 
        () => PodcastService.getPodcastDetails(id)
    );

    const rawEpisodes = data?.results?.slice(1) || [];

    return {
        episodes: rawEpisodes.map((episode: any) => ({
            id: episode.trackId,
            title: episode.trackName,
            description: episode.description,
            date: parseDate(episode.releaseDate),
            durationInMilliseconds: episode.trackTimeMillis,
            audioUrl: episode.episodeUrl
        })),
    }
}