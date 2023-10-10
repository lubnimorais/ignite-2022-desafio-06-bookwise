import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@/libs/prisma';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  const ratings = await prismaClient.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
    // LIMITA EM 10 REGISTROS
    take: 10,
  });

  return response.status(200).json({ ratings });
}
