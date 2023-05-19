import { rest } from 'msw';

export const handler = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', image: '/images/chocolate.png' },
        { name: 'Vanila', image: '/images/vanila.png' },
      ])
    );
  }),
];
