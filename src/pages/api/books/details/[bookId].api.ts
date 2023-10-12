import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@/libs/prisma';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  const bookId = request.query.bookId as string;

  const book = await prismaClient.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        include: {
          user: true,
        },
      },
    },
  });

  const booksAvgRating = await prismaClient.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: bookId,
    },
    _avg: {
      rate: true,
    },
  });

  const bookWithAvgRating = {
    ...book,
    averageRating: booksAvgRating[0]?._avg.rate ?? 0,
  };

  return response.status(200).json({ book: bookWithAvgRating });
}
