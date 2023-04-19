import { rest } from "msw";
import { ITUNES_POPULAR_PODCASTS_URL } from "../services/Podcasts/PodcastService";
import podcasts from "./podcasts.json";

export const handlers = [
    rest.get(ITUNES_POPULAR_PODCASTS_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(podcasts));
    }),
];
