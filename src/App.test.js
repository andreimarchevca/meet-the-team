import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tretton text', () => {
  render(<App />);
  const linkElement = screen.getByText(/tretton37/i);
  expect(linkElement).toBeInTheDocument();
});
