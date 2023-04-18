import { render, screen } from '@testing-library/react';
import { Home } from '../../../pages/Home/Home';

it("should render home page with the name of the app", () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: "Podcaster", level: 1 });
    expect(title).toBeVisible();
});