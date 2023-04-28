import axios from "axios";
import { PodcastDetails, Result } from "../types/applePodcastTypes";
import { Episode } from "../types/domainTypes";

export const ITUNES_PODCAST_DETAILS_URL =
    "https://itunes.apple.com/lookup?id={id}&media=podcast&entity=podcastEpisode&limit=20";

export const EpisodesRepository = {
    getEpisodes: async (id: number): Promise<Episode[]> => {
        try {
            const response = await axios.get<PodcastDetails>(
                ITUNES_PODCAST_DETAILS_URL.replace("{id}", id.toString())
            );
            if (response.data.results) {
                // first result is the podcast itself
                return response.data.results.slice(1).map(resultToEpisode);
            }

            return [];
        } catch (error) {
            console.error(error);

            return [];
        }
    },
};

const parseDate = (date: string) =>
    date.split("T")[0].split("-").reverse().join("/");

const resultToEpisode = (result: Result): Episode => ({
    id: result.trackId,
    title: result.trackName,
    description: result.description,
    date: parseDate(result.releaseDate),
    durationInMilliseconds: result.trackTimeMillis,
    audioUrl: result.episodeUrl,
});
