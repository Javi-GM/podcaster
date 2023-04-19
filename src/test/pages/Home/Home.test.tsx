import { render, screen } from '@testing-library/react';
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

    const podcast = await screen.findByRole("article");
    const name = await screen.findByRole("heading", { level: 3 }, { container: podcast });
    const author = await screen.findByRole("heading", {}, { container: podcast });
    const image = await screen.findByRole("img", {}, { container: podcast });

    expect(name).toHaveTextContent("The Joe Budden Podcast");
    expect(author).toHaveTextContent("The Joe Budden Network");
    expect(image).toBeVisible();
});