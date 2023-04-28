import { rest } from "msw";
import { ITUNES_POPULAR_PODCASTS_URL } from "../repositories/PodcastsRepository";
import podcasts from "./podcasts.json";
import podcastDetails from "./podcastDetails.json";
import { ITUNES_PODCAST_DETAILS_URL } from "../repositories/EpisodesRepository";

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