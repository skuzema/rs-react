import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('ModalCard', () => {
  const mockProduct = {
    source: {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
    },
    author: 'ABC News',
    title:
      'Russian girl taken to orphanage after drawing anti-war picture leaves with mother, commissioner says',
    description:
      'A Russian girl who was sent to an orphanage after drawing an anti-war picture, for which her father was convicted for discrediting the armed forces, has been collected by her mother who has not lived with the family for at least seven years.',
    url: 'https://www.abc.net.au/news/2023-04-06/masha-alexei-moskalyov-ukraine-russia-drawing-orphanage-mother/102199368',
    urlToImage:
      'https://live-production.wcms.abc-cdn.net.au/24b658680a5c92a2e1c4a668784f654c?impolicy=wcms_crop_resize&cropH=366&cropW=650&xPos=0&yPos=18&width=862&height=485',
    publishedAt: '2023-04-06T09:59:38Z',
    content:
      'A Russian girl sent to an orphanage after drawing an anti-war picture, for which her father was convicted for discrediting the armed forces, has been collected by her mother who has not lived with th… [+3690 chars]',
  };

  test('renders without crashing', () => {
    render(<Card data={mockProduct} />);
  });
});
