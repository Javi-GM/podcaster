import { render, screen } from '@testing-library/react';
import App from './App';

it("render hello word", () => {
    render(<App />);
    const message = screen.getByText("Hello world");
    expect(message).toBeVisible();
});