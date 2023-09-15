import { PrismaClient } from '@prisma/client';

/**
 * Como em ambiente de desenvolvimento no Next o Prisma
 * fica criando múltiplas instâncias do PrismaClient e
 * ao mesmo tempo e isso vai ficar gerando warnings no
 * console.
 * Declaramos globalmente a variável prismaClient e setamos
 * ela com o new PrismaClient() se estiver vazia, senão
 * pega o valor que já existia.
 * E se estiver em ambiente de desenvolvimento, definimos
 * a variável global com a variável prismaClient
 */

declare global {
  var prismaClient: PrismaClient | undefined;
}

const prismaClient =
  global.prismaClient ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') global.prismaClient = prismaClient;

export { prismaClient };
