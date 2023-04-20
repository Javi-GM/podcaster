import { rest } from "msw";
import {
    ITUNES_POPULAR_PODCASTS_URL,
    ITUNES_PODCAST_DETAILS_URL,
} from "../services/Podcasts/PodcastService";
import podcasts from "./podcasts.json";
import podcastDetails from "./podcastDetails.json";

export const handlers = [
    rest.get(ITUNES_POPULAR_PODCASTS_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(podcasts));
    }),
    rest.get(
        ITUNES_PODCAST_DETAILS_URL.replace("{id}", "1535809341"),
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(podcastDetails));
        }
    ),
];
