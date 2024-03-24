import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home Page', () => {
  it('should render correctly', async () => {
    render(<Home />);

    const homePageText = await screen.findByText('Home Page');
    const linkText = await screen.findByText('Go to About Page');

    expect(homePageText).toBeInTheDocument();
    expect(linkText).toBeInTheDocument();
  });
});
