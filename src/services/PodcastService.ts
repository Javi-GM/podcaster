import axios from "axios";
import { Entry, Feed } from "../interfaces/appleInterfaces";
import { Podcast } from "../interfaces/interfaces";

export const ITUNES_POPULAR_PODCASTS_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const PodcastService = {
    getPodcasts: async (): Promise<Podcast[]> => {
        try {
            const response = await axios.get<{ feed: Feed }>(
                ITUNES_POPULAR_PODCASTS_URL
            );
            if (response.data.feed.entry) {
                return response.data.feed.entry.map(entryToPodcast);
            }

            return [];
        } catch (error) {
            console.error(error);

            return [];
        }
    },
};

// TODO: probably should be in a separate file all this functions
const entryToPodcast = (entry: Entry): Podcast => ({
    id: Number(entry.id.attributes["im:id"]),
    author: entry["im:artist"].label,
    name: entry["im:name"].label,
    summary: entry.summary.label,
    image: entry["im:image"][2].label,
});
