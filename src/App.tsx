
import styled from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { routes } from "./routes";

import GlobalStyles from "./styles/globalStyles"


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
