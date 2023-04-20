import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import { PodcastDetails } from '../../../pages/PodcastDetails/PodcastDetails';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../../../App';

it("should show details of a podcast such as title, author, image and summary", async () => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: ["/podcast/1535809341"],
    })

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider >
    );

    const name = await screen.findByText("The Joe Budden Podcast");
    const author = await screen.findByText("by The Joe Budden Network");
    const img = await screen.findByRole("img");
    const summary = await screen.findByText("Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.");

    expect(name).toBeVisible();
    expect(author).toBeVisible();
    expect(img).toBeVisible();
    expect(summary).toBeVisible();
});

it("should show number of episodes", async () => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: ["/podcast/1535809341"],
    })

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider >
    );


    const episodes = await screen.findByText("Episodes: 20");

    expect(episodes).toBeVisible();
});