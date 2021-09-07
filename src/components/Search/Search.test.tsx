import { render, screen } from '@testing-library/react';

import { Search } from './Search';

test('search section renders', async () => {
    render(<Search />);
    const inputElement = await screen.findByPlaceholderText(/search a topic.../i);
    expect(inputElement).toBeInTheDocument();
});
