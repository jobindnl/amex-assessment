import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

// Custom render function to include user event setup
export function renderWithUser(ui: ReactElement) {
  return {
    user: userEvent, // Initializes user interactions
    ...render(ui),          // Standard RTL render results (getByText, etc.)
  };
}