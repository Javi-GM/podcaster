import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, within } from '@testing-library/react';
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

it("should show a list of episodes on a table", async () => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: ["/podcast/1535809341"],
    })

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider >
    );

    const episodes = await screen.findAllByRole("row");
    const table = await screen.findByRole("table");

    const row = within(table).getAllByRole("row")[1];
    const title = within(row).getAllByRole("cell")[0];
    const date = within(row).getAllByRole("cell")[1];
    const duration = within(row).getAllByRole("cell")[2];

    expect(episodes).toHaveLength(21);
    expect(title).toHaveTextContent("Episode 619 | \"Hate to be Frank\"");
    expect(date).toHaveTextContent("19/04/2023");
    expect(duration).toHaveTextContent("02:49:52");
})

it("should show a description of the episode", async () => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: ["/podcast/1535809341/episodes/1000609597323"],
    })

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider >
    );

    const description = "The JBP starts this episode by recapping Coachella (26:45) and giving their thoughts on Frank Ocean’s performance and what went wrong with the set (30:26). Ice recaps the Lil Wayne concert he attended (55:55), Jonathan Majors PR & management teams have severed ties (1:11:25), and the gang has some updates on the YSL RICO case (1:29:54). Also, an A.I. version of a Drake & Weeknd song was leaked (1:42:46), Part of the Show (1:57:05), the NBA playoffs (2:16:22), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Dende - “Block Me”\n Ice | Mozzy - “FREE ALL THE LIFERS”\n Parks | Agony Aka Southside Tone - “Ricks Story”\n Ish | Maeta - “S(EX) [Sped Up]”\n Melyssa | Satin Jackets & Panama - “Back to Me”\n QueenzFlip | Stack Bundles - “Drunk or High” \n  "

    const descriptionElement = await screen.findByText(description);

    expect(descriptionElement).toBeVisible();
});

it("should show a player to play the episode", async () => {
    const queryClient = new QueryClient();

    const router = createMemoryRouter(routes, {
        initialEntries: ["/podcast/1535809341/episodes/1000609597323"],
    })

    render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider >
    );


    const player = await screen.findByRole("audio");

    expect(player).toBeVisible();
});