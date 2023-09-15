import { PrismaAdapter } from '@/services/auth/PrismaAdapter';
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import GithubProvider, { GithubProfile } from 'next-auth/providers/github';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        profile: (profile: GithubProfile) => {
          return {
            id: String(profile.id),
            name: profile.name!,
            email: profile.email!,
            avatar_url: profile.avatar_url,
          };
        },
      }),

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
        // profile -> exatamente o que o Google retorna, quando faz login
        // serve para mapear os campos internos do NextAuth com o perfil retornado do Google
        profile: (profile: GoogleProfile) => {
          return {
            // sub - identifica o usuário unicamente
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          };
        },
      }),
      // ...add more providers here
    ],
    callbacks: {
      // quando chamar a sessão os dados do usuário estar incluso
      async session({ session, user }) {
        return {
          ...session,
          user,
        };
      },
    },
  };
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res));
}
