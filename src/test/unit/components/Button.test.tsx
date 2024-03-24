import { Button } from '@/components';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should render correctly', async () => {
    render(<Button dataTestId="click_me">click me</Button>);

    const button = await screen.findByTestId('click_me');

    expect(button).toBeInTheDocument();
  });
  it('should render the spinner if loading is true', async () => {
    render(
      <Button dataTestId="click_me" loading>
        click me
      </Button>
    );

    const button = await screen.findByTestId('click_me');
    const spinner = await screen.findByTestId('spinner');

    expect(button).toBeInTheDocument();
    expect(spinner).toBeInTheDocument();
  });
});
