import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders main home page', () => {
  render(<App />);

  const logoText = screen.getByText(/foodyfinder/i);
  expect(logoText).toBeInTheDocument();
});