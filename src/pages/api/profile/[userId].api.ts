import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@/libs/prisma';
import { getMostFrequentString } from '@/utils/getMostFrequentString';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  const userId = request.query.userId as string;

  const profile = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  });

  // total de páginas lidas
  const readPages = profile?.ratings.reduce((accumulator, rating) => {
    return accumulator + rating.book.total_pages;
  }, 0);

  // quantidade de livros lidos
  const ratedBooks = profile?.ratings.length;

  // autores lidos
  const readAuthors = profile?.ratings.reduce((accumulator, rating) => {
    if (!accumulator.includes(rating.book.author)) {
      accumulator.push(rating.book.author);
    }

    return accumulator;
  }, [] as string[]);

  // retornar categoria mais lida
  const categories = profile?.ratings.flatMap((rating) => {
    return rating.book.categories.flatMap((category) => {
      return category.category.name;
    });
  });

  const mostReadCategory = categories
    ? getMostFrequentString(categories)
    : null;

  const profileData = {
    user: {
      name: profile?.name,
      avatar_url: profile?.avatar_url,
      member_since: profile?.created_at,
    },
    ratings: profile?.ratings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors?.length,
    mostReadCategory,
  };

  return response.status(200).json({ profile: profileData });
}
