import { render, screen, within } from '@testing-library/react';
import { Home } from '../../../pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

it("should render home page with the name of the app", () => {
    const queryClient = new QueryClient();

    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);
    const title = screen.getByRole("heading", { name: "Podcaster", level: 1 });
    expect(title).toBeVisible();
});

it("should show 100 most popular podcast from Apple Podcasts", async () => {
    const queryClient = new QueryClient();

    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);

    const podcastsSection = await screen.findByRole(
        "region",
        { name: /Most popular podcasts on Apple Podcasts/i }
    );

    const podcasts = await screen.findAllByRole("article", {}, { container: podcastsSection });

    expect(podcasts).toHaveLength(100);
})

it("podcasts should have a title, image and author", async () => {
    const queryClient = new QueryClient();

    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);

    const podcasts = await screen.findAllByRole("article");
    const podcast = podcasts[0];

    const name = await within(podcast).findByRole("heading", { level: 3 });
    const author = await within(podcast).findByText("The Joe Budden Network");
    const image = await within(podcast).findByRole("img");

    expect(name).toHaveTextContent("The Joe Budden Podcast");
    expect(author).toBeVisible();
    expect(image).toBeVisible();
});