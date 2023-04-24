import { screen, within } from '@testing-library/react';
import { initTestEnvironment } from '../../testEnvironment';

it("should show details of a podcast such as title, author, image and summary", async () => {
    initTestEnvironment('/podcast/1535809341');

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
    initTestEnvironment('/podcast/1535809341')

    const episodes = await screen.findByText("Episodes: 20");

    expect(episodes).toBeVisible();
});

it("should show a list of episodes on a table", async () => {
    initTestEnvironment('/podcast/1535809341')

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
    initTestEnvironment('/podcast/1535809341/episodes/1000609597323');

    const startOfDescription = `The JBP starts this episode by recapping Coachella`;
    const partOfTheDescriptionRegex = new RegExp(startOfDescription, "i");

    const description = await screen.findByText(partOfTheDescriptionRegex);

    expect(description).toBeVisible();
});

it("should show a player to play the episode", async () => {
    initTestEnvironment('/podcast/1535809341/episodes/1000609597323');

    const player = await screen.findByRole("audio");

    expect(player).toBeVisible();
});