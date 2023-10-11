import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@/libs/prisma';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  // PEGAR LIVROS E AVALIAÇÕES
  const books = await prismaClient.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  });

  // NOTA MÉDIA
  const booksAvgRating = await prismaClient.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  });

  // JUNTANDO AS DUAS VARIÁVEIS
  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    );

    // ratings é uma array de avaliações
    const { ratings, ...bookInfo } = book;

    return {
      ...bookInfo,
      averageRating: bookAvgRating?._avg.rate,
    };
  });

  return response.status(200).json({ books: booksWithAvgRating });
}
