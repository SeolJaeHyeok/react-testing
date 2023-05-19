import { rest } from 'msw';

export const handler = [
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate scoop', image: '/images/chocolate.png' },
        { name: 'Vanila scoop', image: '/images/vanila.png' },
      ])
    );
  }),
];
