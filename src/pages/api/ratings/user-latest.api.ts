import { NextApiRequest, NextApiResponse } from 'next';

import { getServerSession } from 'next-auth';

import { buildNextAuthOptions } from '../auth/[...nextauth].api';

import { prismaClient } from '@/libs/prisma';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
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

  const latestUserRating = await prismaClient.rating.findFirst({
    where: {
      user_id: session.user.id,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  });

  return response.status(200).json({ rating: latestUserRating });
}
