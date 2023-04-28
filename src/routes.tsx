import { Home } from "./pages/Home/Home";
import { PodcastDetails } from "./pages/PodcastDetails/PodcastDetails";
import { PodcastEpisodeDetails } from "./pages/PodcastDetails/PodcastEpisodeDetails";
import { PodcastEpisodesList } from "./pages/PodcastDetails/PodcastEpisodesList";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/podcast/:id",
        element: <PodcastDetails />,
        children: [
            {
                path: "/podcast/:id",
                element: <PodcastEpisodesList />,
            },
            {
                path: "/podcast/:id/episodes/:episodeId",
                element: <PodcastEpisodeDetails />,
            },
        ]
    }
];