
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
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Podcaster</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
