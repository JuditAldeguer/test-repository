import react from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../js/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Repository/i);
  expect(linkElement).toBeInTheDocument();
});
