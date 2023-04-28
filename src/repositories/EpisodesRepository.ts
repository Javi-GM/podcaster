import axios from "axios";

import { PodcastDetails } from "../types/applePodcastTypes";
import { Episode } from "../models/Episode";

export const ITUNES_PODCAST_DETAILS_URL =
    "https://itunes.apple.com/lookup?id={id}&media=podcast&entity=podcastEpisode&limit=20";

export const EpisodesRepository = {
    getEpisodes: async (id: number): Promise<Episode[]> => {
        try {
            const response = await axios.get<PodcastDetails>(
                ITUNES_PODCAST_DETAILS_URL.replace("{id}", id.toString())
            );

            if (!response.data?.results) {
                return [];
            }

            // first result is the podcast itself
            const results = response.data.results.slice(1);

            return results.map((r) => Episode.fromResult(r));
        } catch (error) {
            console.error(error);

            return [];
        }
    },
};
