import { NextApiRequest, NextApiResponse } from 'next';

import { getServerSession } from 'next-auth';

import { buildNextAuthOptions } from '../../auth/[...nextauth].api';

import { prismaClient } from '@/libs/prisma';

import { z as zod } from 'zod';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).end();
  }

  const session = await getServerSession(
    request,
    response,
    buildNextAuthOptions(request, response),
  );

  if (!session) {
    return response.status(401).end();
  }

  try {
    const bookId = request.query.bookId as string;
    const userId = session.user.id;

    const rateBodySchema = zod.object({
      description: zod.string().max(450),
      rate: zod.number().min(1).max(5),
    });

    const { description, rate } = rateBodySchema.parse(request.body);

    const userAlreadyRated = await prismaClient.rating.findFirst({
      where: {
        book_id: bookId,
        user_id: userId,
      },
    });

    if (userAlreadyRated) {
      return response.status(400).json({
        error: 'You already rated this book',
      });
    }

    await prismaClient.rating.create({
      data: {
        book_id: bookId,
        description,
        rate,
        user_id: userId,
      },
    });

    return response.status(201).end();
  } catch (err) {
    console.log('Erro no rate: ', err);

    return response.status(400).end();
  }
}
