import { useQuery } from "react-query"
import { PodcastService } from "../services/Podcasts/PodcastService";

interface Episode {

}

interface Params {
    episodes: Episode[]
}

export const usePodcastDetails = (id: number): Params => {
    const {
        data,
        isLoading,
        isError
    } = useQuery(
        'podcastDetails',
        () => PodcastService.getPodcastDetails(id)
    );

    // Slice to remove the first episode which is the podcast itself
    const rawEpisodes = data?.results?.slice(1) || [];

    return {
        episodes: rawEpisodes.map((episode: any) => ({
            title: episode.trackName
        })),
    }
}