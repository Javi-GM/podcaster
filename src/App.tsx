
import styled from "styled-components";
import { PodcastEpisodeDetails } from "./pages/PodcastDetails/PodcastEpisodeDetails";
import { PodcastEpisodesList } from "./pages/PodcastDetails/PodcastEpisodesList";
import { Home } from "./pages/Home/Home"
import { PodcastDetails } from "./pages/PodcastDetails/PodcastDetails";
import GlobalStyles from "./styles/globalStyles"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Title>Podcaster</Title>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App

const Title = styled.h1`
  margin-bottom: 1.75rem;
  font-size: 1.275rem;
`;

const Layout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
