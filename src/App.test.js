import { render, screen } from '@testing-library/react'
import App from './App'

test('renders text DeannaIreland', () => {
  render(<App />)
  const nameElement = screen.getByText(/deanna ireland/i)
  expect(nameElement).toBeInTheDocument()
});