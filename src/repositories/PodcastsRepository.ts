import axios from "axios";

import { Feed } from "../types/applePodcastTypes";
import { Podcast } from "../models/Podcast";

// TODO: move
export const ITUNES_POPULAR_PODCASTS_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const PodcastsRepository = {
    getPodcasts: async (): Promise<Podcast[]> => {
        try {
            const response = await axios.get<{ feed: Feed }>(
                ITUNES_POPULAR_PODCASTS_URL
            );

            if (!response.data?.feed?.entry) {
                return [];
            }

            const { entry } = response.data.feed;

            return entry.map((e) => Podcast.fromApplePodcastEntry(e));
        } catch (error) {
            console.error(error);

            return [];
        }
    },
};
