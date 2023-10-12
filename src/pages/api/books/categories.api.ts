import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '@/libs/prisma';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method !== 'GET') {
    return response.status(405).end();
  }

  const categories = await prismaClient.category.findMany();

  return response.status(200).json({ categories });
}
