import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { routes } from "../routes";

export const refreshCacheAndNavigateTo = (url: string) => {
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
