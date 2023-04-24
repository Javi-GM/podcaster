import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../App";

export const initTestEnvironment = (url: string) => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: [url],
    });

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};
