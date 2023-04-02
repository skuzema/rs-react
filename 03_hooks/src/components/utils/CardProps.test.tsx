import { TPArrayCard, TPCard, TPCardForm } from './CardProps';

describe('Types for card data', () => {
  test('TPArrayCard interface has data property of type Array<TPCardForm>', () => {
    const testData: TPArrayCard = {
      data: [
        {
          id: 1,
          author: 'John Doe',
          title: 'My Awesome Post',
          post: 'Lorem ipsum dolor sit amet',
          post_date: '2022-03-21',
          select: 'Option 1',
          check: true,
          gender: 'Male',
          image: 'http://example.com/image.jpg',
          img_file: new File([], 'image.jpg'),
        },
      ],
    };

    expect(testData.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining<TPCardForm>({
          id: expect.any(Number),
          author: expect.any(String),
          title: expect.any(String),
          post: expect.any(String),
          post_date: expect.any(String),
          select: expect.any(String),
          check: expect.any(Boolean),
          gender: expect.any(String),
          image: expect.any(String),
          img_file: expect.any(File),
        }),
      ])
    );
  });

  test('TPCard interface has data property of type TPCardForm', () => {
    const testData: TPCard = {
      data: {
        id: 1,
        author: 'John Doe',
        title: 'My Awesome Post',
        post: 'Lorem ipsum dolor sit amet',
        post_date: '2022-03-21',
        select: 'Option 1',
        check: true,
        gender: 'Male',
        image: 'http://example.com/image.jpg',
        img_file: new File([], 'image.jpg'),
      },
    };

    expect(testData.data).toEqual(
      expect.objectContaining<TPCardForm>({
        id: expect.any(Number),
        author: expect.any(String),
        title: expect.any(String),
        post: expect.any(String),
        post_date: expect.any(String),
        select: expect.any(String),
        check: expect.any(Boolean),
        gender: expect.any(String),
        image: expect.any(String),
        img_file: expect.any(File),
      })
    );
  });

  test('TPCardForm interface has all the required properties', () => {
    const testData: TPCardForm = {
      id: 1,
      author: 'John Doe',
      title: 'My Awesome Post',
      post: 'Lorem ipsum dolor sit amet',
      post_date: '2022-03-21',
      select: 'Option 1',
      check: true,
      gender: 'Male',
      image: 'http://example.com/image.jpg',
      img_file: new File([], 'image.jpg'),
    };

    expect(testData).toEqual(
      expect.objectContaining<TPCardForm>({
        id: expect.any(Number),
        author: expect.any(String),
        title: expect.any(String),
        post: expect.any(String),
        post_date: expect.any(String),
        select: expect.any(String),
        check: expect.any(Boolean),
        gender: expect.any(String),
        image: expect.any(String),
        img_file: expect.any(File),
      })
    );
  });
});
