import { LoadingSpinner } from '@/components';
import { render, screen } from '@testing-library/react';

describe('LoadingSpinner', () => {
  it('should render correctly', async () => {
    render(<LoadingSpinner />);

    const spinner = await screen.findByTestId('spinner');

    expect(spinner).toBeInTheDocument();
  });
});
