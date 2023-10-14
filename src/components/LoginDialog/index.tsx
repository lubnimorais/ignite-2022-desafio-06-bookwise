import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { X } from 'phosphor-react';

import { useRouter } from 'next/router';

import { DialogClose, DialogContent, DialogOverlay } from './styles';
import { Heading } from '../Typography';
import { AuthButton } from '../AuthButton';

interface ILoginDialogProps {
  children: ReactNode;
}

const LoginDialog = ({ children }: ILoginDialogProps) => {
  const router = useRouter();

  const paramBookId = router.query.bookId as string;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <div>
            <Heading size="xs" color="gray-200" css={{ marginBottom: 40 }}>
              Faça o login para deixar sua avaliação
            </Heading>

            <AuthButton
              title="Entrar com o Google"
              image="/images/icons/google.svg"
              alt="Logotipo Google"
              provider="google"
              callbackUrl={
                paramBookId ? `/explorer?bookId=${paramBookId}` : '/explorer'
              }
            />

            <AuthButton
              title="Entrar com o Github"
              image="/images/icons/github.svg"
              alt="Logotipo Github"
              provider="github"
              callbackUrl={
                paramBookId ? `/explorer?bookId=${paramBookId}` : '/explorer'
              }
            />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { LoginDialog };
