import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@/libs/prisma';
import { getServerSession } from 'next-auth';
import { buildNextAuthOptions } from '../auth/[...nextauth].api';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  const categoryId = request.query.category as string;

  const books = await prismaClient.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      ratings: true,
    },
  });

  const booksAvgRating = await prismaClient.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  });

  let userBooksIds: string[] = [];

  const session = await getServerSession(
    request,
    response,
    buildNextAuthOptions(request, response),
  );

  if (session) {
    const userBooks = await prismaClient.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session.user.id),
          },
        },
      },
    });

    userBooksIds = userBooks.map((book) => book.id);
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    );
    const { ratings, ...bookInfo } = book;

    return {
      ...bookInfo,
      ratings: ratings.length,
      averageRating: bookAvgRating?._avg.rate,
      alreadyRead: userBooksIds.includes(book.id),
    };
  });

  return response.status(200).json({ books: booksWithAvgRating });
}
