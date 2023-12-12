'use client';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import MyButton from './MyButton';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1'>
          {session.user?.image && (
            <Image src={session.user?.image} alt='avatar' width={40} height={40} className='rounded-full' />
          )}
          <span className='text-sm font-bold'>{session.user?.name}</span>
        </div>
        <br />
        <MyButton
          color='red'
          onClick={() => signOut()}
        >
          Sign out
        </MyButton>
      </div>
    );
  }

  return (
    <>
      <MyButton
        color='blue'
        onClick={() => signIn()}
      >
        Sign in
      </MyButton>
    </>
  );
}

export default function NavWidget() {
  return (
    <div className='flex items-center gap-[2.5rem]'>
      <AuthButton />
    </div>
  );
}
