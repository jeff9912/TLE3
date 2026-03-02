import { render, screen } from '@testing-library/react';
import App from './App';

test('toont de gemeente naam in de header', () => {
  render(<App />);
  const heading = screen.getByText(/Gemeente Zuidplas/i);
  expect(heading).toBeInTheDocument();
});

test('toont navigatietabbladen Berichten en Nieuw bericht', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Berichten/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Nieuw bericht/i })).toBeInTheDocument();
});
