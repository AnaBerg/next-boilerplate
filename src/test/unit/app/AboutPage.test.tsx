import { render, screen } from '@testing-library/react';

import About from '@/app/about/page';

describe('About Page', () => {
  it('should render correctly', async () => {
    render(<About />);

    const aboutPageText = await screen.findByText('About Page');
    const linkText = await screen.findByText('Go to Home Page');

    expect(aboutPageText).toBeInTheDocument();
    expect(linkText).toBeInTheDocument();
  });
});
