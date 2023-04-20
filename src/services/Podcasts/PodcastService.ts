import axios from "axios";

export const ITUNES_POPULAR_PODCASTS_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
export const ITUNES_PODCAST_DETAILS_URL =
    "https://itunes.apple.com/lookup?id={id}&media=podcast&entity=podcastEpisode&limit=20";

export const PodcastService = {
    getPodcasts: async () => {
        const response = await axios.get(ITUNES_POPULAR_PODCASTS_URL);
        return response.data;
    },
    getPodcastDetails: async (id: number) => {
        const response = await axios.get(
            ITUNES_PODCAST_DETAILS_URL.replace("{id}", id.toString())
        );
        return response.data;
    },
};
