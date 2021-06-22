import { render, screen } from '@testing-library/react';
import ScreenOne from 'views/Home';

test('renders learn react link', () => {
  render(<ScreenOne />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
