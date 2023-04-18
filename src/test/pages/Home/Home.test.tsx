import { render, screen } from '@testing-library/react';
import { Home } from '../../../pages/Home/Home';

it("should render home page with the name of the app", () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: "Podcaster", level: 1 });
    expect(title).toBeVisible();
});

it("should show 100 most popular podcast from Apple Podcasts", () => {
    render(<Home />);
    const podcastsSection = screen.getByRole(
        "region",
        { name: /Most popular podcasts on Apple Podcasts/i }
    );
    const podcasts = podcastsSection.querySelectorAll("article");
    expect(podcasts).toHaveLength(100);
});