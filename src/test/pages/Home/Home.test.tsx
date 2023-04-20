import { render, screen, within } from '@testing-library/react';
import { Home } from '../../../pages/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent from '@testing-library/user-event';

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

it("should filter podcasts by name", async () => {
    const queryClient = new QueryClient();

    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);

    const filter = await screen.findByRole("textbox", { name: /Filter podcasts by name or author/i });
    await userEvent.type(filter, "The Joe Budden Podcast");
    const podcasts = await screen.findAllByRole("article");

    expect(podcasts).toHaveLength(1);
});

it("should filter podcasts by author", async () => {
    const queryClient = new QueryClient();

    render(<QueryClientProvider client={queryClient}><Home /></QueryClientProvider>);

    const filter = await screen.findByRole("textbox", { name: /Filter podcasts by name or author/i });
    await userEvent.type(filter, "The Joe Budden Network");
    const podcasts = await screen.findAllByRole("article");

    expect(podcasts).toHaveLength(1);
});