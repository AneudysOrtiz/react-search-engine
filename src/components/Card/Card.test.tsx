import { Card } from './Card';
import { render } from '@testing-library/react';

describe('<Card/>', () => {
    const props = {
        url: "https://www.facebook.com/login/",
        title: "Log into Facebook | Facebook",
        description: "Log into Facebook to start sharing and connecting with your friends, family, and people you know.",
        source: "Google"
    };

    it('should render image passed by props', async () => {
        const { getByTestId } = render(<Card {...props} />);
        const image = getByTestId('image');
        expect(image).toBeInTheDocument();
    });

    it('should render title and match with props', async () => {
        const { getByTestId } = render(<Card {...props} />);
        const title = getByTestId('title');
        expect(title).toHaveTextContent(props.title);
    });

    it('should render description and match with props', async () => {
        const { getByTestId } = render(<Card {...props} />);
        const description = getByTestId('description');
        expect(description).toHaveTextContent(props.description);
    });

    it('should render url and match with props', async () => {
        const { getByTestId } = render(<Card {...props} />);
        const url = getByTestId('url');
        expect(url).toHaveTextContent(props.url);
    });
})