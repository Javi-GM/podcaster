import axios from "axios";

export const ITUNES_POPULAR_PODCASTS_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const PodcastService = {
    getPodcasts: async () => {
        const response = await axios.get(ITUNES_POPULAR_PODCASTS_URL);
        return response.data;
    },
};
